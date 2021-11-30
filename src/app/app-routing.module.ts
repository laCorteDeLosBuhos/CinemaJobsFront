import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './Components/Administrar/usuarios/usuarios.component';
import { LoginComponent } from './Components/login/login.component';
import { EmpresaComponent } from './Components/registrar/empresa/empresa.component';
import { UsuarioComponent } from './Components/registrar/usuario/usuario.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'registrar/usuario',component:UsuarioComponent},
  {path:'registrar/empresa',component:EmpresaComponent},
  {path:'administrar/usuarios',component:UsuariosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
