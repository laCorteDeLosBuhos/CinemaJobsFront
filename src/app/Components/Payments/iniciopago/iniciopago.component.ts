import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InitServiceService } from 'src/app/Services/init-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-iniciopago',
  templateUrl: './iniciopago.component.html',
  styleUrls: ['./iniciopago.component.css']
})
export class IniciopagoComponent implements OnInit {
  form:FormGroup=new FormGroup({});
  cards: any;
  constructor(private service:InitServiceService,private _fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    let datos={
      email:localStorage.getItem("email")
    }
    this.service.findCustomer(datos).toPromise().then((res:any)=>{
        sessionStorage.setItem("customerId",res.CustomerID)
        let info={customerId:res.CustomerID}
        this.service.viewAllCards(info).toPromise().then((cards:any)=>{
          this.cards = (cards);
        })
    }).catch(err=>{
      console.log(err)
      this.service.newCustormer(datos).toPromise().then(result=>{
        sessionStorage.setItem("customerId",result.CustomerID)
      })
    })
  }
  crear(){
    this.router.navigate(['payments/addCard'])
  }
  selected:any={cardId:""};
  select(a:any){
    this.selected=(a)
  }
  delete(a:any){
    let datos={
      customerId:sessionStorage.getItem("customerId"),
      cardId:this.selected.cardId,
    }
    this.service.deleteCard(datos).toPromise().then(res=>{
      res;
      let info={
        customerId:sessionStorage.getItem("customerId"),
      }
      this.service.viewAllCards(info).toPromise().then((cards:any)=>{
        this.cards = (cards);
      })
    })
  }
  send(){
    let datos={
      email:sessionStorage.getItem("email"),
      cardId:this.selected.cardId,
      amount:50,
      customerId:sessionStorage.getItem("customerId"),
      oneTime:false
    }
    this.service.createCharge(datos).toPromise().then(res=>{
      Swal.fire('Transaccion Exitosa','Puedes volver a nuestra pagina','success')
    }).catch(err=>{
      Swal.fire('Transaccion Exitosa','Puedes volver a nuestra pagina','success')
    })
  }
}
