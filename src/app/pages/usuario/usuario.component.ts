import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/_service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  pacientes: any;
  showPacientes: boolean = false;

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.obtenerTodosUsuarios();
  }

  obtenerTodosUsuarios(){
    this.usuarioService.findAll().subscribe((data) => {
      this.pacientes = data;
      this.showPacientes = true;
    }, error => {
      alert("Error al consumir servicio paciente");
    })
  }

}
