import { HttpClient } from '@angular/common/http';

import { Component, OnInit, ViewChild, HostBinding, inject, signal } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { CommonModule, DatePipe } from '@angular/common';

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
import { DateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';

import { PerneriaService } from '../../../services/perneria.service'
import { Perneria } from '../../../model/perneria';

import { Subscription, tap } from 'rxjs';



import { MatInputModule } from '@angular/material/input';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import 'moment/locale/es';

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
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatMomentDateModule,
    FormsModule,
    ReactiveFormsModule

  ],
  templateUrl: './perneria-list.component.html',
  styleUrl: './perneria-list.component.less',
  providers: [DatePipe, {provide: MAT_DATE_LOCALE, useValue: 'es'}]
})
export class PerneriaListComponent {
  listaPerneria: Perneria[] = []
  dataSource = new MatTableDataSource<Perneria>();
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @HostBinding('class') classes = 'row';
  private readonly _adapter = inject<DateAdapter<unknown, unknown>>(DateAdapter);
  private readonly _locale = signal(inject<unknown>(MAT_DATE_LOCALE));



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
    FECHA_LLEGADA: new Date(),
    OBSERVACION: '',
    NB_ASIG_TERR: '',
    TIPOELEM_DESCRIPCION: '',
    TUNEL_DESCRIPCION: '',
    DISPO_DESCRIPCION: '',
    PROVE_DESCRIPCION: '',
    PATIO_DESCRIPCION: '',
  }
  titulo: any = '';

  // form_Perneria!: FormGroup;


 constructor(
    private perneriaService: PerneriaService,
    private fb: FormBuilder,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) {
      this._locale.set('es');
      this._adapter.setLocale(this._locale());
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


      this.dataSource = new MatTableDataSource(this.listaPerneria);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(this.listaPerneria)



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

createEquipoForm() {

 /*  const fechaArray = this.Registro_Perneria.FECHA_LLEGADA?.split("-");

    if (fechaArray?.length === 3) {
      const fechaCorrecta = new Date(`${fechaArray[2]}-${fechaArray[1]}-${fechaArray[0]}`);  // "2024-11-15"
      const formattedDate = this.datePipe.transform(fechaCorrecta, 'dd-MM-yyyy');
      console.log(formattedDate); // Friday, January 10, 2025

      this.form_Perneria = this.formBuilder.group({
        date: [formattedDate],
      })
    } else {
      console.log('Fecha Incorrecta')
    } */


  }

  miclick1(row: object) {
/*     const miobj: Perneria = JSON.parse(JSON.stringify(row));
    console.log(miobj)
    const fechaArray = miobj.FECHA_LLEGADA?.split("-");

    if (fechaArray?.length === 3) {
      const fechaCorrecta = new Date(`${fechaArray[2]}-${fechaArray[1]}-${fechaArray[0]}`);  // "2024-11-15"
      const formattedDate = this.datePipe.transform(fechaCorrecta, 'dd-MM-yyyy');
      console.log(formattedDate); // Friday, January 10, 2025

      this.form_Perneria = this.formBuilder.group({
        date: [formattedDate],
      })
    } else {
      console.log('Fecha Incorrecta')
    }
 */

  }

}
