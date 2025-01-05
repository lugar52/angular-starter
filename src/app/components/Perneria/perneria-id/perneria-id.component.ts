import { Component, HostBinding, } from '@angular/core';
import { FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,  } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

import { Perneria } from '../../../model/perneria';
import { PerneriaService } from '../../../services/perneria.service';


@Component({
  selector: 'app-perneria-id',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './perneria-id.component.html',
  styleUrl: './perneria-id.component.css'
})
export class PerneriaIdComponent {
  @HostBinding('class') classes = 'row';

  form_Perneria!: FormGroup;
  Registro_Sel: any
  Reg_Perneria = {
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
    FECHA_LLEGADA: '',
    OBSERVACION: '',
    NB_ASIG_TERR: '',
  }

  fila: any = '';

  constructor(
    private perneriaService: PerneriaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
      this.createEquipoForm();
      this.fila = localStorage.getItem('perno_fila')!;
      this.get_Perno(this.fila)
  }

  createEquipoForm() {
    this.form_Perneria = this.formBuilder.group({
      _ID_PERNO: [''],
      _OC: [''],
      _CONTRATO: [''],
      _GUIA: [''],
      _SNF: [''],
      _BULTO: [''],
      _ITEMCODE: [''],
      _TIPO_ELEMENTO: [''],
      _MARCA: [''],
      _MARCA2: [''],
      _TUNEL: [''],
      _DISPOSICION_FINAL: [''],
      _CANTIDAD_SNF: [''],
      _CANTIDAD_TERRENO: [''],
      _DIFERENCIA: [''],
      _PESO_UNITARIO: [''],
      _PESO_TOTAL: [''],
      _PROVEEDOR: [''],
      _PATIO: [''],
      _FECHA_LLEGADA: [''],
      _OBSERVACION: [''],
      _NB_ASIG_TERR: [''],
    })
  }

    get_Perno(id: number) {
      this.perneriaService.getPerneriaSel(id).subscribe( data => {
        console.log('data', data[0])
        this.Registro_Sel = data[0];
  
        this.FillRegistroEquipos(this.Registro_Sel)
      })
    }

    FillRegistroEquipos(Registro_Sel: any) {
      this.Reg_Perneria.ID_PERNO = Registro_Sel.ID_PERNO
      this.Reg_Perneria.OC = Registro_Sel.OC
      this.Reg_Perneria.CONTRATO = Registro_Sel.CONTRATO
      this.Reg_Perneria.GUIA = Registro_Sel.GUIA
      this.Reg_Perneria.SNF = Registro_Sel.SNF
      this.Reg_Perneria.BULTO = Registro_Sel.BULTO
      this.Reg_Perneria.ITEMCODE = Registro_Sel.ITEMCODE
      this.Reg_Perneria.TIPO_ELEMENTO = Registro_Sel.TIPO_ELEMENTO
      this.Reg_Perneria.MARCA = Registro_Sel.MARCA
      this.Reg_Perneria.MARCA2 = Registro_Sel.MARCA2
      this.Reg_Perneria.TUNEL = Registro_Sel.TUNEL
      this.Reg_Perneria.DISPOSICION_FINAL = Registro_Sel.DISPOSICION_FINAL
      this.Reg_Perneria.CANTIDAD_SNF = Registro_Sel.CANTIDAD_SNF
      this.Reg_Perneria.CANTIDAD_TERRENO = Registro_Sel.CANTIDAD_TERRENO
      this.Reg_Perneria.DIFERENCIA = Registro_Sel.DIFERENCIA
      this.Reg_Perneria.PESO_UNITARIO = Registro_Sel.PESO_UNITARIO
      this.Reg_Perneria.PESO_TOTAL = Registro_Sel.PESO_TOTAL
      this.Reg_Perneria.PROVEEDOR = Registro_Sel.PROVEEDOR
      this.Reg_Perneria.PATIO = Registro_Sel.PATIO
      this.Reg_Perneria.FECHA_LLEGADA = Registro_Sel.FECHA_LLEGADA
      this.Reg_Perneria.OBSERVACION = Registro_Sel.OBSERVACION
      this.Reg_Perneria.NB_ASIG_TERR = Registro_Sel.NB_ASIG_TERR

      this.form_Perneria = this.formBuilder.group({
        _ID_PERNO: [this.Reg_Perneria.ID_PERNO],
        _OC: [this.Reg_Perneria.OC],
        _CONTRATO: [this.Reg_Perneria.CONTRATO],
        _GUIA: [this.Reg_Perneria.GUIA],
        _SNF: [this.Reg_Perneria.SNF],
        _BULTO: [this.Reg_Perneria.BULTO],
        _ITEMCODE: [this.Reg_Perneria.ITEMCODE],
        _TIPO_ELEMENTO: [this.Reg_Perneria.TIPO_ELEMENTO],
        _MARCA: [this.Reg_Perneria.MARCA],
        _MARCA2: [this.Reg_Perneria.MARCA2],
        _TUNEL: [this.Reg_Perneria.TUNEL],
        _DISPOSICION_FINAL: [this.Reg_Perneria.DISPOSICION_FINAL],
        _CANTIDAD_SNF: [this.Reg_Perneria.CANTIDAD_SNF],
        _CANTIDAD_TERRENO: [this.Reg_Perneria.CANTIDAD_TERRENO],
        _DIFERENCIA: [this.Reg_Perneria.DIFERENCIA],
        _PESO_UNITARIO: [this.Reg_Perneria.PESO_UNITARIO],
        _PESO_TOTAL: [this.Reg_Perneria.PESO_TOTAL],
        _PROVEEDOR: [this.Reg_Perneria.PROVEEDOR],
        _PATIO: [this.Reg_Perneria.PATIO],
        _FECHA_LLEGADA: [this.Reg_Perneria.FECHA_LLEGADA],
        _OBSERVACION: [this.Reg_Perneria.OBSERVACION],
        _NB_ASIG_TERR: [this.Reg_Perneria.NB_ASIG_TERR],
      })
    }

}
