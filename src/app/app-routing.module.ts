import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './Components/Administrar/ofertas/crear/crear.component';
import { OfertasComponent } from './Components/Administrar/ofertas/ofertas.component';
import { UsuariosComponent } from './Components/Administrar/usuarios/usuarios.component';
import { EditarEmpresaComponent } from './Components/Editar/editar-empresa/editar-empresa.component';
import { EditarUsuarioComponent } from './Components/Editar/editar-usuario/editar-usuario.component';
import { LoginComponent } from './Components/login/login.component';
import { AddCardComponent } from './Components/Payments/add-card/add-card.component';
import { IniciopagoComponent } from './Components/Payments/iniciopago/iniciopago.component';
import { EmpresaComponent } from './Components/registrar/empresa/empresa.component';
import { UsuarioComponent } from './Components/registrar/usuario/usuario.component';
import { TusDatosComponent } from './Components/tus-datos/tus-datos.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'registrar/usuario',component:UsuarioComponent},
  {path:'registrar/empresa',component:EmpresaComponent},
  {path:'administrar/usuarios',component:UsuariosComponent},
  {path:'editar/usuario',component:EditarUsuarioComponent},
  {path:'editar/empresa',component:EditarEmpresaComponent},
  {path:'payments',component:IniciopagoComponent},
  {path:'payments/addCard',component:AddCardComponent},
  {path:'validarIdentidad',component:TusDatosComponent},
  {path:'administrar/ofertas',component:OfertasComponent},
  {path:'registrar/oferta',component:CrearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
