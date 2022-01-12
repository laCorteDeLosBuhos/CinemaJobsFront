import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InitServiceService } from 'src/app/Services/init-service.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  form:FormGroup=new FormGroup({});
  constructor(private service:InitServiceService,private _fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.form=this._fb.group({
      cardNumber:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]\d*$/),Validators.minLength(16),Validators.minLength(16)]),
      expMonth:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]\d*$/),Validators.min(1),Validators.min(12)]),
      expYear:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]\d*$/)]),
      cvc:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]\d*$/)]),
      cardName:new FormControl('',[Validators.required]),
      country:new FormControl('',[Validators.required]),
      postal:new FormControl('',[Validators.required,Validators.pattern(/^[0-9]\d*$/)]),
    })
  }

  send(){
    if(this.form.valid){
      let info=this.form.value;
      let datos={
        cardNumber:info.cardNumber,
        cardExpMonth:info.expMonth,
        cardExpYear:info.expYear,
        cardCVC:info.cvc,
        cardName:info.cardName,
        country:info.country,
        postal_code:info.postal,
        customerId:sessionStorage.getItem("customerId")
      }
      this.service.addNewCard(datos).toPromise().then((res:any)=>{
        this.router.navigate(['payments'])        
      })
    }else{
      console.log(this.form)
      this.form.markAllAsTouched()
    }
  }
}
