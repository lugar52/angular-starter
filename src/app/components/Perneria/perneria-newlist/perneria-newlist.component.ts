import { Component, ViewChild, HostBinding, NgModule, ChangeDetectionStrategy  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

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
import { PerneriaService } from '../../../services/perneria.service'
import { ConfirmDialogComponent } from '../../Perneria/confirm-dialog/confirm-dialog.component'


@Component({
  selector: 'app-perneria-newlist',
  standalone: true,
  imports: [
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    ConfirmDialogComponent,
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
  providers: [

  ]
})
export class PerneriaNewlistComponent {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @HostBinding('class') classes = 'row';

  displayedColumns: string[] = PernoColumns.map((col) => col.key)
  columnsSchema: any = PernoColumns
  dataSource = new MatTableDataSource<Perneria>()
  valid: any = {}

  titulo: any = '';

  listaPerneria: Perneria[] = []
  listaPerneriaBack: Perneria[] = []
  valorDisable = false

  paso: number = 0

  constructor(
    public dialog: MatDialog,
    private perneriaService: PerneriaService) {}

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

    this.paso = this.paso + 1
    console.log("A ", this.paso)

    elem.isEdit = !elem.isEdit
    this.listaPerneriaBack = this.listaPerneria
    console.log(this.listaPerneriaBack)

  }

  editRow(id: number, row: Perneria) {
    const index = this.dataSource.data.findIndex(obj => obj.ID_PERNO === id);

    this.paso = this.paso + 1
    console.log("B ", this.paso)

      console.log("editRow: ", row)
      console.log("index: ", index)

      console.log(this.listaPerneria)
      console.log(this.listaPerneriaBack)
      row.isEdit = false


  }

  canceledit(e: any, id: number, key: string, elem: any) {
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

  textEditHandler(e: any, id: number, key: string, elem: any) {

/*     console.log(e.target.value)
    console.log(id)
    console.log(key)
    console.log(elem)

    console.log(this.dataSource.data) */
    const index = this.dataSource.data.findIndex(obj => obj.ID_PERNO === id);
    // console.log("index: ", index)



    const cantTerr = Number(elem.CANTIDAD_TERRENO)
    const percent = (cantTerr/Number(elem.CANTIDAD_SNF))*100
    this.dataSource.data[index].PORCENTAJE = percent


//    console.log(this.listaPerneriaBack[index])
//    console.log(this.listaPerneria[index])

    //console.log(this.listaPerneria[id-1])

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
