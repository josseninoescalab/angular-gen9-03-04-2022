import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { EspecialidadService } from './../../_service/especialidad.service';
import { MatPaginator, MatSort, MatTableDataSource, MatSnackBar } from '@angular/material';
import { Especialidad } from './../../_model/especialidad';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent implements OnInit {

  displayedColumns = ['id', 'nombre', 'acciones'];
  dataSource: MatTableDataSource<Especialidad>;
  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true}) sort: MatSort;


  constructor(private especialidadService: EspecialidadService, private snackBar: MatSnackBar, public route: ActivatedRoute) { }

  ngOnInit() {
     
    this.especialidadService.especialidadCambio.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    this.especialidadService.mensajeCambio.subscribe(data => {
        this.snackBar.open(data, 'AVISO', {
          duration: 2000,
        });
    });

    this.especialidadService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  filtrar(valor: string) {
    this.dataSource.filter = valor.trim().toLowerCase();
  }

  eliminar(especialidad: Especialidad) {
   this.especialidadService.eliminar(especialidad.idEspecialidad).pipe(switchMap(() => {
     return this.especialidadService.listar();
   })).subscribe(data => {
     this.especialidadService.especialidadCambio.next(data);
     this.especialidadService.mensajeCambio.next('Se ELIMINO');
   });
  }
}
