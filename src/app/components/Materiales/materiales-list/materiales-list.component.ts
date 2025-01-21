import { Component, ViewChild, HostBinding, NgModule, ChangeDetectionStrategy, inject, signal, Inject, Input  } from '@angular/core';
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
import { MatDatepickerInputEvent, MatDatepickerIntl, MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';

import { Material, Material_AGrabar, MaterialesColumns } from '../../../model/materiales'
import { MaterialService } from '../../../services/materiales.service'

import dayjs from 'dayjs';
import 'moment/locale/es';
import moment from 'moment';

@Component({
  selector: 'app-materiales-list',
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
  templateUrl: './materiales-list.component.html',
  styleUrl: './materiales-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ DatePipe, {provide: MAT_DATE_LOCALE, useValue: 'es'},
    ]
})
export class MaterialesListComponent {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @HostBinding('class') classes = 'row';
  private readonly _adapter = inject<DateAdapter<unknown, unknown>>(DateAdapter);
  private readonly _locale = signal(inject<unknown>(MAT_DATE_LOCALE));

  displayedColumns: string[] = MaterialesColumns.map((col) => col.key)
  columnsSchema: any = MaterialesColumns
  dataSource = new MatTableDataSource<Material>()
  valid: any = {}
  titulo: any

  listaMateriales: Material[] = []
  DatosUpdate: Material_AGrabar = {
      Tipo_Elemento: 0,
      Disposicion_Final: 0,
      Cantidad_Terreno: 0,
      Diferencia: 0,
      Proveedor: 0,
      Patio: 0,
      Fecha_llegada: '',
      SubPatio: 0,
      Coordenada: 0,
      Observacion: '',
    }
    DatosOriginales?: Material

    valorDisable = false
    datos: any

  constructor(
    public dialog: MatDialog,
    private materialService: MaterialService,
    private datePipe: DatePipe,
    public fb: FormBuilder,
    @Inject(ToastrService) private toastr: ToastrService,
  ) {
    this._locale.set('es');
    this._adapter.setLocale(this._locale());
  }

  ngOnInit() {
    this.titulo = localStorage.getItem("Seleccion_mat")
    var resultado = (this.titulo != null ) ? this.titulo.split("/")[3] : "Materiales";
    this.titulo = resultado

    this.getMateriales();
  }

  getMateriales() {

    this.materialService.getMateriales().subscribe((res: any) => {
      this.listaMateriales = res
      this.dataSource.data = res;
    });
  }

  editDatos(id: number, elem: any) {
    const index = this.dataSource.data.findIndex(obj => obj.ID_cmaterial === id);
    elem.isEdit = !elem.isEdit

    // Se guardan los datos originales de la linea en localstorage
    const datos = {
            Cantidad_Terreno:  Number(this.listaMateriales[index].cantidad_terreno),
            Tipo_Elemento: Number(this.listaMateriales[index].id_tipo_elem),
            Disposicion_Final: Number(this.listaMateriales[index].id_disposicion),
            Proveedor: Number(this.listaMateriales[index].id_proveedor),
            Patio: Number(this.listaMateriales[index].id_patio),
            porcentaje: Number(this.listaMateriales[index].porcentaje),
            Diferencia: Number(this.listaMateriales[index].diferencia),
            elemento: Number(this.listaMateriales[index].id_elemento),
            Fecha_llegada: this.listaMateriales[index].fecha_llegada,
            id_subpatio: this.listaMateriales[index].id_subpatio,
            id_coordenada: this.listaMateriales[index].id_coordenada,
            Observacion: this.listaMateriales[index].observacion,
    }

    localStorage.setItem("MaterialUpdate", JSON.stringify(datos) )

}

}
