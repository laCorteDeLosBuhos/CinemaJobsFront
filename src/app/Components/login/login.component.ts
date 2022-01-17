import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { InitServiceService } from 'src/app/Services/init-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    user: new FormControl(''),
    pass: new FormControl(''),
  });
  constructor(private serv:InitServiceService,private router:Router) { }
  @ViewChild('patientInfoForm') patientInfoFormElement:any;
  ngOnInit(): void {

  }
  public patientInfoFormSubmitMethod(): void {
      this.patientInfoFormElement.nativeElement.submit();
  }
  submit(){
    
    if(this.form.valid){
      let request={
        "username": this.form.get("user")?.value,
        "password": this.form.get("pass")?.value
      };
      this.serv.login(request).subscribe(res=>{
        this.patientInfoFormSubmitMethod()
      },err=>{
        if(err.status==200){
          Swal.fire(
            'Exito',
            'Haz iniciado sesión exitosamente',
            'success'
          )
        }else if(err.status==401){
          Swal.fire(
            'Error',
            'Por favor verifica los datos ingresados',
            'error'
          )
        }else{
          Swal.fire(
            'Error',
            'Ha ocurrido un error, por favor intentalo mas tarde',
            'error'
          )
        }
      })
    }else{
      
    }
  }
}
