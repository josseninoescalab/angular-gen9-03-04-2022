import { Paciente } from './../_model/paciente';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {  

  pacienteCambio = new Subject<Paciente[]>();
  mensajeCambio = new Subject<string>();

  url: string = `${environment.HOST}/pacientes`;

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Paciente[]>(this.url, {
      headers: new HttpHeaders(
        {"Authorization": "Basic Y29kZW1lZGlhcHA6Y29kZTg5Y29kZXg="})
    });
  }

  listarPageable(p: number, s: number) {
    return this.http.get<any>(`${this.url}/pageable?page=${p}&size=${s}`, {
      headers: new HttpHeaders(
        {"Authorization": "Basic Y29kZW1lZGlhcHA6Y29kZTg5Y29kZXg="})
    });
  }

  listarPorId(idPaciente: number) {
    return this.http.get<Paciente>(`${this.url}/${idPaciente}`);
  }

  registrar(paciente: Paciente) {
    return this.http.post(this.url, paciente);
  }

  modificar(paciente: Paciente) {
    return this.http.put(this.url, paciente);
  }

  eliminar(idPaciente: number) {
    return this.http.delete(`${this.url}/${idPaciente}`,{
      headers: new HttpHeaders(
        {"Authorization": "Basic Y29kZW1lZGlhcHA6Y29kZTg5Y29kZXg="})
    });
  }

  generarResumenPDF(){
    return this.http.get<any>(`${environment.HOST}/consultas/generarReporte/pdf`, {
      headers: new HttpHeaders(
        {"Authorization": "Basic Y29kZW1lZGlhcHA6Y29kZTg5Y29kZXg="})
    });
  }
}
