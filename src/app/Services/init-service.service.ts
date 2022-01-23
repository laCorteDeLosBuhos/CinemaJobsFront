import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  mailingreso(datos:any):Observable<any>{
    return this.http.post("https://cinemajobs-api.herokuapp.com/api/mail/ingreso",datos)
  }
  iniciartusdatos(datos:any):Observable<any>{
    return this.http.post("https://cinemajobs-api.herokuapp.com/api/tusdatos/iniciar",datos)
  }
  obtenertusdatos(a:any):Observable<any>{
    const headers = new HttpHeaders({
      Accept:'text/html'
    });
    return this.http.post("https://cinemajobs-api.herokuapp.com/api/tusdatos/validar",a,{headers:headers,responseType:'text'})
  }
}
