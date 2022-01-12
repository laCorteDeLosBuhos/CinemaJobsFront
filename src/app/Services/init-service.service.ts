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
    return this.http.post("http://localhost:4000.com/api/admin/crear",datos)
  }
  obtenerUsuarios():Observable<any>{
    return this.http.get("http://localhost:4000/api/cuentas/obtener")
  }
  eliminarUsuario(datos:any):Observable<any>{
    return this.http.post("http://localhost:4000/api/cuentaspadre/eliminar",datos)
  }
  editarUsuario(datos:any):Observable<any>{
    return this.http.post("https://cinemajobs-api.herokuapp.com/api/cuentaspadre/editar",datos)
  }
  deleteCard(datos:any):Observable<any>{
    return this.http.post("https://cinemajobs-api.herokuapp.com/payment/deleteCard",datos)
  }
  updateCardDetails(datos:any):Observable<any>{
    return this.http.post("https://cinemajobs-api.herokuapp.com/payment/updateCardDetails",datos)
  }
  viewAllCards(datos:any):Observable<any>{
    return this.http.post("https://cinemajobs-api.herokuapp.com/payment/viewAllCards",datos)
  }
  createCharge(datos:any):Observable<any>{
    return this.http.post("https://cinemajobs-api.herokuapp.com/payment/createCharge",datos)
  }
  addNewCard(datos:any):Observable<any>{
    return this.http.post("https://cinemajobs-api.herokuapp.com/payment/addNewCard",datos)
  }
  newCustormer(datos:any):Observable<any>{
    return this.http.post("https://cinemajobs-api.herokuapp.com/payment/newCustomer",datos)
  }
  findCustomer(datos:any):Observable<any>{
    return this.http.post("https://cinemajobs-api.herokuapp.com/payment/findCustomer",datos)
  }
}
