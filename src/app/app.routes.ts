import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Busqueda } from './pages/busqueda/busqueda';
import { DetallePermiso } from './pages/detalle-permiso/detalle-permiso';
import { Pago } from './pages/pago/pago';
import { Comprobante } from './pages/comprobante/comprobante';
import { Historial } from './pages/historial/historial';
import { Alcaldia } from './pages/alcaldia/alcaldia';
import { Consejo } from './pages/consejo/consejo';
import { Denuncias } from './pages/denuncias/denuncias';
import { Concursos } from './pages/concursos/concursos';
import { Pagos } from './pages/pagos/pagos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'alcaldia', component: Alcaldia },
  { path: 'consejo', component: Consejo },
  { path: 'denuncias', component: Denuncias },
  { path: 'concursos', component: Concursos },
  { path: 'pagos', component: Pagos },
  { path: 'busqueda', component: Busqueda },
  { path: 'detalle/:patente', component: DetallePermiso },
  { path: 'pago/:id', component: Pago },
  { path: 'comprobante/:id', component: Comprobante },
  { path: 'historial', component: Historial },
  { path: '**', redirectTo: '' }
];
