import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestLogin } from './../models/RequestLogin';
import { Injectable } from '@angular/core';
import { ResponseLogin } from '../models/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public doLogin(requestLogin: RequestLogin): Observable<ResponseLogin>{
    return this.httpClient.post<ResponseLogin>('http://localhost:8080/api/login', requestLogin);
    //o metodo post me retorna um observable
    //ele vai ao servidor para fazer a autenticacao
  }
}
