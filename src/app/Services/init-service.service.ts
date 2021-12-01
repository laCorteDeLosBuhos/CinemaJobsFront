import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitServiceService {
  informacion:any;
  constructor(private http: HttpClient) { }

  login(datos:any):Observable<any>{
    return this.http.post("https://cinemajobs-api.herokuapp.com/api/auth/",datos)
  }
  crearUsuario(datos:any):Observable<any>{
    return this.http.post("https://cinemajobs-api.herokuapp.com/api/cuentaspadre/crear",datos)
  }
  crearUsuarioAdmin(datos:any):Observable<any>{
    return this.http.post("https://cinemajobs-api.herokuapp.com/api/admin/crear",datos)
  }
  obtenerUsuarios():Observable<any>{
    return this.http.get("https://cinemajobs-api.herokuapp.com/api/cuentas/obtener")
  }
  eliminarUsuario(datos:any):Observable<any>{
    return this.http.post("https://cinemajobs-api.herokuapp.com/api/cuentaspadre/eliminar",datos)
  }
  editarUsuario(datos:any):Observable<any>{
    return this.http.post("https://cinemajobs-api.herokuapp.com/api/cuentaspadre/editar",datos)
  }
}
