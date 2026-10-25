import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { LocalStorageService } from '../../services/local-storage';
import { Pago } from '../../models/pago';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-historial',
  imports: [Header, Footer, CommonModule, RouterLink],
  templateUrl: './historial.html',
  styleUrl: './historial.css'
})
export class Historial implements OnInit {

  pagos: Pago[] = [];
  mensajeReinicio: string = '';

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit() {
    this.cargarPagos();
  }

  cargarPagos() {
    this.pagos = this.localStorage.obtenerPagos();
  }

  reiniciarDatos() {
    if (confirm('¿Deseas reiniciar todos los datos de prueba a su estado inicial? Esto restaurará permisos, vehículos y limpiará pagos.')) {
      this.localStorage.reiniciarDatosDePrueba();
      this.cargarPagos();
      this.mensajeReinicio = '¡Datos de prueba reiniciados con éxito a su estado original!';
      setTimeout(() => {
        this.mensajeReinicio = '';
      }, 4000);
    }
  }
}

