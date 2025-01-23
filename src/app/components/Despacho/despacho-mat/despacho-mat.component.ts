import { Component, EventEmitter, Input, OnInit, Output, Inject, HostBinding, numberAttribute  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,  } from '@angular/forms';

  import {MatIconModule} from '@angular/material/icon';
  import {MatDividerModule} from '@angular/material/divider';
  import {MatButtonModule} from '@angular/material/button';

import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Perneria, regDespacho } from '../../../model/perneria'
import { PerneriaService } from '../../../services/perneria.service'

@Component({
  selector: 'app-despacho-mat',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
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
  }

  despacho: regDespacho = {
    id_perno: 0,
    Fecha_despacho: '' ,
    Codigo: 0 ,
    descricpcion: '' ,
    snf: '' ,
    stock_Inicial: 0,
    cantidad: 0,
    peso_despacho: 0,
    lugar_despacho: 0,
    destino: 0,
    rut_Retira: '',
    Nombre_retira: '',
    stock_final: 0,
    guia: '',
  }

  constructor(
    private router: Router,
    private perneriaService: PerneriaService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,

    )
    {
      this.createControlForm();

    }

    ngOnInit() {

      console.log(this.id)

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
        _STOCK: [this.Registro_Sel.CANTIDAD_TERRENO] ,
        _PESOTOTAL: [this.Registro_Sel.PESO_TOTAL] ,
        _CANTIDAD:  [0] ,
        _PESOUNITARIO: [0] ,
        _LUGAR_DESPACHO:  [''] ,
        _GUIA:  [''] ,
        _DESTINO:  [''] ,
        _FECHA_DESPACHO:  [formattedDate] ,
        _RUT_RETIRA:  [''] ,
        _NOMBRE_RETIRA:  [''] ,

      })
    }

    calculaPeso(formValue: any) {

      const mipeso = Number(formValue._CANTIDAD) * Number(this.Registro_Sel.PESO_UNITARIO)
      console.log(mipeso)

      this.form_Despacho = this.formBuilder.group({
        _ID_PERNO:  [this.Registro_Sel.ID_PERNO] ,
        _ITEMCODE:  [this.Registro_Sel.ITEMCODE] ,
        _DESCRIPCION:  [this.Registro_Sel.TIPOELEM_DESCRIPCION] ,
        _SNF:  [this.Registro_Sel.SNF] ,
        _STOCK: [this.Registro_Sel.CANTIDAD_TERRENO] ,
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

    SelecionaDestino(formvalue: any) {
      console.log(formvalue)

    }

    GrabarDespacho(formvalue: any) {

      console.log(formvalue)
        this.despacho.id_perno = formvalue._ID_PERNO
        this.despacho.Fecha_despacho = formvalue._FECHA_DESPACHO
        this.despacho.Codigo = formvalue._ITEMCODE
        this.despacho.descricpcion = formvalue._DESCRIPCION
        this.despacho.snf = formvalue._SNF
        this.despacho.stock_Inicial = formvalue._STOCK
        this.despacho.cantidad = formvalue._CANTIDAD
        this.despacho.stock_final = Number(formvalue._STOCK) - Number(formvalue._CANTIDAD)
        this.despacho.peso_despacho = formvalue._PESOUNITARIO
        this.despacho.lugar_despacho = formvalue._LUGAR_DESPACHO
        this.despacho.destino = formvalue._DESTINO
        this.despacho.rut_Retira = formvalue._RUT_RETIRA
        this.despacho.Nombre_retira = formvalue._NOMBRE_RETIRA
        this.despacho.stock_final = formvalue._GUIA,
        this.despacho.guia = formvalue._GUIA

        console.log(this.despacho)

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
