import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { LocalStorageService } from '../../services/local-storage';
import { Permiso } from '../../models/permiso';
import { Vehiculo } from '../../models/vehiculo';
import { Pago as PagoModel } from '../../models/pago';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pago',
  imports: [Header, Footer, CommonModule, FormsModule],
  templateUrl: './pago.html',
  styleUrl: './pago.css'
})
export class Pago implements OnInit {

  permiso: Permiso | undefined;
  vehiculo: Vehiculo | undefined;
  mensajeError: string = '';
  confirmado: boolean = false;
  procesando: boolean = false;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.mensajeError = 'Permiso no válido.';
      return;
    }

    this.permiso = this.localStorage.obtenerPermisoPorId(id);

    if (!this.permiso) {
      this.mensajeError = 'No se encontró el permiso.';
      return;
    }

    if (this.permiso.estado !== 'pendiente') {
      this.mensajeError = 'Este permiso no se puede pagar (ya está pagado o vencido).';
      return;
    }

    this.vehiculo = this.localStorage.obtenerVehiculoPorPatente(this.permiso.patente);
  }

  confirmarPago() {
    if (!this.permiso || this.procesando) return;

    this.procesando = true;

    // Simulación de conexión y procesamiento con la pasarela bancaria (1.8 segundos)
    setTimeout(() => {
      if (!this.permiso) return;

      // Crear el pago
      const nuevoPago: PagoModel = {
        id: this.localStorage.generarIdPago(),
        fecha: new Date().toLocaleString('es-CL'),
        patente: this.permiso.patente,
        municipalidad: this.permiso.municipalidad,
        monto: this.permiso.monto,
        estado: 'pagado'
      };

      // Guardar el pago
      this.localStorage.guardarPago(nuevoPago);

      // Actualizar el estado del permiso
      this.localStorage.actualizarEstadoPermiso(this.permiso.id, 'pagado');

      this.procesando = false;

      // Ir al comprobante
      this.router.navigate(['/comprobante', nuevoPago.id]);
    }, 1800);
  }
}
