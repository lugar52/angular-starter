import { Component, ViewChild, HostBinding, NgModule, ChangeDetectionStrategy, inject, signal, Inject, Input  } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

import { Subscription, tap, lastValueFrom } from 'rxjs';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';

import { MatDialog } from '@angular/material/dialog'
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, PageEvent, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort'
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatNativeDateModule } from '@angular/material/core';  // Import this
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDatepickerInputEvent, MatDatepickerIntl, MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';

import { Perneria, PernoColumns, DatosAGrabar } from '../../../model/perneria'
import { PerneriaService } from '../../../services/perneria.service'
import { ConfirmDialogComponent } from '../../Perneria/confirm-dialog/confirm-dialog.component'
import dayjs from 'dayjs';
import 'moment/locale/es';
import moment from 'moment';

@Component({
  selector: 'app-perneria-newlist',
  standalone: true,
  imports: [
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatMomentDateModule,
    FormsModule,
    FormsModule,
    MatTooltipModule,

  ],
  templateUrl: './perneria-newlist.component.html',
  styleUrl: './perneria-newlist.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ DatePipe, {provide: MAT_DATE_LOCALE, useValue: 'es'},
    ]
})
export class PerneriaNewlistComponent {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @HostBinding('class') classes = 'row';
  private readonly _adapter = inject<DateAdapter<unknown, unknown>>(DateAdapter);
  private readonly _locale = signal(inject<unknown>(MAT_DATE_LOCALE));

  subscription: Subscription[] = [];
  dataSource = new MatTableDataSource<Perneria>()

  displayedColumns: string[] = PernoColumns.map((col) => col.key)
  columnsSchema: any = PernoColumns
  valid: any = {}

  titulo: any = '';

  listaPerneria: Perneria[] = []
  DatosUpdate: DatosAGrabar = {
    Tipo_Elemento: 0,
    Tunel: 0,
    Disposicion_Final: 0,
    Cantidad_Terreno: 0,
    Diferencia: 0,
    Proveedor: 0,
    Patio: 0,
    subPatio: 0,
    coordenada: 0,
    Fecha_llegada: '',
    Observacion: '',
  }
  DatosOriginales?: Perneria

  valorDisable = false

  datos: any
  hayDatos: boolean = true

  constructor(
    public dialog: MatDialog,
    private perneriaService: PerneriaService,
    private datePipe: DatePipe,
    public fb: FormBuilder,
    private router: Router,
    @Inject(ToastrService) private toastr: ToastrService,
  ) {
    this._locale.set('es');
    this._adapter.setLocale(this._locale());
    this.getPerneria();
  }

  ngOnInit() {
   this.titulo = localStorage.getItem("Seleccion")
    var resultado = (this.titulo != null ) ? this.titulo.split("/")[3] : "Perneria";
    this.titulo = resultado
    console.log("INi ", this.hayDatos)

    //console.log("columnsSchema: ", this.columnsSchema)
  }

  getPerneria() {

    this.perneriaService.getPernos().subscribe(data => {
      this.listaPerneria = data;

      this.dataSource = new MatTableDataSource(this.listaPerneria);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log(this.listaPerneria)

      this.hayDatos  = true
      console.log("per ", this.hayDatos)
    });

      //this.dataSource.sort = this.sort;
      //this.dataSource.paginator = this.paginator; */

  }

    editDatos(id: number, elem: any) {
      const index = this.dataSource.data.findIndex(obj => obj.ID_PERNO === id);
      elem.isEdit = !elem.isEdit

      // Se guardan los datos originales de la linea en localstorage
      const datos = {
              Cantidad_Terreno:  Number(this.listaPerneria[index].CANTIDAD_TERRENO),
              Tipo_Elemento: Number(this.listaPerneria[index].TIPO_ELEMENTO),
              Tunel: Number(this.listaPerneria[index].TUNEL),
              Disposicion_Final: Number(this.listaPerneria[index].DISPOSICION_FINAL),
              Proveedor: Number(this.listaPerneria[index].PROVEEDOR),
              Patio: Number(this.listaPerneria[index].PATIO),
              subPatio: Number(this.listaPerneria[index].ID_SUBPATIO),
              coordenada: Number(this.listaPerneria[index].ID_COORDENADA),
              porcentaje: Number(this.listaPerneria[index].PORCENTAJE),
              Diferencia: Number(this.listaPerneria[index].DIFERENCIA),
              Fecha_llegada: this.listaPerneria[index].FECHA_LLEGADA,
              Observacion: this.listaPerneria[index].OBSERVACION,
      }

      localStorage.setItem("dataUpdate", JSON.stringify(datos) )

  }

  applyFilter(filterValue: any) {

// Verificar que filterValue es una cadena
    const trimmedValue = typeof filterValue === 'string' ? filterValue.trim() : String(filterValue).trim();

// Ahora, puedes usar trimmedValue sin problemas
    // console.log(trimmedValue); // 'Some text'

    filterValue = trimmedValue.trim(); // Remove whitespace
    filterValue = trimmedValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  // Se devuelven los datos desde el local estorage a la linea que se edito, borrando todoas los datos ingresados

  canceledit(e: any, id: number, key: string, elem: any) {
    const idx = this.dataSource.data.findIndex(obj => obj.ID_PERNO === id);

    const storedData = localStorage.getItem("dataUpdate")
    if (storedData) {

      this.datos = JSON.parse(storedData);
      this.dataSource.data[idx].CANTIDAD_TERRENO = this.datos.Cantidad_Terreno
      this.dataSource.data[idx].TIPO_ELEMENTO = this.datos.Tipo_Elemento
      this.dataSource.data[idx].TUNEL = this.datos.Tunel
      this.dataSource.data[idx].DISPOSICION_FINAL = this.datos.Disposicion_Final
      this.dataSource.data[idx].PROVEEDOR = this.datos.Proveedor
      this.dataSource.data[idx].PATIO = this.datos.Patio
      this.dataSource.data[idx].ID_SUBPATIO = this.datos.subpatio
      this.dataSource.data[idx].ID_COORDENADA = this.datos.coordenada
      this.dataSource.data[idx].DIFERENCIA = this.datos.Diferencia
      this.dataSource.data[idx].PORCENTAJE = this.datos.porcentaje
      this.dataSource.data[idx].FECHA_LLEGADA = this.datos.Fecha_llegada
      this.dataSource.data[idx].OBSERVACION = this.datos.Observacion

    } else {
      console.log('No hay datos en localStorage');
    }
    elem.isEdit = false
  }


  UpdateRow(id: number, elem: any) {

    console.log(this.DatosUpdate)
    this.perneriaService.updatePerno(id, this.DatosUpdate).pipe(
        tap(res => {
          console.log(res)
          if (res.status_code == 200 )
            this.toastr.success('Se ha guardado la información exitosamente!', 'Control Patio');
          else {
            this.toastr.error('Se ha producido un error, Inténtelo nuevamente' , 'Control Patio');
          }
          //this.flagGrabacion = 1
          //this.mensajeGrabacion('Bravo!', 'Has guardado la información de forma exitosa', 'Aceptar' , 'success')
        } )
      )
      .subscribe({
          error: (err) => {
            this.toastr.info('Control Patio', 'Se ha producido un error, Inténtelo nuevamente');
            // this.mensajeGrabacion('Se ha producido un error', 'Inténtelo nuevamente', 'Error', 'error')
          },
          // complete: () => this.spinner.hide()
      });

    elem.isEdit = false

  }

  SelectFecha(fecha: Date ) {

    this.DatosUpdate.Fecha_llegada = fecha.toLocaleString()

  }

  inputHandler(e: any, id: number, key: string) {

    const index = this.dataSource.data.findIndex(obj => obj.ID_PERNO === id);

    if (!this.valid[index]) {
      this.valid[index] = {}
    }
    this.valid[index][key] = e.target.validity.valid

    if (key = 'OBSERVACION') {
      this.DatosUpdate.Observacion = e.target.value
    }

    console.log(this.DatosUpdate)

  }

  selectHandler(e: any, id: number, key: string) {

    const index = this.dataSource.data.findIndex(obj => obj.ID_PERNO === id);
    if (!this.valid[index]) {
      this.valid[index] = {}
    }
    this.valid[index][key] = e.target.validity.valid

    const storedData: any = localStorage.getItem("dataUpdate")
    this.datos = JSON.parse(storedData);
     switch (key) {
       case 'TIPOELEM_DESCRIPCION':
          this.DatosUpdate.Tipo_Elemento = e.target.value
          break;
        case 'TUNEL_DESCRIPCION':
          this.DatosUpdate.Tunel = e.target.value
          break;
        case 'DISPO_DESCRIPCION':
          this.DatosUpdate.Disposicion_Final = e.target.value
          break;
        case 'PATIO_1':
          this.DatosUpdate.subPatio = e.target.value
          break;
        case 'COORDENADAS':
          this.DatosUpdate.coordenada = e.target.value
          break;
       default:
         break;
    // Bloque de código por defecto
    }

    console.log(this.DatosUpdate)
  }

  Func_Percent(id: number, elem: any, cantTerr: string): number {
    const index = this.dataSource.data.findIndex(obj => obj.ID_PERNO === id);
    const percent = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 4 }).format((Number(cantTerr)/Number(elem.CANTIDAD_SNF))*100)

    this.dataSource.data[index].CANTIDAD_TERRENO = Number(cantTerr)
    this.dataSource.data[index].PORCENTAJE = Number(percent)
    this.dataSource.data[index].DIFERENCIA = Number(cantTerr) - Number(elem.CANTIDAD_SNF)

    this.DatosUpdate.Cantidad_Terreno = Number(cantTerr)
    this.DatosUpdate.Diferencia = this.dataSource.data[index].DIFERENCIA

    console.log(this.DatosUpdate)
    return index
  }

   disableSubmit(id: number) {
    console.log("disableSubmit ")
    const index = this.dataSource.data.findIndex(obj => obj.ID_PERNO === id);
    if (this.valid[index]) {
      console.log("disable ", index)
      return Object.values(this.valid[index]).some((item) => item === false)
    }
    return false
  }


  addRow() {
    const newRow: Perneria = {
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
      PERCENT: 0,
      DIFERENCIA: 0,
      PESO_UNITARIO: 0,
      PESO_TOTAL: 0,
      PROVEEDOR: '',
      PATIO: '',
      ID_SUBPATIO: 0,
      ID_COORDENADA: 0,
      FECHA_LLEGADA: new Date(),
      OBSERVACION: '',
      NB_ASIG_TERR: '',
      TIPOELEM_DESCRIPCION: '',
      TUNEL_DESCRIPCION: '',
      DISPO_DESCRIPCION: '',
      PROVE_DESCRIPCION: '',
      PATIO_DESCRIPCION: '',
      isEdit: true,
      isSelected: false,
    }
    this.dataSource.data = [newRow, ...this.dataSource.data]
  }

  removeRow(id: number) {
    this.perneriaService.deleteUser(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(
        (u: Perneria) => u.ID_PERNO !== id,
      )
    })
  }

  removeSelectedRows() {
    const pernos = this.dataSource.data.filter((u: Perneria) => u.isSelected)
    this.dialog
      .open(ConfirmDialogComponent)
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
          this.perneriaService.deleteUsers(pernos).subscribe(() => {
            this.dataSource.data = this.dataSource.data.filter(
              (u: Perneria) => !u.isSelected,
            )
          })
        }
      })
  }

  isAllSelected() {
    console.log("isAllSelected")
    return this.dataSource.data.every((item) => item.isSelected)
  }

  isAnySelected() {
    console.log("isAnySelected")
    return this.dataSource.data.some((item) => item.isSelected)
  }

  selectAll(event: any) {
    console.log("selectAll")
    this.dataSource.data = this.dataSource.data.map((item) => ({
      ...item,
      isSelected: event.checked,
    }))
  }

  Despachar(id: number, elem: any, ) {

    let  myurl = `${'despacho'}/${id}`;
    this.router.navigate([myurl], { queryParams: { message: id  }, queryParamsHandling: "merge" } ).then(e => {
      if (e) {
      } else {
        console.log('error: ', e)
      }
    });
  }



}
