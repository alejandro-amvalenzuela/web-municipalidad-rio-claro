export interface Permiso {
  id: string;
  patente: string;
  municipalidad: string;
  anio: number;
  monto: number;
  vigencia: string;
  estado: 'pendiente' | 'pagado' | 'vencido';
}
