import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InitServiceService } from 'src/app/Services/init-service.service';

@Component({
  selector: 'app-tus-datos',
  templateUrl: './tus-datos.component.html',
  styleUrls: ['./tus-datos.component.css']
})
export class TusDatosComponent implements OnInit {

  form!: FormGroup;
  
    respuesta=""
    constructor(private fb: FormBuilder,private service:InitServiceService,private router:Router) { }
    ngOnInit(): void {
      let informacion=this.service.informacion;
      this.form=this.fb.group({
        tipodoc:["",[Validators.required]],
        documento:["",[Validators.required]]
      })
    }
    crear(){
      let datos={
        "doc": parseInt(this.form.get("documento")?.value),
        "typedoc": this.form.get("tipodoc")?.value
      }
      this.service.iniciartusdatos(datos).toPromise().then((res:any)=>{
        this.service.obtenertusdatos(res).toPromise().then((html:any)=>{
          this.respuesta=html
        })
      })
    }
}
