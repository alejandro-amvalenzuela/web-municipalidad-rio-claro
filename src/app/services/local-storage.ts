import { Injectable } from '@angular/core';
import { Vehiculo } from '../models/vehiculo';
import { Permiso } from '../models/permiso';
import { Pago } from '../models/pago';
import { VEHICULOS, PERMISOS } from '../data/datos-iniciales';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private readonly KEY_VEHICULOS = 'vehiculos';
  private readonly KEY_PERMISOS = 'permisos';
  private readonly KEY_PAGOS = 'pagos';

  constructor() {
    this.inicializarDatos();
  }
// Inicializacion //
  private inicializarDatos(): void {
    if (!localStorage.getItem(this.KEY_VEHICULOS)) {
      localStorage.setItem(this.KEY_VEHICULOS, JSON.stringify(VEHICULOS));
    }
    if (!localStorage.getItem(this.KEY_PERMISOS)) {
      localStorage.setItem(this.KEY_PERMISOS, JSON.stringify(PERMISOS));
    }
    if (!localStorage.getItem(this.KEY_PAGOS)) {
      localStorage.setItem(this.KEY_PAGOS, JSON.stringify([]));
    }
  }
// vehiculos //
  obtenerVehiculos(): Vehiculo[] {
    const data = localStorage.getItem(this.KEY_VEHICULOS);
    return data ? JSON.parse(data) : [];
  }

  obtenerVehiculoPorPatente(patente: string): Vehiculo | undefined {
    return this.obtenerVehiculos().find(
      v => v.patente.toUpperCase() === patente.toUpperCase()
    );
  }

  // permisos //
  obtenerPermisos(): Permiso[] {
    const data = localStorage.getItem(this.KEY_PERMISOS);
    return data ? JSON.parse(data) : [];
  }

  buscarPermisoPorPatente(patente: string): Permiso | undefined {
    return this.obtenerPermisos().find(
      p => p.patente.toUpperCase() === patente.toUpperCase()
    );
  }

  obtenerPermisoPorId(id: string): Permiso | undefined {
    return this.obtenerPermisos().find(p => p.id === id);
  }

  actualizarEstadoPermiso(id: string, nuevoEstado: 'pendiente' | 'pagado' | 'vencido'): void {
    const permisos = this.obtenerPermisos();
    const index = permisos.findIndex(p => p.id === id);

    if (index !== -1) {
      permisos[index].estado = nuevoEstado;
      localStorage.setItem(this.KEY_PERMISOS, JSON.stringify(permisos));
    }
  }
// pagos //
  obtenerPagos(): Pago[] {
    const data = localStorage.getItem(this.KEY_PAGOS);
    return data ? JSON.parse(data) : [];
  }

  guardarPago(pago: Pago): void {
    const pagos = this.obtenerPagos();
    pagos.push(pago);
    localStorage.setItem(this.KEY_PAGOS, JSON.stringify(pagos));
  }

  obtenerPagoPorId(id: string): Pago | undefined {
    return this.obtenerPagos().find(p => p.id === id);
  }
  // utilidades //
  generarIdPago(): string {
    return 'PAGO-' + Date.now().toString();
  }

  // Reinicia los datos de prueba a su estado original (requerido para evaluación docente)
  reiniciarDatosDePrueba(): void {
    localStorage.removeItem(this.KEY_VEHICULOS);
    localStorage.removeItem(this.KEY_PERMISOS);
    localStorage.removeItem(this.KEY_PAGOS);
    this.inicializarDatos();
  }

  // Alias para desarrollo/pruebas
  limpiarDatos(): void {
    this.reiniciarDatosDePrueba();
  }
}

