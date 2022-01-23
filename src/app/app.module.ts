import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './Components/registrar/usuario/usuario.component';
import { EmpresaComponent } from './Components/registrar/empresa/empresa.component';
import { HeaderComponent } from './Components/header/header.component';
import { UsuariosComponent } from './Components/Administrar/usuarios/usuarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EditarEmpresaComponent } from './Components/Editar/editar-empresa/editar-empresa.component';
import { EditarUsuarioComponent } from './Components/Editar/editar-usuario/editar-usuario.component';
import { IniciopagoComponent } from './Components/Payments/iniciopago/iniciopago.component';
import { AddCardComponent } from './Components/Payments/add-card/add-card.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TusDatosComponent } from './Components/tus-datos/tus-datos.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    EmpresaComponent,
    HeaderComponent,
    UsuariosComponent,
    EditarEmpresaComponent,
    EditarUsuarioComponent,
    IniciopagoComponent,
    AddCardComponent,
    TusDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
