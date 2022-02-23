import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InitServiceService } from 'src/app/Services/init-service.service';
import Swal from 'sweetalert2';
import * as uniqid from 'uniqid';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  form!:FormGroup;
  roles: any;
  constructor(private service:InitServiceService,private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.service.obtenerUsuarios().toPromise().then((result:any)=>{
      this.roles=result.filter((res:any)=>res.parent=="0");
    })
    this.form=this.formBuilder.group({
      "name":new FormControl('',[Validators.required]),
      "offerDescription":new FormControl('',[Validators.required]),
      "accountUser":new FormControl('',[Validators.required]),
      "offer-youtube-video":new FormControl(''),
      "offer-contact-phone":new FormControl(''),
      "offer-contact-whatsapp":new FormControl(''),
      "offer-contact-email":new FormControl(''),
      "offer-schedule":new FormControl(''),
      "offer-salary":new FormControl(''),
      "offer-requirements":new FormControl(''),
      "offer-location":new FormControl(''),
      "offer-contract-type":new FormControl(''),
      "offer-additional-instructions":new FormControl(''),
      "offer-id-tag":new FormControl(''),
      'offer-external-view-password':new FormControl(''),
    })
  }
  $addOfferInfo:any = {};
  crear(){
    if(this.form.valid){
      this.$addOfferInfo['offer-youtube-video'] = this.form.get('offer-youtube-video')?.value.substring(0, 220);
      this.$addOfferInfo['offer-contact-phone'] = this.form.get('offer-contact-phone')?.value.substring(0, 220);
      this.$addOfferInfo['offer-contact-whatsapp'] = this.form.get('offer-contact-whatsapp')?.value.substring(0, 220);
      this.$addOfferInfo['offer-contact-email'] = this.form.get('offer-contact-email')?.value.substring(0, 220);
      this.$addOfferInfo['offer-schedule'] = this.form.get('offer-schedule')?.value.substring(0, 220);
      this.$addOfferInfo['offer-salary'] = this.form.get('offer-salary')?.value.substring(0, 220);
      this.$addOfferInfo['offer-requirements'] = this.form.get('offer-requirements')?.value.substring( 0, 60000);
      this.$addOfferInfo['offer-location'] = this.form.get('offer-location')?.value.substring(0, 220);
      this.$addOfferInfo['offer-contract-type'] = this.form.get('offer-contract-type')?.value.substring(0, 220);
      this.$addOfferInfo['offer-additional-instructions'] = this.form.get('offer-additional-instructions')?.value.substring(0, 220);
      var idTag=this.form.get('offer-id-tag')?.value.substring(0, 220);
      var external=this.form.get('offer-external-view-password')?.value.substring(0, 220);
      let meta={"offer-id-tag":idTag,'offer-external-view-password': external}
      let datos={
        optionalOfferData:JSON.stringify(this.$addOfferInfo),
        name:this.form.get('name')?.value.substring(0, 220),
        offerDescription:this.form.get('offerDescription')?.value.substring(0, 6000),
        slug:uniqid(),
        accountUser:this.form.get('accountUser')?.value,
        metadata:JSON.stringify(meta)
      }
      this.service.crearProcesos(datos).toPromise().then(res=>{
        if(res.message=="Oferta creada exitosamente"){
          Swal.fire({
            title: 'Proceso Creado Satisfactoriamente',
            text: 'Se le ha asignado satisfactoriamente la oferta a la cuenta padre',
            icon: "success"
          }).then(res=>{
            this.router.navigate(['administrar/ofertas'])
          })
        }else{
          Swal.fire({
            title: 'Oh no!',
            text: 'El usuario ya tiene el maximo de procesos creados. Informale que debe incrementar el plan que tiene contratado.',
            icon: "error"
          })
        }
      })
    }else{
      console.log(this.form)
      this.form.markAllAsTouched()
    }
    
  }
}
