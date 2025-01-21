export interface Material {
  ID_cmaterial?: number;
  OC?: string;
  PO?: string;
  id_elemento?: number;
  guia?: number;
  snf?: string;
  id_disposicion?: number;
  marca?: string;
  id_tipo_elem?: number;
  cantidad_snf?: number;
  cantidad_terreno?: number;
  diferencia?: number;
  peso_unitario?: string;
  peso_total?: number;
  bulto?: string;
  id_proveedor?: number;
  id_patio?: number;
  fecha_llegada?: string;
  id_subpatio?: number;
  id_coordenada?: number;
  observacion?: string;

}

export const PernoColumns = [
  {
    key: 'isEdit',
    type: 'isEdit',
    label: 'Edit',
  },
  {
    key: 'OC',
    type: 'textItem',
    label: 'OC',
    required: false,
    readonly: true,
    disabled: true
  },
  {
    key: 'ELEMENTO',
    type: 'textItem',
    label: 'ELEMENTO',
    required: false,
    readonly: true,
    disabled: true
  },
  {
    key: 'GUIA',
    type: 'textItem',
    label: 'GUIA',
    required: false,
    readonly: true,
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
    key: 'DISPO_DESCRIPCION',
    type: 'select',
    label: 'DISPOSICION FINAL',
    required: true,
    readonly:false,
    disabled: false,
    seloption: [
      {value: 1, viewValue: 'Coirón'},
      {value: 2, viewValue: 'La guardia' },
      {value: 3, viewValue: 'Las Animas II' }
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
    key: 'TIPOELEM_DESCRIPCION',
    type: 'select',
    label: 'TIPO ELEMENTO',
    required: true,
    readonly:false,
    disabled: false,
    seloptionvalue: ['1','2'],
    seloption: [
       { value: 1, viewValue: 'Pernos Roca' },
       { value: 2, viewValue: 'Pernos de anclaje' },
       { value: 3, viewValue: '2D Soldado' },
       { value: 4, viewValue: '2D_SOLDADO' },
       { value: 5, viewValue: '3D PREENSAMB' },
       { value: 6, viewValue: '3D_PREENSAMB***' },
       { value: 7, viewValue: 'ABRAZADERA' },
       { value: 8, viewValue: 'Abrazadera FC' },
       { value: 9, viewValue: 'ABRAZADERA_F.C.' },
       { value: 10, viewValue: 'Angulo' },
       { value: 11, viewValue: 'Columna' },
       { value: 12, viewValue: 'INSERTO'  },
       { value: 13, viewValue: 'MISCELANEO'  },
       { value: 14, viewValue: 'Plancha'  },
       { value: 15, viewValue: 'PLANCHA_PERF***' },
       { value: 16, viewValue: 'Soporte'  },
       { value: 17, viewValue: 'SOPORTE_ESPE'  },
       { value: 18, viewValue: ' SOPORTE_ESPE***' },
       { value: 19, viewValue: 'Viga' }
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
    key: 'BULTO',
    type: 'text',
    label: 'BULTO',
    required: true,
    readonly:false,
    disabled: false
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
    key: 'SUB-PATIO_DESCRIPCION',
    type: 'select',
    label: 'SUB-PATIO',
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
    key: 'COORDENADA',
    type: 'select',
    label: 'COORDENADA',
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
    key: 'OBSERVACION',
    type: 'text',
    label: 'OBSERVACION',
    required: true,
    readonly:false,
    disabled: false
  },
];
