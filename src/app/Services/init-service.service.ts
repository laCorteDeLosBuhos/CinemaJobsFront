import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InitServiceService {

  constructor(private http: HttpClient) { }

  login(datos:any):Observable<any>{
    return this.http.post("http://localhost:4000/api/auth/",datos)
  }
}
