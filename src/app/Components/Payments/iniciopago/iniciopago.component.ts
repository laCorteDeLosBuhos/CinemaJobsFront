import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InitServiceService } from 'src/app/Services/init-service.service';

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
      email:sessionStorage.getItem("email")
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
  selected:any;
  select(a:any){
    this.selected=(a)
  }
  send(){
    let datos={
      email:sessionStorage.getItem("email"),
      customerId:sessionStorage.getItem("customerId"),
      cardId:this.selected.cardId,
      amount:50,
      oneTime:false
    }
    this.service.createCharge(datos).toPromise().then(res=>{
      
    })
  }
}
