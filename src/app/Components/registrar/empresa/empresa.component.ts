import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InitServiceService } from 'src/app/Services/init-service.service';
import Swal from 'sweetalert2';
import * as uniqid from 'uniqid';
@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  form!: FormGroup;
  cuentas = new FormArray([]);
  image:any="";
  roles:any;
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
      empresa:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      logo:['',[Validators.required]],
      video:['',[Validators.required]],
      color:['',[Validators.required]],
      pais:['',[Validators.required]],
      rol:['',[Validators.required]],
      cuentasSecundarias:this.cuentas
    })
    this.service.roles().toPromise().then(res=>{
      this.roles=res;
    })
  }
  crear(){
    if(this.form.valid){
      let data=this.form.value;
      //data.logo=this.image;
      data.account_code=uniqid('AC');
      this.service.crearUsuario(data).toPromise().then((res:any)=>{
        this.service.mailingreso({nombreUsuario:data.user,email:["<"+data.email+">"]}).toPromise().then(res=>{

        })
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
  anadir(){
    const cuenta = this.fb.group({
      user:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(25),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
     ])],
      confirmar:['',[Validators.required]]
    })
    this.cuentas.push(cuenta)
  }
  print(a:any){
    console.log(a)
  }
  imagen(e:any){
    const file = e.target.files[0];

    // encode the file using the FileReader API
    const reader = new FileReader();
    reader.onloadend = () => {
      // log to console
      // logs data:<type>;base64,wL2dvYWwgbW9yZ...
      console.log(reader.result);
      this.image=reader.result;
    };
    reader.readAsDataURL(file);
  }
}
