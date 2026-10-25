import { Vehiculo } from '../models/vehiculo';
import { Permiso } from '../models/permiso';

export const VEHICULOS : Vehiculo[] = [
  {
    patente: 'ABDC12',
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2019,
    color: 'Blanco',
    propietario: 'Juan Perez'
  },
  {
    patente: 'ABC45',
    marca: 'Nissan ',
    modelo: 'Skyline',
    anio: 1957,
    color: 'Azul',
    propietario: 'Benjamin Reyes'
  },
  {
    patente: 'CDRF45',
    marca: 'Hyundai',
    modelo: 'Accent',
    anio: 2020,
    color: 'Gris',
    propietario: 'Vozinha'
  },
  {
    patente: 'DRK234',
    marca: 'Chevrolet',
    modelo: 'Silverano',
    anio: 2024,
    color: 'Rojo',
    propietario: 'Alejandro'
  },
  {
    patente: 'FTOE45',
    marca: 'Toyota',
    modelo: 'RAV4',
    anio: 2019,
    color: 'Gris',
    propietario: 'Joaquin'
  },
  {
    patente: 'FT9T43',
    marca: 'Honda',
    modelo: 'CE-V',
    anio: 2022,
    color: 'Negro',
    propietario: 'Pablo'
  },
  {
    patente: 'INC001',
    marca: 'Kia',
    modelo: 'Morning',
    anio: 2021,
    color: 'Rojo',
    propietario: 'Registro Incompleto S/P'
  }
];


export const PERMISOS: Permiso[] = [
  {
    id: 'P001',
    patente: 'ABDC12',
    municipalidad:'Municipalidad de Rio Claro',
    anio: 2025,
    monto: 34000,
    vigencia: '31/02/2026',
    estado: 'pagado'
  },
  {
    id: 'P002',
    patente: 'ABC45',
    municipalidad:'Municipalidad de Rio Claro',
    anio: 2024,
    monto: 250000,
    vigencia: '31/02/2025',
    estado: 'vencido'
  },
  {
    id: 'P003',
    patente: 'CDRF45',
    municipalidad:'Municipalidad de Rio Claro',
    anio: 2026,
    monto: 1000000,
    vigencia: '31/02/2027',
    estado: 'pendiente'
  },
  {
    id: 'P004',
    patente: 'DRK234',
    municipalidad:'Municipalidad de Rio Claro',
    anio: 2026,
    monto: 10400,
    vigencia: '03/06/2027',
    estado: 'pendiente'
  },
  {
    id: 'P005',
    patente: 'FTOE45',
    municipalidad:'Municipalidad de Rio Claro',
    anio: 2026,
    monto: 503333,
    vigencia: '06/02/2026',
    estado: 'pagado'
  },
  {
    id: 'P006',
    patente: 'FT9T43',
    municipalidad:'Municipalidad de Rio Claro',
    anio: 2026,
    monto: 45000,
    vigencia: '20/08/2027',
    estado: 'pendiente'
  },
];
