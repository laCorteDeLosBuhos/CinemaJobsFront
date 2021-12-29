import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {

  }
  submit(){
    if(this.form.valid){
      let request={
        "username": this.form.get("user")?.value,
        "password": this.form.get("pass")?.value
      };
      this.serv.login(request).subscribe(res=>{
        if(res.TipoUsuario=="Administrador"){
          this.router.navigate(['administrar/usuarios'])
        }else{
          sessionStorage.setItem("email",this.form.get("user")?.value)
          this.router.navigate(['payments'])
          /*Swal.fire(
            'Exito',
            'Haz iniciado sesión exitosamente',
            'success'
          )*/
        }
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
