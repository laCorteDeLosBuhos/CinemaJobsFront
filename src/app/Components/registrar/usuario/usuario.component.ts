import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InitServiceService } from 'src/app/Services/init-service.service';
import Swal from 'sweetalert2';
import * as uniqid from 'uniqid';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  form!: FormGroup;
  image:any="";
  constructor(private fb: FormBuilder,private service:InitServiceService,private router:Router) { }
  ngOnInit(): void {
    this.form=this.fb.group({
      user:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(25),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
     ])],
      confirmar:['',[Validators.required]],
      pais:['',[Validators.required]],
    })
  }
  crear(){
    if(this.form.valid){
      let data=this.form.value;
      data.account_code=uniqid('AC');
      this.service.crearUsuarioAdmin(data).toPromise().then((res:any)=>{
        Swal.fire('Exito',res.message,'success').then((result)=>{
          this.router.navigate(['administrar/usuarios'])
        })
      }).catch((err:any)=>{
        Swal.fire('Error','Ha ocurrido un error','success')
      })
    }else{
      this.form.markAllAsTouched()
    }
  }
}
