import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Usuario } from '../_model/usuario';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(){
    return this.http.get<Usuario[]>(environment.HOST + "/paciente",{
      headers: new HttpHeaders(
        {"Authorization": "Basic Y29kZW1lZGlhcHA6Y29kZTg5Y29kZXg="})
    });
  }
}
