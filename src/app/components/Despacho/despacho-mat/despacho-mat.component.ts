import { Component, EventEmitter, Input, OnInit, Output, Inject, HostBinding, numberAttribute  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,  } from '@angular/forms';

import { Subscription, tap, lastValueFrom } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import {  MatIconModule } from '@angular/material/icon';
import {  MatDividerModule } from '@angular/material/divider';
import {  MatButtonModule } from '@angular/material/button';

import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Perneria, RegDespacho } from '../../../model/perneria'
import { PerneriaService } from '../../../services/perneria.service'
import { DespachosRealizadosComponent } from '../despachos-realizados/despachos-realizados.component'

@Component({
  selector: 'app-despacho-mat',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    DespachosRealizadosComponent
  ],
  templateUrl: './despacho-mat.component.html',
  styleUrl: './despacho-mat.component.less'
})
export class DespachoMatComponent {
  @HostBinding('class') classes = 'row';

  @Input({transform:numberAttribute}) id!:number;

  form_Despacho!: FormGroup;
  Registro_Sel: Perneria = {
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
    CANT_DESPACHOS: 0,
    STOCK: 0,
    INGRESOS: 0
  }

  regdespacho: RegDespacho = {
    id_perno: 0,
    Fecha_despacho: '' ,
    Hora_despacho: '' ,
    Codigo: '' ,
    descricpcion: '' ,
    snf: '' ,
    stock_Inicial: 0,
    cantidad: 0,
    peso_despacho: 0,
    lugar_despacho: 0,
    lugar_descripcion: '',
    destino: 0,
    destino_descripcion: '',
    rut_Retira: '',
    Nombre_retira: '',
    stock_final: 0,
    guia: 0,
  }

  MiId: number = 0

  constructor(
    private router: Router,
    private perneriaService: PerneriaService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    @Inject(ToastrService) private toastr: ToastrService,
    )
    {
      this.createControlForm();

    }

    ngOnInit() {

      console.log(this.id)

      localStorage.setItem("iddespacho", this.id.toString())

       this.perneriaService.getPerneriaSel(this.id).subscribe( data => {
        this.Registro_Sel = data[0];
        console.log('this.Registro_Sel ', this.Registro_Sel)

        this.FillControlDespacho()


      })

    }

    createControlForm() {
      this.form_Despacho = this.formBuilder.group({
        _ID_PERNO:  new FormControl('', Validators.required),
        _GUIA:  new FormControl('', Validators.required),
        _ITEMCODE:  new FormControl('', Validators.required),
        _DESCRIPCION:  new FormControl('', Validators.required),
        _SNF:  new FormControl('', Validators.required),
        _STOCK: new FormControl('', Validators.required),
        _PESOTOTAL: new FormControl('', Validators.required),

        _CANTIDAD:  new FormControl(null, Validators.required),
        _PESOUNITARIO: new FormControl('', Validators.required),

        _LUGAR_DESPACHO:  new FormControl('', Validators.required),
        _DESTINO:  new FormControl('', Validators.required),
        _FECHA_DESPACHO:  new FormControl('', Validators.required),
        _RUT_RETIRA:  new FormControl('', Validators.required),
        _NOMBRE_RETIRA:  new FormControl('', Validators.required),
      })
    }

    FillControlDespacho() {
      const date = new Date();
      const formattedDate:string = date.toLocaleString();

      this.form_Despacho = this.formBuilder.group({
        _ID_PERNO:  [this.Registro_Sel.ID_PERNO] ,
        _ITEMCODE:  [this.Registro_Sel.ITEMCODE] ,
        _DESCRIPCION:  [this.Registro_Sel.TIPOELEM_DESCRIPCION] ,
        _SNF:  [this.Registro_Sel.SNF] ,
        _STOCK: [this.Registro_Sel.STOCK] ,
        _PESOTOTAL: [this.Registro_Sel.PESO_TOTAL] ,
        _CANTIDAD:  [0] ,
        _PESOUNITARIO: [0] ,
        _LUGAR_DESPACHO:  [this.Registro_Sel.DISPO_DESCRIPCION] ,
        _GUIA:  [''] ,
        _DESTINO:  [''] ,
        _FECHA_DESPACHO:  [formattedDate] ,
        _RUT_RETIRA:  [''] ,
        _NOMBRE_RETIRA:  [''] ,

      })
      localStorage.setItem("Stock_despacho", this.Registro_Sel.STOCK.toString())
    }

    calculaPeso(formValue: any) {

      const StockReal = localStorage.getItem("Stock_despacho")
      console.log(Number(formValue._CANTIDAD) + ' ' + Number(StockReal))

      if (Number(formValue._CANTIDAD) <= Number(StockReal)) {
        const mipeso = Number(formValue._CANTIDAD) * Number(this.Registro_Sel.PESO_UNITARIO)
        const miStock: number = Number(StockReal) - Number(formValue._CANTIDAD)

        this.form_Despacho = this.formBuilder.group({
          _ID_PERNO:  [this.Registro_Sel.ID_PERNO] ,
          _ITEMCODE:  [this.Registro_Sel.ITEMCODE] ,
          _DESCRIPCION:  [this.Registro_Sel.TIPOELEM_DESCRIPCION] ,
          _SNF:  [this.Registro_Sel.SNF] ,
          _STOCK: [miStock] ,
          _PESOTOTAL: [this.Registro_Sel.PESO_TOTAL] ,
          _CANTIDAD:  [formValue._CANTIDAD] ,
          _PESOUNITARIO:  [mipeso],
          _LUGAR_DESPACHO:  [formValue._LUGAR_DESPACHO],
          _GUIA:  [formValue._GUIA],
          _DESTINO:  [formValue._DESTINO],
          _FECHA_DESPACHO:   [formValue._FECHA_DESPACHO] ,
          _RUT_RETIRA:  [formValue._RUT_RETIRA],
          _NOMBRE_RETIRA:  [formValue._NOMBRE_RETIRA],

        })
      }
      else {

        console.log("Error en cantidad ingresada")
        this.FillControlDespacho()
      }


    }

    SelecionaDestino(formvalue: any) {
      console.log(formvalue)

    }

    GrabarDespacho(formvalue: any) {


      console.log(formvalue)
        this.regdespacho.id_perno = Number(formvalue._ID_PERNO)
        this.regdespacho.Fecha_despacho = formvalue._FECHA_DESPACHO.split(",")[0].trim()
        this.regdespacho.Hora_despacho = formvalue._FECHA_DESPACHO.split(",")[1].trim()
        this.regdespacho.Codigo = formvalue._ITEMCODE
        this.regdespacho.descricpcion = formvalue._DESCRIPCION
        this.regdespacho.snf = formvalue._SNF
        this.regdespacho.stock_Inicial = Number(formvalue._STOCK) + Number(formvalue._CANTIDAD)
        this.regdespacho.cantidad = Number(formvalue._CANTIDAD)
        this.regdespacho.stock_final = Number(formvalue._STOCK)
        this.regdespacho.peso_despacho = Number(formvalue._PESOUNITARIO)
        this.regdespacho.lugar_despacho = Number(this.Registro_Sel.DISPOSICION_FINAL)
        this.regdespacho.destino = Number(formvalue._DESTINO)
        this.regdespacho.rut_Retira = formvalue._RUT_RETIRA
        this.regdespacho.Nombre_retira = formvalue._NOMBRE_RETIRA
        this.regdespacho.guia = Number(formvalue._GUIA)

        console.log(this.regdespacho)

            this.perneriaService.despacho(this.regdespacho).pipe(
                tap(res => {
                  console.log(res)
                  if (res.status_code == 200 ) {

                    this.toastr.success('Se ha guardado la información exitosamente!', 'Control Patio');

                    let  myurl = `${'despacholist'}/${this.regdespacho.id_perno}`;
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

    volverListado() {
      let  myurl = `${'perneria-new'}`;
      this.router.navigate([myurl] ).then(e => {
        if (e) {
        } else {
          console.log('error: ', e)
        }
      });
    }

}


