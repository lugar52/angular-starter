import { Component, HostBinding, Signal, OnInit } from '@angular/core';
import { FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,  } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

import { Perneria } from '../../../model/perneria';
import { PerneriaService } from '../../../services/perneria.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


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
  contratoSignal: Signal<any> | undefined;

  Registro_Sel?: Perneria
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
  show: boolean = false;
  constructor(
    private perneriaService: PerneriaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
      this.createEquipoForm();
      
      this.fila = localStorage.getItem('perno_fila')!;
      this.get_Perno(this.fila)
      
      
     

      this.contratoSignal = toSignal(
        this.form_Perneria.get('_CONTRATO')?.valueChanges.pipe(debounceTime(100)) ??
          of(null),
        {}
      );
    }
    
  OnInit() {
    this.enviarFormulario()
    
  }

  createEquipoForm() {
    this.form_Perneria = this.formBuilder.group({
      _ID_PERNO:  new FormControl('', Validators.required),
      _OC:  new FormControl('', Validators.required),
      _CONTRATO:  new FormControl('', Validators.required),
      _GUIA:  new FormControl('', Validators.required),
      _SNF:  new FormControl('', Validators.required),
      _BULTO:  new FormControl('', Validators.required),
      _ITEMCODE:  new FormControl('', Validators.required),
      _TIPO_ELEMENTO:  new FormControl('', Validators.required),
      _MARCA:  new FormControl('', Validators.required),
      _MARCA2:  new FormControl('', Validators.required),
      _TUNEL:  new FormControl('', Validators.required),
      _DISPOSICION_FINAL:  new FormControl('', Validators.required),
      _CANTIDAD_SNF:  new FormControl('', Validators.required),
      _CANTIDAD_TERRENO:  new FormControl('', Validators.required),
      _DIFERENCIA:  new FormControl('', Validators.required),
      _PESO_UNITARIO:  new FormControl('', Validators.required),
      _PESO_TOTAL:  new FormControl('', Validators.required),
      _PROVEEDOR:  new FormControl('', Validators.required),
      _PATIO:  new FormControl('', Validators.required),
      _FECHA_LLEGADA:  new FormControl('', Validators.required),
      _OBSERVACION:  new FormControl('', Validators.required),
      _NB_ASIG_TERR:  new FormControl('', Validators.required),
    })
  }

    get_Perno(id: number) {
      this.perneriaService.getPerneriaSel(id).subscribe( data => {
        this.Reg_Perneria = data[0];
        console.log('this.Registro_Sel ', this.Registro_Sel)
        console.log('this.Reg_Perneria ', this.Reg_Perneria)
        console.log('this.form_Perneria ', this.form_Perneria.valueChanges)


        this.FillRegistroEquipos()
        

      })
    }

    enviarFormulario() {

      let invalid = <FormControl[]>Object.keys(this.form_Perneria.controls).map(key => this.form_Perneria.controls[key]).filter(ctl => ctl.invalid);
      if (invalid.length > 0) {
        // Give input focus to invalid[0]... how?
        let invalidElem: any = invalid[0];
        invalidElem.nativeElement.focus();
      }
    }


    FillRegistroEquipos() {
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


     /*  this.Reg_Perneria.ID_PERNO = this.Registro_Sel.ID_PERNO
      this.Reg_Perneria.OC = this.Registro_Sel.OC
      this.Reg_Perneria.CONTRATO = this.Registro_Sel.CONTRATO
      this.Reg_Perneria.GUIA = this.Registro_Sel.GUIA
      this.Reg_Perneria.SNF = this.Registro_Sel.SNF
      this.Reg_Perneria.BULTO = this.Registro_Sel.BULTO
      this.Reg_Perneria.ITEMCODE = this.Registro_Sel.ITEMCODE
      this.Reg_Perneria.TIPO_ELEMENTO = this.Registro_Sel.TIPO_ELEMENTO
      this.Reg_Perneria.MARCA = this.Registro_Sel.MARCA
      this.Reg_Perneria.MARCA2 = this.Registro_Sel.MARCA2
      this.Reg_Perneria.TUNEL = this.Registro_Sel.TUNEL
      this.Reg_Perneria.DISPOSICION_FINAL = this.Registro_Sel.DISPOSICION_FINAL
      this.Reg_Perneria.CANTIDAD_SNF = this.Registro_Sel.CANTIDAD_SNF
      this.Reg_Perneria.CANTIDAD_TERRENO = this.Registro_Sel.CANTIDAD_TERRENO
      this.Reg_Perneria.DIFERENCIA = this.Registro_Sel.DIFERENCIA
      this.Reg_Perneria.PESO_UNITARIO = this.Registro_Sel.PESO_UNITARIO
      this.Reg_Perneria.PESO_TOTAL = this.Registro_Sel.PESO_TOTAL
      this.Reg_Perneria.PROVEEDOR = this.Registro_Sel.PROVEEDOR
      this.Reg_Perneria.PATIO = this.Registro_Sel.PATIO
      this.Reg_Perneria.FECHA_LLEGADA = this.Registro_Sel.FECHA_LLEGADA
      this.Reg_Perneria.OBSERVACION = this.Registro_Sel.OBSERVACION
      this.Reg_Perneria.NB_ASIG_TERR = this.Registro_Sel.NB_ASIG_TERR */

     
    }

   

}
