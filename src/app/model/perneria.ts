export interface Perneria {
     ID_PERNO?: number;
     OC?: number;
     CONTRATO?: string;
     GUIA?: number;
     SNF?: string;
     BULTO?: number;
     ITEMCODE?: string;
     TIPO_ELEMENTO?: string;
     MARCA?: string;
     MARCA2?: string;
     TUNEL?: string;
     DISPOSICION_FINAL?: string;
     CANTIDAD_SNF?: number;
     CANTIDAD_TERRENO?: number;
     PERCENT?: number;
     DIFERENCIA?: number;
     PESO_UNITARIO?: number;
     PESO_TOTAL?: number;
     PROVEEDOR?: string;
     PATIO?: string;
     FECHA_LLEGADA: Date | undefined;
     OBSERVACION?: string;
     NB_ASIG_TERR?: string;
     TIPOELEM_DESCRIPCION?: string;
     TUNEL_DESCRIPCION?: string;
     DISPO_DESCRIPCION?: string;
     PROVE_DESCRIPCION?: string;
     PATIO_DESCRIPCION?: string;
     PORCENTAJE?: number;
     isEdit?: boolean;
     isSelected?: boolean;
}

export const PernoColumns = [
  {
    key: 'isEdit',
    type: 'isEdit',
    label: 'Edit',
  },
  {
    key: 'ITEMCODE',
    type: 'textItem',
    label: 'ITEM',
    required: false,
    readonly:false,
    disabled: true
  },
  {
    key: 'SNF',
    type: 'textItem',
    label: 'SNF',
    required: true,
    readonly:false,
    disabled: true
  },
  {
    key: 'TIPOELEM_DESCRIPCION',
    type: 'select',
    label: 'TIPO ELEMENTO',
    required: true,
    readonly:false,
    disabled: false,
    seloptionvalue: ['1','2'],
    seloption: [
      { value: 0, viewValue: 'Perno Roca' },
      { value: 1, viewValue: 'Perno de anclaje' },
    ]
  },
  {
    key: 'MARCA',
    type: 'textItem',
    label: 'MARCA',
    required: true,
    readonly:false,
    disabled: true
  },
  {
    key: 'TUNEL_DESCRIPCION',
    type: 'select',
    label: 'TUNEL',
    required: true,
    readonly:false,
    disabled: false,
    seloption: [
        { value: 1, viewValue: 'Coirón' },
        { value: 2, viewValue: 'La Guardia' },
        { value: 3, viewValue: 'Las Animas' },
        { value: 4, viewValue: 'NO LLEGO' },
        { value: 5, viewValue: 'Confirmar' },
    ]
  },

  {
    key: 'DISPO_DESCRIPCION',
    type: 'select',
    label: 'DISPOSICION FINAL',
    required: true,
    readonly:false,
    disabled: false,
    seloption: [
      {value: 1, viewValue: 'Boveda'},
      {value: 2, viewValue: 'Contraboveda' },
      {value: 3, viewValue: 'Fundación' },
      {value: 4, viewValue: 'Hastial' },
      {value: 5, viewValue: 'No sale' },
      {value: 4, viewValue: 'NO LLEGO'},
      {value: 5, viewValue: 'N/A'},
    ]
  },
  {
    key: 'CANTIDAD_SNF',
    type: 'textCant',
    label: 'CANT SNF',
    required: true,
    readonly:false,
    disabled: true
  },
  {
    key: 'CANTIDAD_TERRENO',
    type: 'number',
    label: 'CANT TERR.',
    required: true,
    readonly:false,
    disabled: false
  },
  {
    key: 'DIFERENCIA',
    type: 'textCant',
    label: 'DIFER.',
    required: true,
    readonly:false,
    disabled: true
  },
  {
    key: 'PORCENT',
    type: 'textCumpli',
    label: '% CUMPLIMIENTO',
    required: true,
    readonly:false,
    disabled: true
  },
  {
    key: 'PESO_UNITARIO',
    type: 'textCant',
    label: 'PESO UNIT.',
    required: true,
    readonly:false,
    disabled: true
  },
  {
    key: 'PESO_TOTAL',
    type: 'textCant',
    label: 'PESO TOTAL',
    required: true,
    readonly:false,
    disabled: true
  },
  {
    key: 'PROVE_DESCRIPCION',
    type: 'select',
    label: 'PROVEEDOR',
    required: true,
    readonly:false,
    disabled: true,
    seloption: [
      {value: 1, viewValue: 'Reliper'},
    ]
  },
  {
    key: 'PATIO_DESCRIPCION',
    type: 'select',
    label: 'PATIO',
    required: true,
    readonly:false,
    disabled: false,
    seloption: [
      {value: 1, viewValue: 'Remanso'},
    ]
  },
  {
    key: 'FECHA_LLEGADA',
    type: 'date',
    label: 'FECHA LLEGADA',
    required: true,
    readonly:false,
    disabled: false
  },
  {
    key: 'OBSERVACION',
    type: 'text',
    label: 'OBSERVACION',
    required: true,
    readonly:false,
    disabled: false
  },

];
