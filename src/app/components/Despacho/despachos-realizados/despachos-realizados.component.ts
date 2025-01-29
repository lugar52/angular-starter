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
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';

import { RegDespacho } from '../../../model/perneria'
import { PerneriaService } from '../../../services/perneria.service'

@Component({
  selector: 'app-despachos-realizados',
  standalone: true,
  imports: [CommonModule,
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
    MatMomentDateModule,],
  templateUrl: './despachos-realizados.component.html',
  styleUrl: './despachos-realizados.component.scss'
})
export class DespachosRealizadosComponent {
  dataSource = new MatTableDataSource<RegDespacho>();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @HostBinding('class') classes = 'row';
  private readonly _adapter = inject<DateAdapter<unknown, unknown>>(DateAdapter);
  private readonly _locale = signal(inject<unknown>(MAT_DATE_LOCALE));

  @Input({transform:numberAttribute}) id!:number;
  subscription: Subscription[] = [];

  listaDespacho: RegDespacho[] = []

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

displayedColumns = [
    'guia', 'Fecha_despacho', 'Hora_despacho', 'Item_Code', 'descricpcion', 'snf', 'stock_Inicial', 'cantidad' , 'stock_final'  , 'peso_despacho' , 'rut_Retira', 'Nombre_retira' , 'lugar_descripcion', 'destino_descrip'];

titulo: any = '';
MiCodigo: number = 0

constructor(
  private formBuilder: FormBuilder,
  private activatedRoute: ActivatedRoute,
  private router: Router,
  private datePipe: DatePipe,
  private perneriaService: PerneriaService,
) {
  this.MiCodigo = Number(localStorage.getItem("iddespacho"))
}

ngOnInit() {
  this.MiCodigo = Number(localStorage.getItem("iddespacho"))
  console.log(this.MiCodigo)
  this.getDespachos()
}

getDespachos() {
  console.log("getDespachos:  " , this.MiCodigo)
  this.perneriaService.getDespachos(this.MiCodigo).subscribe( data => {
    this.listaDespacho = data;

    this.dataSource = new MatTableDataSource(this.listaDespacho);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    console.log("this.listaDespacho: ", this.listaDespacho)

  });
}

applyFilter(filterValue: any) {
  filterValue = filterValue.trim();
  filterValue = filterValue.toLowerCase();
  this.dataSource.filter = filterValue;
};

}
