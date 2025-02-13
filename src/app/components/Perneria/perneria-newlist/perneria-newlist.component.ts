import { Component, ViewChild, HostBinding, NgModule, ChangeDetectionStrategy, inject, signal, Inject, Input  } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms';
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
import { MatGridListModule } from '@angular/material/grid-list';
import { DateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';

import { Perneria, PernoColumns, DatosAGrabar, RegMovimientoStock, 
  PetricioColumns, CoasinColumns, LureyeColumns } from '../../../model/perneria'
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
    FormsModule,
    FormsModule,
    MatTooltipModule,
    MatGridListModule,
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

  displayedColumns: string[] = []

  columnsSchema: any = ''
  valid: any = {}

  titulo: any = '';

  listaPerneria: Perneria[] = []
  DatosUpdate: DatosAGrabar = {
    Tunel: 0,
    Disposicion_Final: 0,
    Cantidad_Terreno: 0,
    Diferencia: 0,
    Patio: 0,
    SubPatio: 0,
    Coordenada: 0,
    Fecha_llegada: '',
    Observacion: '',
    Stock: 0,
  }
  DatosOriginales?: Perneria

  regMovim: RegMovimientoStock = {
    tipo_movimiento: 0,
    id_perno: 0,
    Fecha_despacho: '',
    Hora_despacho: '',
    Codigo: '',
    descricpcion: '',
    snf: '',
    stock_Inicial: 0,
    cantidad: 0,
    stock_final: 0,
    guia: 0,
    peso_despacho: 0,
    lugar_despacho: 0,
    lugar_descripcion: '',
    destino: 0,
    destino_descripcion: '',
    rut_Retira: '',
    Nombre_retira: '',
  }

  valorDisable = false

  datos: any
  hayDatos: boolean = true
  var_FindProveedores: number = 0
  lst_Proveedores: any = [];

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

    this.displayedColumns = PernoColumns.map((col) => col.key)
    this.columnsSchema = PernoColumns

    this.getPerneria();
  }

  ngOnInit() {
   this.titulo = localStorage.getItem("Seleccion")
    var resultado = (this.titulo != null ) ? this.titulo.split("/")[3] : "Perneria";
    this.titulo = resultado

    let miDatos: any = localStorage.getItem('dataUpdate')
    this.datos = JSON.parse(miDatos)

    //console.log("columnsSchema: ", this.columnsSchema)
    this.fun1()
  }

  getPerneria() {

    this.perneriaService.getPernos().subscribe(data => {
      this.listaPerneria = data;
      this.dataSource = new MatTableDataSource(this.listaPerneria);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      this.hayDatos  = true
    });

      //this.dataSource.sort = this.sort;
      //this.dataSource.paginator = this.paginator; */

  }

    editDatos(id: number, elem: any) {

      localStorage.setItem("iddespacho", id.toString())
      const index = this.dataSource.data.findIndex(obj => obj.ID_PERNO === id);
      elem.isEdit = !elem.isEdit

      // Se guardan los datos originales de la linea en localstorage
      if (this.listaPerneria[index].ID_SUBPATIO == null) {
        this.listaPerneria[index].ID_SUBPATIO = 0
      }

      if (this.listaPerneria[index].ID_COORDENADA == null) {
        this.listaPerneria[index].ID_COORDENADA = 0
      }
      this.dataSource.data[index].GUIA = 0
      const datos = {
        Tunel: Number(this.listaPerneria[index].TUNEL),
        Disposicion_Final: Number(this.listaPerneria[index].DISPOSICION_FINAL),
        Patio: Number(this.listaPerneria[index].PATIO),
        SubPatio: Number(this.listaPerneria[index].ID_SUBPATIO),
        Coordenada: Number(this.listaPerneria[index].ID_COORDENADA),
        Fecha_llegada: this.listaPerneria[index].FECHA_LLEGADA,
        Observacion: this.listaPerneria[index].OBSERVACION,
        Cantidad_Terreno:  Number(this.listaPerneria[index].CANTIDAD_TERRENO),
        Diferencia: Number(this.listaPerneria[index].DIFERENCIA),
        Stock: Number(this.listaPerneria[index].STOCK),
        porcentaje: Number(this.listaPerneria[index].PORCENTAJE),
      }

      localStorage.setItem("dataUpdate", JSON.stringify(datos) )

  }


  applyFilter(filterValue: any) {
    filterValue = filterValue.target.value.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  };

  // Se devuelven los datos desde el local estorage a la linea que se edito, borrando todoas los datos ingresados

  canceledit(e: any, id: number, key: string, elem: any) {
    const idx = this.dataSource.data.findIndex(obj => obj.ID_PERNO === id);

    const storedData = localStorage.getItem("dataUpdate")
    if (storedData) {

      this.datos = JSON.parse(storedData);
      this.dataSource.data[idx].CANTIDAD_TERRENO = this.datos.Cantidad_Terreno
      this.dataSource.data[idx].TUNEL = this.datos.Tunel
      this.dataSource.data[idx].DISPOSICION_FINAL = this.datos.Disposicion_Final
      this.dataSource.data[idx].PATIO = this.datos.Patio
      this.dataSource.data[idx].ID_SUBPATIO = this.datos.Subpatio
      this.dataSource.data[idx].ID_COORDENADA = this.datos.Coordenada
      this.dataSource.data[idx].DIFERENCIA = this.datos.Diferencia
      this.dataSource.data[idx].PORCENTAJE = this.datos.porcentaje
      this.dataSource.data[idx].FECHA_LLEGADA = this.datos.Fecha_llegada
      this.dataSource.data[idx].OBSERVACION = this.datos.Observacion
      this.dataSource.data[idx].STOCK = this.datos.Stock

    } else {
      console.log('No hay datos en localStorage');
    }

    localStorage.removeItem('dataUpdate');
    elem.isEdit = false
  }


  UpdateRow(id: number, elem: any) {

      this.DatosUpdate.Tunel = elem.TUNEL
      this.DatosUpdate.Disposicion_Final = elem.DISPOSICION_FINAL
      this.DatosUpdate.Cantidad_Terreno = elem.CANTIDAD_TERRENO

      this.DatosUpdate.Diferencia = elem.DIFERENCIA
      this.DatosUpdate.Stock = elem.STOCK

      this.DatosUpdate.Patio = elem.PATIO

      this.DatosUpdate.SubPatio =  elem.ID_SUBPATIO

      this.DatosUpdate.Coordenada =  elem.ID_COORDENADA

      const midate = this.formatDate(elem.FECHA_LLEGADA)

      this.DatosUpdate.Fecha_llegada = midate  // elem.FECHA_LLEGADA
      this.DatosUpdate.Observacion = elem.OBSERVACION

    this.perneriaService.updatePerno(id, this.DatosUpdate).pipe(
        tap(res => {
          if (res.status_code == 200 ) {
            this.toastr.success('Se ha guardado la información exitosamente!', 'Control Patio');
            this.LlenaregMovim(id, elem, this.DatosUpdate)
          }
            else {
              this.toastr.error('Se ha producido un error, Inténtelo nuevamente' , 'Control Patio');
          }
        })
      )
      .subscribe({
          error: (err) => {
            this.toastr.error('Control Patio', 'Se ha producido un error, Inténtelo nuevamente');
          },
      });

    elem.isEdit = false

  }

  formatDate(date: Date): string {
    const d = new Date(date);

    // Obtener el día, mes y año
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');  // Meses de 0 a 11
    const year = d.getFullYear();

    // Retornar el formato DD-MM-YYYY
    return `${day}-${month}-${year}`;
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
        case 'TUNEL_DESCRIPCION':
          this.DatosUpdate.Tunel = e.target.value
          break;
        case 'DISPO_DESCRIPCION':
          this.DatosUpdate.Disposicion_Final = e.target.value
          break;
        case 'PATIO_1':
          this.DatosUpdate.SubPatio = e.target.value
          break;
        case 'COORDENADAS':
          this.DatosUpdate.Coordenada = e.target.value
          break;
       default:
         break;
    // Bloque de código por defecto
    }

  }

  Func_Percent(id: number, elem: any, Ingresos: string): number {

    const storedData = localStorage.getItem("dataUpdate")
    if (storedData) {
      this.datos = JSON.parse(storedData);
      this.datos.Cantidad_Terreno
    }

    const index = this.dataSource.data.findIndex(obj => obj.ID_PERNO === id);

    const TotIngresos = Number(this.datos.Cantidad_Terreno) + Number(Ingresos)

    const percent = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 4 }).format((Number(TotIngresos)/Number(elem.CANTIDAD_SNF))*100)
    this.dataSource.data[index].PORCENTAJE = Number(percent)

    this.dataSource.data[index].CANTIDAD_TERRENO = Number(TotIngresos)
    this.dataSource.data[index].STOCK = Number(this.datos.Stock) + Number(Ingresos)


    this.dataSource.data[index].DIFERENCIA = Number(TotIngresos) - Number(elem.CANTIDAD_SNF)

    // this.dataSource.data[index].INGRESOS = 0

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
      TUNEL: 0,
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
      CANT_DESPACHOS: 0,
      STOCK: 0,
      INGRESOS: 0,
      ELEMENTO: 0, 
      ELEMENTO_DESC: ''
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

  GotoDespachar(id: number, elem: any, ) {

    let  myurl = `${'despacho'}/${id}`;
    this.router.navigate([myurl], { queryParams: { message: id  }, queryParamsHandling: "merge" } ).then(e => {
      if (e) {
      } else {
        console.log('error: ', e)
      }
    });
  }

  LlenaregMovim(id: number, elem: any, DatosUpdate: DatosAGrabar) {

      const storedData = localStorage.getItem("dataUpdate")
      if (storedData) {
        this.datos = JSON.parse(storedData);
      }

      const d = new Date();

      // Obtener el día, mes y año
      const day = d.getDate().toString().padStart(2, '0');
      const month = (d.getMonth() + 1).toString().padStart(2, '0');  // Meses de 0 a 11
      const year = d.getFullYear();

      const hor = d.getHours().toString().padStart(2, '0');
      const min = d.getMinutes().toString().padStart(2, '0');
      const seg = d.getSeconds().toString().padStart(2, '0');

      this.regMovim.tipo_movimiento = 1
      this.regMovim.id_perno = elem.ID_PERNO
      this.regMovim.Fecha_despacho = `${day}-${month}-${year}`;
      this.regMovim.Hora_despacho = `${hor}-${min}-${seg}`;
      this.regMovim.Codigo = ''
      this.regMovim.descricpcion = elem.TIPOELEM_DESCRIPCION
      this.regMovim.snf = String(elem.CANTIDAD_SNF)
      this.regMovim.stock_Inicial = this.datos.Stock
      this.regMovim.cantidad = elem.INGRESOS
      this.regMovim.stock_final = DatosUpdate.Stock
      this.regMovim.peso_despacho = Number(elem.PESO_UNITARIO) * Number(elem.INGRESOS)
      this.regMovim.lugar_despacho = elem.DISPOSICION_FINAL
      this.regMovim.destino = elem.PATIO
      this.regMovim.rut_Retira = ''
      this.regMovim.Nombre_retira = ''
      this.regMovim.guia = elem.GUIA

      this.perneriaService.Ingresos(this.regMovim).pipe(
        tap(res => {

          if (res.status_code == 200 ) {

            this.toastr.success('Se ha guardado la información exitosamente!', 'Control Patio');

            let  myurl = `${'despacholist'}/${this.regMovim.id_perno}`;
            this.router.navigate([myurl]  ).then(e => {
              if (e) {
              } else {
                console.log('error: ', e)
              }
            });
          }

          else {
            this.toastr.error('Se ha producido un error, Inténtelo nuevamente' , 'Control Patio');
          }
        })
      )
      .subscribe({
          error: (err) => {
            this.toastr.info('Control Patio', 'Se ha producido un error, Inténtelo nuevamente');
          },
      });

    }


    async fun1(): Promise<any> {

      await this.traeRegXProveedor();
    }

    async traeRegXProveedor() {

      this.perneriaService.TraeProveedores().subscribe(data => {
          this.lst_Proveedores = data;

      });
    }

    traeProveedor() {
      const VARdOS = 2
      switch (this.var_FindProveedores.toString()) { 
        case "2":  {
          this.displayedColumns = PetricioColumns.map((col) => col.key);
          this.columnsSchema = PetricioColumns;

           break; 
        }
        case "3":  {
          this.displayedColumns = CoasinColumns.map((col) => col.key);
          this.columnsSchema = CoasinColumns;
          break; 
        }
        case "4":  {
          this.displayedColumns = LureyeColumns.map((col) => col.key);
          this.columnsSchema = LureyeColumns;
          break; 
        }

        
        
        default:  
          {console.log("default")
           //statements; 
           break; }
         
     } 



      this.perneriaService.getRegXProveedor(this.var_FindProveedores).subscribe(data => {
        this.listaPerneria = data;
        this.dataSource = new MatTableDataSource(this.listaPerneria);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        this.hayDatos  = true

        

      });
    }
}
