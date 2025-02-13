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
     TUNEL: number;
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
     CANT_DESPACHOS: number;
     STOCK: number;
     INGRESOS: number;
     GUIA_PROVEEDOR?: string;
     UNIDAD?: string;
     CAJON_PALLET_JAVA?: string;
     RECEPCIONADO?: string;
     ELEMENTO: number, 
     ELEMENTO_DESC: string
     SUBPATIO_DESCRIPCION: string
     ID_SubPatio: number
     COORDENADA_DESCRIPCION: string
     ID_Coordenada: number
}

export const PernoColumns = [
  {
    key: 'isEdit',
    type: 'isEdit',
    label: 'Acción',
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
    disabled: false
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
      { value: 1 , viewValue: 'Pernos Roca' },
      { value: 2 , viewValue: 'Pernos de anclaje' },
      { value: 3 , viewValue: '2D Soldado' },
      { value: 4 , viewValue: '2D_SOLDADO' },
      { value: 5 , viewValue: '3D PREENSAMB' },
      { value: 6 , viewValue: '3D_PREENSAMB***' },
      { value: 7 , viewValue: 'ABRAZADERA' },
      { value: 8 , viewValue: 'Abrazadera FC' },
      { value: 9 , viewValue: 'ABRAZADERA_F.C.' },
      { value: 10, viewValue: 'Angulo' },
      { value: 11, viewValue: 'Columna' },
      { value: 12, viewValue: 'INSERTO' },
      { value: 13, viewValue: 'MISCELANEO' },
      { value: 14, viewValue: 'Plancha' },
      { value: 15, viewValue: 'PLANCHA_PERF***' },
      { value: 16, viewValue: 'Soporte' },
      { value: 17, viewValue: 'SOPORTE_ESPE' },
      { value: 18, viewValue: 'SOPORTE_ESPE***' },
      { value: 19, viewValue: 'Viga' }
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
    key: 'INGRESOS',
    type: 'number',
    label: 'INGRESOS',
    required: true,
    readonly:false,
    disabled: false
  },
  {
    key: 'CANT_DESPACHOS',
    type: 'number',
    label: 'DESPACHA DOS',
    required: true,
    readonly:true,
    disabled: true
  },
  {
    key: 'STOCK',
    type: 'number',
    label: 'STOCK',
    required: true,
    readonly:true,
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
    key: 'SUBPATIO_DESCRIPCION',
    type: 'select',
    label: 'PATIO 1',
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
    key: 'COORDENADA_DESCRIPCION',
    type: 'select',
    label: 'COORDENADAS',
    required: true,
    readonly:false,
    disabled: false,
    seloption: [
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
  Tunel: number;
  Disposicion_Final: number;
  Patio: number;
  SubPatio: number;
  Coordenada: number;
  Diferencia: number;
  Fecha_llegada: string ;
  Observacion: string ;
  Stock: number ;
}

export interface RegMovimientoStock {
  tipo_movimiento: number;
  id_perno: number;
  Fecha_despacho: string ;
  Hora_despacho: string ;
  Codigo: string ;
  descricpcion: string ;
  snf: string ;
  stock_Inicial: number;
  cantidad: number;
  stock_final: number;
  guia: number
  peso_despacho: number
  lugar_despacho: number;
  lugar_descripcion: string;
  destino: number;
  destino_descripcion: string;
  rut_Retira: string;
  Nombre_retira: string;
}

export const PetricioColumns = [
  {
    key: 'isEdit',
    type: 'isEdit',
    label: 'Acción',
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
      { value: 1 , viewValue: 'Pernos Roca' },
      { value: 2 , viewValue: 'Pernos de anclaje' },
      { value: 3 , viewValue: '2D Soldado' },
      { value: 4 , viewValue: '2D_SOLDADO' },
      { value: 5 , viewValue: '3D PREENSAMB' },
      { value: 6 , viewValue: '3D_PREENSAMB***' },
      { value: 7 , viewValue: 'ABRAZADERA' },
      { value: 8 , viewValue: 'Abrazadera FC' },
      { value: 9 , viewValue: 'ABRAZADERA_F.C.' },
      { value: 10, viewValue: 'Angulo' },
      { value: 11, viewValue: 'Columna' },
      { value: 12, viewValue: 'INSERTO' },
      { value: 13, viewValue: 'MISCELANEO' },
      { value: 14, viewValue: 'Plancha' },
      { value: 15, viewValue: 'PLANCHA_PERF***' },
      { value: 16, viewValue: 'Soporte' },
      { value: 17, viewValue: 'SOPORTE_ESPE' },
      { value: 18, viewValue: 'SOPORTE_ESPE***' },
      { value: 19, viewValue: 'Viga' }
    ]
  },
  {
    key: 'GUIA',
    type: 'textItem',
    label: 'GUIA',
    required: true,
    readonly:false,
    disabled: false
  },
  {
    key: 'SNF',
    type: 'textItem',
    label: 'SNF',
    required: true,
    readonly:false,
    disabled: false
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
    key: 'INGRESOS',
    type: 'number',
    label: 'INGRESOS',
    required: true,
    readonly:false,
    disabled: false
  },
  {
    key: 'CANT_DESPACHOS',
    type: 'number',
    label: 'DESPACHA DOS',
    required: true,
    readonly:true,
    disabled: true
  },
  {
    key: 'STOCK',
    type: 'number',
    label: 'STOCK',
    required: true,
    readonly:true,
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
    key: 'SUBPATIO_DESCRIPCION',
    type: 'select',
    label: 'PATIO 1',
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
    key: 'COORDENADA_DESCRIPCION',
    type: 'select',
    label: 'COORDENADAS',
    required: true,
    readonly:false,
    disabled: false,
    seloption: [
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

export const CoasinColumns = [
  {
    key: 'isEdit',
    type: 'isEdit',
    label: 'Acción',
  },
  {
    key: 'GUIA',
    type: 'textItem',
    label: 'GUIA',
    required: true,
    readonly:false,
    disabled: false
  },
  {
    key: 'GUIA_PROVEEDOR',
    type: 'textItem',
    label: 'GUIA_PROVEEDOR',
    required: true,
    readonly:true,
    disabled: true
  },
  {
    key: 'BULTO',
    type: 'textItem',
    label: 'SNF',
    required: true,
    readonly:true,
    disabled: false
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
    key: 'CANTIDAD_SNF',
    type: 'textCant',
    label: 'CANT SNF',
    required: true,
    readonly:false,
    disabled: true
  },
  {
    key: 'UNIDAD',
    type: 'textCant',
    label: 'UNIDAD',
    required: true,
    readonly:true,
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
    key: 'INGRESOS',
    type: 'number',
    label: 'INGRESOS',
    required: true,
    readonly:false,
    disabled: false
  },
  {
    key: 'CANT_DESPACHOS',
    type: 'number',
    label: 'DESPACHA DOS',
    required: true,
    readonly:true,
    disabled: true
  },
  {
    key: 'STOCK',
    type: 'number',
    label: 'STOCK',
    required: true,
    readonly:true,
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

export const LureyeColumns = [
  {
    key: 'isEdit',
    type: 'isEdit',
    label: 'Acción',
  },
  
  {
    key: 'GUIA',
    type: 'textItem',
    label: 'GUIA',
    required: true,
    readonly:false,
    disabled: false
  },
  {
    key: 'CONTRATO',
    type: 'textItem',
    label: 'CONTRATO',
    required: true,
    readonly: true,
    disabled: false
  },
  {
    key: 'ELEMENTO_DESC',
    type: 'textItem',
    label: 'ELEMENTO_DESC',
    required: true,
    readonly: true,
    disabled: false
  },
  {
    key: 'GUIA_PROVEEDOR',
    type: 'textItem',
    label: 'GUIA_PROVEEDOR',
    required: true,
    readonly:true,
    disabled: true
  },
  {
  key: 'SNF',
  type: 'textItem',
  label: 'SNF',
  required: true,
  readonly:true,
  disabled: true
},
  {
    key: 'BULTO',
    type: 'textItem',
    label: 'SNF',
    required: true,
    readonly:true,
    disabled: false
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
      { value: 1 , viewValue: 'Pernos Roca' },
      { value: 2 , viewValue: 'Pernos de anclaje' },
      { value: 3 , viewValue: '2D Soldado' },
      { value: 4 , viewValue: '2D_SOLDADO' },
      { value: 5 , viewValue: '3D PREENSAMB' },
      { value: 6 , viewValue: '3D_PREENSAMB***' },
      { value: 7 , viewValue: 'ABRAZADERA' },
      { value: 8 , viewValue: 'Abrazadera FC' },
      { value: 9 , viewValue: 'ABRAZADERA_F.C.' },
      { value: 10, viewValue: 'Angulo' },
      { value: 11, viewValue: 'Columna' },
      { value: 12, viewValue: 'INSERTO' },
      { value: 13, viewValue: 'MISCELANEO' },
      { value: 14, viewValue: 'Plancha' },
      { value: 15, viewValue: 'PLANCHA_PERF***' },
      { value: 16, viewValue: 'Soporte' },
      { value: 17, viewValue: 'SOPORTE_ESPE' },
      { value: 18, viewValue: 'SOPORTE_ESPE***' },
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
    key: 'INGRESOS',
    type: 'number',
    label: 'INGRESOS',
    required: true,
    readonly:false,
    disabled: false
  },
  {
    key: 'CANT_DESPACHOS',
    type: 'number',
    label: 'DESPACHA DOS',
    required: true,
    readonly:true,
    disabled: true
  },
  {
    key: 'STOCK',
    type: 'number',
    label: 'STOCK',
    required: true,
    readonly:true,
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
    key: 'COORDENADA_DESCRIPCION',
    type: 'select',
    label: 'COORDENADAS',
    required: true,
    readonly:true,
    disabled: false,
    seloption: [
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

export const AttexColumns = [
  {
    key: 'isEdit',
    type: 'isEdit',
    label: 'Acción',
  },
  {
    key: 'OC',
    type: 'textItem',
    label: 'GUIA',
    required: true,
    readonly:false,
    disabled: false
  },
  {
    key: 'CAJON_PALLET_JAVA',
    type: 'textItem',
    label: 'CAJON_PALLET_JAVA',
    required: true,
    readonly: true,
    disabled: false
  },
  
  {
    key: 'ELEMENTO_DESC',
    type: 'textItem',
    label: 'ELEMENTO_DESC',
    required: true,
    readonly: true,
    disabled: false
  },  
  {
    key: 'GUIA',
    type: 'textItem',
    label: 'GUIA',
    required: true,
    readonly: false,
    disabled: false
  },
  {
    key: 'GUIA_PROVEEDOR',
    type: 'textItem',
    label: 'GUIA_PROVEEDOR',
    required: true,
    readonly:true,
    disabled: true
  },
  {
  key: 'SNF',
  type: 'textItem',
  label: 'SNF',
  required: true,
  readonly:true,
  disabled: true
},
{
  key: 'BULTO',
  type: 'textItem',
  label: 'BULTO',
  required: true,
  readonly:true,
  disabled: false
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
    key: 'INGRESOS',
    type: 'number',
    label: 'INGRESOS',
    required: true,
    readonly:false,
    disabled: false
  },
  {
    key: 'CANT_DESPACHOS',
    type: 'number',
    label: 'DESPACHA DOS',
    required: true,
    readonly:true,
    disabled: true
  },
  {
    key: 'STOCK',
    type: 'number',
    label: 'STOCK',
    required: true,
    readonly:true,
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
    readonly: true,
    disabled: false,
    seloption: [
      {value: 1, viewValue: 'Remanso'},
    ]
  },
  {
    key: 'SUBPATIO_DESCRIPCION',
    type: 'select',
    label: 'SUBPATIO_DESCRIPCION',
    required: true,
    readonly: true,
    disabled: false,
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

export const TehmcoColumns = [
  {
    key: 'isEdit',
    type: 'isEdit',
    label: 'Acción',
  },
  {
    key: 'OC',
    type: 'textItem',
    label: 'GUIA',
    required: true,
    readonly:false,
    disabled: false
  },
  
  {
    key: 'ELEMENTO_DESC',
    type: 'textItem',
    label: 'ELEMENTO_DESC',
    required: true,
    readonly: true,
    disabled: false
  },  
  {
    key: 'GUIA',
    type: 'textItem',
    label: 'GUIA',
    required: true,
    readonly: false,
    disabled: false
  },
  {
    key: 'GUIA_PROVEEDOR',
    type: 'textItem',
    label: 'GUIA_PROVEEDOR',
    required: true,
    readonly:true,
    disabled: true
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
    key: 'INGRESOS',
    type: 'number',
    label: 'INGRESOS',
    required: true,
    readonly:false,
    disabled: false
  },
  {
    key: 'CANT_DESPACHOS',
    type: 'number',
    label: 'DESPACHA DOS',
    required: true,
    readonly:true,
    disabled: true
  },
  {
    key: 'STOCK',
    type: 'number',
    label: 'STOCK',
    required: true,
    readonly:true,
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
    readonly: true,
    disabled: false,
    seloption: [
      {value: 1, viewValue: 'Remanso'},
    ]
  },
  {
    key: 'RECEPCIONADO',
    type: 'text',
    label: 'RECEPCIONADO',
    required: true,
    readonly: true,
    disabled: false,
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
