import { Component, OnInit, ViewChild, HostBinding, inject, signal, Input, numberAttribute } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ActivatedRoute, Router  } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule,  Validators, } from '@angular/forms';
import { Subscription, tap } from 'rxjs';

import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatSort } from '@angular/material/sort'
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDatepickerIntl, MatDatepickerModule } from '@angular/material/datepicker';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';

import { RegMovimientoStock } from '../../../model/perneria'
import { PerneriaService } from '../../../services/perneria.service'
import { ExporterService } from '../../../services/exporter.service'

@Component({
  selector: 'app-despacho-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatDatepickerModule,

  ],
  templateUrl: './despacho-list.component.html',
  styleUrl: './despacho-list.component.less',
  providers: [DatePipe, {provide: MAT_DATE_LOCALE, useValue: 'es'}, ExporterService]
})
export class DespachoListComponent  {
    dataSource = new MatTableDataSource<RegMovimientoStock>();
    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @HostBinding('class') classes = 'row';

    @Input({transform:numberAttribute}) id!:number;
    subscription: Subscription[] = [];

    listaDespacho: RegMovimientoStock[] = []
    ListaExportExcel: any[] =[]

    length: number = 100;
    pageIndex: number  = 0;
    pageSize: number = 24;
    pageNumber: number = 0;
    pageSizeOptions: number[] = [25, 50];

    pageEvent?: PageEvent;
    form_Despacho!: FormGroup;

    handlePageEvent(e: PageEvent) {
      this.pageEvent = e;
      this.length = e.length;
      this.pageSize = e.pageSize;
      this.pageIndex = e.pageIndex;
    }
    row: any;
    sel: number = 0;
    showbtnVolver: number = 1;

  displayedColumns = [
      'movim', 'guia', 'Fecha_despacho', 'Hora_despacho', 'Item_Code', 'descricpcion', 'snf', 'stock_Inicial', 'cantidad' , 'stock_final'  , 'peso_despacho' ,
      'Nombre_retira' , 'lugar_descripcion', 'destino_descrip', 'proveedor'];

  titulo: any = '';

  MiCodigo: number = 0
  hayDatos: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe,
    private perneriaService: PerneriaService,
    private excelService: ExporterService,
  ) {
    this.MiCodigo = Number(localStorage.getItem("iddespacho"))
    this.showbtnVolver = Number(localStorage.getItem("btnVolver"))!

    
  }

  ngOnInit() {
    this.MiCodigo = Number(localStorage.getItem("iddespacho"))
    console.log(this.MiCodigo)
    this.hayDatos =  false
    this.getDespachos()
  }

  getDespachos() {

    this.perneriaService.getDespachos(this.MiCodigo).subscribe( data => {
      this.listaDespacho = data;
      console.log(this.listaDespacho)

      this.dataSource = new MatTableDataSource(this.listaDespacho);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.hayDatos = true

    });
  }

  applyFilter(filterValue: any) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
 };


 volverListado() {
  
  let  myurl = `${'perneria-new'}`;
  this.router.navigate([myurl] ).then(e => {
    if (e) {
    } else {
      console.log('error: ', e)
    }
  });
    localStorage.setItem("btnVolver","0")
  }



   ExportToExcel() {
    
    this.excelService.exportToExcel(this.dataSource.data, "Mov")
  }

}
