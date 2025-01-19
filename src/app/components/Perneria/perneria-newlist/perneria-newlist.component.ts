import { Component, ViewChild, HostBinding, NgModule, ChangeDetectionStrategy, inject, signal, Inject  } from '@angular/core';
import { CommonModule, DatePipe, formatDate } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
import { MatDatepickerIntl, MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';

import { Perneria, PernoColumns } from '../../../model/perneria'
import { DatosAGrabar } from '../../../model/inPernos'
import { PerneriaService } from '../../../services/perneria.service'
import { ConfirmDialogComponent } from '../../Perneria/confirm-dialog/confirm-dialog.component'
import dayjs from 'dayjs';

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
    MatIconModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatMomentDateModule,
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

  public formGroup = new FormGroup({
    CANTIDAD_TERRENO: new FormControl()
  })

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @HostBinding('class') classes = 'row';
  private readonly _adapter = inject<DateAdapter<unknown, unknown>>(DateAdapter);
  private readonly _locale = signal(inject<unknown>(MAT_DATE_LOCALE));

  displayedColumns: string[] = PernoColumns.map((col) => col.key)
  columnsSchema: any = PernoColumns
  dataSource = new MatTableDataSource<Perneria>()
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
    Fecha_llegada: '',
    Observacion: '',
  }
  valorDisable = false

  paso: number = 0
  datos: any

  constructor(
    public dialog: MatDialog,
    private perneriaService: PerneriaService,
    private datePipe: DatePipe,
    public fb: FormBuilder,
    @Inject(ToastrService) private toastr: ToastrService,
  ) {
    this._locale.set('es');
    this._adapter.setLocale(this._locale());

  }

  ngOnInit() {
    this.titulo = localStorage.getItem("Seleccion")
    var resultado = (this.titulo != null ) ? this.titulo.split("/")[3] : "Perneria";
    this.titulo = resultado

    this.getPerneria();
    //console.log("columnsSchema: ", this.columnsSchema)
  }

  getPerneria() {

    this.perneriaService.getPernos().subscribe((res: any) => {
      this.listaPerneria = res;
      console.log(res)
      //this.dataSource = new MatTableDataSource(this.listaPerneria);
      this.dataSource.data = res;
    });

      //this.dataSource.sort = this.sort;
      //this.dataSource.paginator = this.paginator; */

  }

  myClic(row: any) {

    localStorage.setItem('perno_fila', row.ID_PERNO);
    this.miRouting(row.ID_PERNO)
  }

  miRouting(row:any) {
    /*  let  myurl = `${'perneria/id'}`;
     this.router.navigate([myurl] ).then(e => {
       if (e) {
       } else { }
     }); */

     //alert('inside editField')
     console.timeLog(row)
   }


   editDatos(id: number, elem: any) {
    const index = this.dataSource.data.findIndex(obj => obj.ID_PERNO === id);

    elem.isEdit = !elem.isEdit

    const fecha = this.listaPerneria[index].FECHA_LLEGADA
    const fechaCorrecta = fecha;  // ""
    console.log("editDatos: ",fechaCorrecta)

    const datos = {"datos": {
            Cantidad_Terreno:  Number(this.listaPerneria[index].CANTIDAD_TERRENO),
            Tipo_Elemento: Number(this.listaPerneria[index].TIPO_ELEMENTO),
            Tunel: Number(this.listaPerneria[index].TUNEL),
            Disposicion_Final: Number(this.listaPerneria[index].DISPOSICION_FINAL),
            Proveedor: Number(this.listaPerneria[index].PROVEEDOR),
            Patio: Number(this.listaPerneria[index].PATIO),
            PORCENTAJE: Number(this.listaPerneria[index].PORCENTAJE),
            Diferencia: Number(this.listaPerneria[index].DIFERENCIA),
            Fecha_llegada: fechaCorrecta,
            Observacion: this.listaPerneria[index].OBSERVACION,
    }}
    console.log(datos)
    localStorage.setItem("dataUpdate", JSON.stringify(datos) )

  }

  UpdateRow(id: number, elem: any) {

    console.log("elem: ", elem)
    const storedData = localStorage.getItem("dataUpdate")
    if (storedData) {

      this.datos = JSON.parse(storedData);
      const idx = this.Func_Percent(id, elem, this.datos.datos.Cantidad_Terreno)

      const DatosOut: DatosAGrabar = {
        Cantidad_Terreno: Number(this.dataSource.data[idx].CANTIDAD_TERRENO),
        Tipo_Elemento: Number(this.dataSource.data[idx].TIPO_ELEMENTO),
        Tunel: Number(this.dataSource.data[idx].TUNEL),
        Disposicion_Final: Number(this.dataSource.data[idx].DISPOSICION_FINAL),
        Proveedor: Number(this.dataSource.data[idx].PROVEEDOR),
        Patio: Number(this.dataSource.data[idx].PATIO),
        Diferencia: Number(this.dataSource.data[idx].DIFERENCIA),
        Fecha_llegada: String(this.dataSource.data[idx].FECHA_LLEGADA),
        Observacion: this.dataSource.data[idx].OBSERVACION ?? '',
      }

      this.perneriaService.updatePerno(id, DatosOut).pipe(
        tap(res => {
          console.log(res)
          if (res.status_code == 200 )
            this.toastr.success('Se ha guardado la información exitosamente!', 'Control Patio');
          else {
            this.toastr.warning('Se ha producido un error, Inténtelo nuevamente' , 'Control Patio');
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



    } else {
      console.log('No hay datos en localStorage');
    }

    elem.isEdit = false

  }

  canceledit(e: any, id: number, key: string, elem: any) {

    console.log(elem)
    const storedData = localStorage.getItem("dataUpdate")
    if (storedData) {

      this.datos = JSON.parse(storedData);
      const idx = this.Func_Percent(id, elem, this.datos.datos.Cantidad_Terreno)

    } else {
      console.log('No hay datos en localStorage');
    }
    elem.isEdit = false
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

  inputHandler(e: any, id: number, key: string) {
    const index = this.dataSource.data.findIndex(obj => obj.ID_PERNO === id);
    if (!this.valid[index]) {
      this.valid[index] = {}
    }
    this.valid[index][key] = e.target.validity.valid
  }

  selectHandler(e: any, id: number, key: string, options: string) {

    const index = this.dataSource.data.findIndex(obj => obj.ID_PERNO === id);
    if (!this.valid[index]) {
      this.valid[index] = {}
    }
    this.valid[index][key] = e.target.validity.valid
    console.log(this.valid[index][key])
    console.log(e.target.value)
  }

  Func_Percent(id: number, elem: any, cantTerr: string): number {
    const index = this.dataSource.data.findIndex(obj => obj.ID_PERNO === id);
    const percent = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 4 }).format((Number(cantTerr)/Number(elem.CANTIDAD_SNF))*100)

    this.dataSource.data[index].CANTIDAD_TERRENO = Number(cantTerr)
    this.dataSource.data[index].PORCENTAJE = Number(percent)
    this.dataSource.data[index].DIFERENCIA = Number(cantTerr) - Number(elem.CANTIDAD_SNF)

    var fecha: Date = dayjs(this.listaPerneria[index].FECHA_LLEGADA, "DD-MM-YYYY").toDate();
    console.log(typeof fecha)
    this.dataSource.data[index].FECHA_LLEGADA = dayjs(this.dataSource.data[index].FECHA_LLEGADA).toDate()

    console.log("this.dataSource: ", this.dataSource.data[index].FECHA_LLEGADA)

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



  /* isAllSelected() {
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
  } */

}
