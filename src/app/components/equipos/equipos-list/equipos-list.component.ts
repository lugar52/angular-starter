import { HttpClient } from '@angular/common/http';

import { Component, OnInit, ViewChild, HostBinding } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort'

import { EquiposService } from '../../../services/equipos.service'
import { Equipos } from '../../../model/equipos'

import { Subscription, tap } from 'rxjs';

import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-equipos-list',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatTableModule,
    FormsModule,
  ],
  templateUrl: './equipos-list.component.html',
  styleUrl: './equipos-list.component.less'
})
export class EquiposListComponent {
  listaEquipos: Equipos[] = []
  dataSource = new MatTableDataSource<Equipos>();
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

  /* displayedColumns = ['cat_fila','cat_disciplina','matl_type', 'tag_number','cat_descripcion','cat_cwp', 'cat_cwp_descripcion','CAT_CONTRATO','CAT_DESTINO','CAT_ESTADO','REQ_LOG','REQ_REQ_NUMERO','REQ_DESCRIPCION_SUPLEMENTO','REQ_NUMERO','REQ_STATUS','REQ_CANTIDAD','REQ_TOTAL','SOL_RFQ_NUMERO','SOL_HITO','SOL_ESTATUS','SOL_FECHA','SOL_SIG_HITO','SOL_SIG_HITO_ESTATUS','SOL_SIG_HITO_FECHA','ORC_NUMERO_OC','ORC_LINEA','ORC_SUB_LINEA','ORC_DESTINO','ORC_CANTIDAD','ORC_FECHA_RAS','ORC_FECHA_SOP','ORC_GRUPO_DE_EMBARQUE','ORC_HITO','ORC_ESTATUS','ORC_FECHA','ORC_SIG_HITO','ORC_SIG_HITO_ESTATUS','ORC_SIG_HITO_FECHA']; */

  displayedColumns = ['BULTO', 'tag_number','cat_descripcion','cat_cwp', 'cat_cwp_descripcion','REQ_LOG','REQ_REQ_NUMERO','REQ_DESCRIPCION_SUPLEMENTO','REQ_NUMERO','REQ_STATUS','REQ_CANTIDAD','REQ_TOTAL','ORC_NUMERO_OC','ORC_LINEA','ORC_SUB_LINEA','ORC_DESTINO','ORC_CANTIDAD','ORC_FECHA_RAS','ORC_FECHA_SOP','ORC_GRUPO_DE_EMBARQUE','ORC_HITO','ORC_ESTATUS','ORC_FECHA','ORC_SIG_HITO','ORC_SIG_HITO_ESTATUS','ORC_SIG_HITO_FECHA'];

  form_equipos!: FormGroup;

  Registro_Equipos: Equipos = {
    BULTO: 0,
    CAT_DISCIPLINA: 0,
    CAT_MATL_TYPE: '',
    CAT_TAG_NUMBER: '',
    CAT_DESCRIPCION: '',
    CAT_CWP: '',
    CAT_CWP_DESCRIPCION: '',
    CAT_CONTRATO: '',
    CAT_DESTINO: '',
    CAT_ESTADO: '',
    REQ_LOG: '',
    REQ_REQ_NUMERO: '',
    REQ_DESCRIPCION_SUPLEMENTO: '',
    REQ_NUMERO: 0,
    REQ_STATUS: '',
    REQ_CANTIDAD: 0,
    REQ_TOTAL: '',
    SOL_RFQ_NUMERO: '',
    SOL_HITO: '',
    SOL_ESTATUS: '',
    SOL_FECHA: '',
    SOL_SIG_HITO: '',
    SOL_SIG_HITO_ESTATUS: '',
    SOL_SIG_HITO_FECHA: '',
    ORC_NUMERO_OC: '',
    ORC_LINEA: 0,
    ORC_SUB_LINEA: 0,
    ORC_DESTINO: '',
    ORC_CANTIDAD: 0,
    ORC_FECHA_RAS: '',
    ORC_FECHA_SOP: '',
    ORC_GRUPO_DE_EMBARQUE: '',
    ORC_HITO: '',
    ORC_ESTATUS: '',
    ORC_FECHA: '',
    ORC_SIG_HITO: '',
    ORC_SIG_HITO_ESTATUS: '',
    ORC_SIG_HITO_FECHA: '',
  }

  constructor(
    private equiposService: EquiposService,
    private fb: FormBuilder,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {   
    } 

  ngOnInit() {

    this.getEquipos();
  }

  getEquipos() {
    
    this.equiposService.getEquipos().subscribe( data => {
      console.log(data)
      this.listaEquipos = data;

      this.dataSource = new MatTableDataSource(this.listaEquipos);
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

  localStorage.setItem('e_item_code', row.CAT_ITEM_CODE);
  localStorage.setItem('e_fila', row.CAT_FILA);
  this.miRouting()
}

miRouting() {
  let  myurl = `${'idEquipos'}`;
  this.router.navigate([myurl] ).then(e => {
    if (e) {
    } else { }
  }); 
}




}
