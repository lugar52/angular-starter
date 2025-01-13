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
     isSelected?: boolean;
     isEdit?: boolean;
}

type seloption = {
  value: string;
  viewValue: string;
}

type Food =  {
  value: string;
  viewValue: string;
}

const foods: Food[] = [
  { value: 'steak-0', viewValue: 'Steak' },
  { value: 'pizza-1', viewValue: 'Pizza' },
  { value: 'tacos-2', viewValue: 'Tacos' },
]

export const PernoColumns = [
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
  {
    key: 'isSelected',
    type: 'isSelected',
    label: '',
  },
  {
    key: 'ITEMCODE',
    type: 'no-text',
    label: 'ITEM',
    required: false,
    readonly:false,
    disabled: true
  },
  {
    key: 'SNF',
    type: 'no-text',
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
    type: 'text',
    label: 'MARCA',
    required: true,
    readonly:false,
    disabled: true
  },
  {
    key: 'TUNEL',
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
    key: 'DISPOSICION_FINAL',
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
    type: 'text',
    label: 'CANT. SNF',
    required: true,
    readonly:false,
    disabled: true
  },
  {
    key: 'CANTIDAD_TERRENO',
    type: 'text',
    label: 'CANT. TERRENO',
    required: true,
    readonly:false,
    disabled: false
  },
  {
    key: 'DIFERENCIA',
    type: 'text',
    label: 'DIFERENCIA',
    required: true,
    readonly:false,
    disabled: true
  },
  {
    key: 'PORCENT',
    type: 'text',
    label: '% CUMPLIMIENTO',
    required: true,
    readonly:false,
    disabled: true
  },
  {
    key: 'PESO_UNITARIO',
    type: 'text',
    label: 'PESO UNITARIO',
    required: true,
    readonly:false,
    disabled: true
  },
  {
    key: 'PESO_TOTAL',
    type: 'text',
    label: 'PESO TOTAL',
    required: true,
    readonly:false,
    disabled: true
  },
  {
    key: 'PROVEEDOR',
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
    key: 'PATIO',
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
