import { HttpClient } from '@angular/common/http';

import { Component, OnInit, ViewChild, HostBinding } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatSort } from '@angular/material/sort'
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';

import { PerneriaService } from '../../../services/perneria.service'
import { Perneria } from '../../../model/perneria'

import { Subscription, tap } from 'rxjs';

import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-perneria-list',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatProgressBarModule,
    MatBadgeModule,

  ],
  templateUrl: './perneria-list.component.html',
  styleUrl: './perneria-list.component.less'
})
export class PerneriaListComponent {
  listaPerneria: Perneria[] = []
  dataSource = new MatTableDataSource<Perneria>();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @HostBinding('class') classes = 'row';

  subscription: Subscription[] = [];

  length: number = 100;
  pageIndex: number  = 0;
  pageSize: number = 24;
  pageNumber: number = 0;
  pageSizeOptions: number[] = [25, 50];

  pageEvent?: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
  row: any;
  sel: number = 0;

  /* displayedColumns = [
'acciones', 'ID_PERNO', 'OC', 'CONTRATO', 'GUIA', 'SNF', 'BULTO', 'ITEMCODE', 'TIPO_ELEMENTO', 'MARCA', 'MARCA2', 'TUNEL', 'DISPOSICION_FINAL', 'CANTIDAD_SNF', 'CANTIDAD_TERRENO', 'DIFERENCIA', 'PESO_UNITARIO', 'PESO_TOTAL', 'PROVEEDOR', 'PATIO', 'FECHA_LLEGADA', 'OBSERVACION', 'NB_ASIG_TERR']; */

displayedColumns = [
  'ITEMCODE', 'SNF', 'BULTO', 'TIPO_ELEMENTO', 'MARCA', 'TUNEL', 'DISPOSICION_FINAL', 'CANTIDAD_SNF', 'CANTIDAD_TERRENO', 'DIFERENCIA', 'PORCENT', 'PESO_UNITARIO', 'PESO_TOTAL', 'PROVEEDOR', 'PATIO', 'FECHA_LLEGADA', 'OBSERVACION'];

  form_Perneria!: FormGroup;

  Registro_Perneria: Perneria = {
    ID_PERNO: 0,
    OC: 0,
    CONTRATO: '',
    GUIA: 0,
    SNF: '',
    BULTO: 0,
    ITEMCODE: '',
    TIPO_ELEMENTO: '',
    MARCA: '',
    MARCA2: '',
    TUNEL: '',
    DISPOSICION_FINAL: '',
    CANTIDAD_SNF: 0,
    CANTIDAD_TERRENO: 0,
    DIFERENCIA: 0,
    PESO_UNITARIO: 0,
    PESO_TOTAL: 0,
    PROVEEDOR: '',
    PATIO: '',
    FECHA_LLEGADA: '',
    OBSERVACION: '',
    NB_ASIG_TERR: '',
    TIPOELEM_DESCRIPCION: '',
    TUNEL_DESCRIPCION: '',
    DISPO_DESCRIPCION: '',
    PROVE_DESCRIPCION: '',
    PATIO_DESCRIPCION: '',
  }

  titulo: any = '';
 constructor(
    private perneriaService: PerneriaService,
    private fb: FormBuilder,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    }

  ngOnInit() {

    this.titulo = localStorage.getItem("Seleccion")
    var resultado = (this.titulo != null ) ? this.titulo.split("/")[3] : "Perneria";
    this.titulo = resultado

    this.getPerneria();
  }

  getPerneria() {

    console.log("Procedimiento Perneria")

    this.perneriaService.getPerneria().subscribe( data => {
      this.listaPerneria = data;
      console.log(data)

      this.dataSource = new MatTableDataSource(this.listaPerneria);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    });
  }

  applyFilter(filterValue: any) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
 };

myClic(row: any) {

  localStorage.setItem('perno_fila', row.ID_PERNO);
  this.miRouting(row.ID_PERNO)
}

miRouting(id: number) {
  let  myurl = `${'perneria/id'}`;
  this.router.navigate([myurl] ).then(e => {
    if (e) {
    } else { }
  });
}




}
