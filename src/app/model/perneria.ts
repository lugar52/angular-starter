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
     isEdit: boolean;
     isSelected: boolean;
}

export const UserColumns = [
  {
    key: 'isSelected',
    type: 'isSelected',
    label: '',
  },
  {
    key: 'firstName',
    type: 'text',
    label: 'First Name',
    required: true,
  },
  {
    key: 'lastName',
    type: 'text',
    label: 'Last Name',
  },
  {
    key: 'email',
    type: 'email',
    label: 'Email',
    required: true,
    pattern: '.+@.+',
  },
  {
    key: 'birthDate',
    type: 'date',
    label: 'Date of Birth',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];
