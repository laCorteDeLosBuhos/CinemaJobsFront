import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './Components/Administrar/usuarios/usuarios.component';
import { EditarEmpresaComponent } from './Components/Editar/editar-empresa/editar-empresa.component';
import { EditarUsuarioComponent } from './Components/Editar/editar-usuario/editar-usuario.component';
import { LoginComponent } from './Components/login/login.component';
import { EmpresaComponent } from './Components/registrar/empresa/empresa.component';
import { UsuarioComponent } from './Components/registrar/usuario/usuario.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'registrar/usuario',component:UsuarioComponent},
  {path:'registrar/empresa',component:EmpresaComponent},
  {path:'administrar/usuarios',component:UsuariosComponent},
  {path:'editar/usuario',component:EditarUsuarioComponent},
  {path:'editar/empresa',component:EditarEmpresaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
