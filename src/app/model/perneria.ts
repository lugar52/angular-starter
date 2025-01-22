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
     ID_SUBPATIO?: number;
     ID_COORDENADA?: number;
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
    key: 'GUIA',
    type: 'textItem',
    label: 'GUIA',
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
    label: 'DESTINO',
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
    key: 'PATIO_1',
    type: 'select',
    label: 'PATIO_1',
    required: true,
    readonly:false,
    disabled: false,
    seloption: [
      {value: 1, viewValue:	'2 Norte' },
      {value: 2, viewValue:	'2 SUR' },
      {value: 3, viewValue:	'3' },
      {value: 4, viewValue:	'3 Norte' },
    ]
  },
  {
    key: 'COORDENADAS',
    type: 'select',
    label: 'COORDENADAS',
    required: true,
    readonly:false,
    disabled: false,
    seloption: [
      {value: 1, viewValue:	'2 Norte' },
      {value: 1	, viewValue: '10 SUR' },
      {value: 2	, viewValue: '20 SUR' },
      {value: 3	, viewValue: '30 SUR' },
      {value: 4	, viewValue: '40 SUR' },
      {value: 5	, viewValue: '50 SUR' },
      {value: 6	, viewValue: '60 SUR' },
      {value: 7	, viewValue: '70 SUR' },
      {value: 8	, viewValue: '80 SUR' },
      {value: 9	, viewValue: 'A-10' },
      {value: 10, viewValue: 'A-20' },
      {value: 11, viewValue: 'A-30' },
      {value: 12, viewValue: 'A-40' },
      {value: 13, viewValue: 'A-50' },
      {value: 14, viewValue: 'A-60' },
      {value: 15, viewValue: 'A-70' },
      {value: 16, viewValue: 'A-80' },
      {value: 17, viewValue: 'A-90' },
      {value: 18, viewValue: 'B-10' },
      {value: 19, viewValue: 'B-100' },
      {value: 20, viewValue: 'B-20' },
      {value: 21, viewValue: 'B-40' },
      {value: 22, viewValue: 'B-50' },
      {value: 23, viewValue: 'B-60' },
      {value: 24, viewValue: 'B-70' },
      {value: 25, viewValue: 'B-80' },
      {value: 26, viewValue: 'B-90' }
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

export interface DatosAGrabar {
  Cantidad_Terreno: number
  Tipo_Elemento: number;
  Tunel: number;
  Disposicion_Final: number;
  Proveedor: number;
  Patio: number;
  subPatio: number;
  coordenada: number;
  Diferencia: number;
  Fecha_llegada: string ;
  Observacion: string ;
}
