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
    return this.http.post("http://localhost:4000/api/auth/",datos)
  }
  crearUsuario(datos:any):Observable<any>{
    return this.http.post("http://localhost:4000/api/cuentaspadre/crear",datos)
  }
  crearUsuarioAdmin(datos:any):Observable<any>{
    return this.http.post("http://localhost:4000/api/admin/crear",datos)
  }
  obtenerUsuarios():Observable<any>{
    return this.http.get("http://localhost:4000/api/cuentas/obtener")
  }
  eliminarUsuario(datos:any):Observable<any>{
    return this.http.post("http://localhost:4000/api/cuentaspadre/eliminar",datos)
  }
  editarUsuario(datos:any):Observable<any>{
    return this.http.post("http://localhost:4000/api/cuentaspadre/editar",datos)
  }
}
