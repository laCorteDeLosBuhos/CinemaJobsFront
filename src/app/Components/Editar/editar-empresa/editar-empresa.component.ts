import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InitServiceService } from 'src/app/Services/init-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent implements OnInit {

  form!: FormGroup;
  cuentas = new FormArray([]);
  image:any="";
  constructor(private fb: FormBuilder,private service:InitServiceService,private router:Router) { }
  ngOnInit(): void {
    let informacion=this.service.informacion;
    this.form=this.fb.group({
      Id:[informacion.Id,[Validators.required]],
      nombre:[informacion.Nombre,[Validators.required]],
      email:[informacion.Email,[Validators.required]],
      password:[informacion.password,Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(25),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
     ])],
      confirmar:[informacion.password,[Validators.required]],
      empresa:[informacion.empresa,[Validators.required]],
      descripcion:[informacion.descripcion,[Validators.required]],
      logo:[''],
      video:[informacion.video,[Validators.required]],
      color:[informacion.color,[Validators.required]],
      pais:[informacion.pais,[Validators.required]],
      ciudad:[informacion.ciudad,[Validators.required]],
      direccion:[informacion.direccion,[Validators.required]],
      indicativo:[informacion.indicativo,[Validators.required]],
      telefono:[informacion.telefono,[Validators.required]]
    })
    this.image=informacion.logo;
    
  }
  crear(){
    if(this.form.valid){
      let data=this.form.value;
      data.logo=this.image;
      delete data.confirmar;
      this.service.editarUsuario(data).toPromise().then((res:any)=>{
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
