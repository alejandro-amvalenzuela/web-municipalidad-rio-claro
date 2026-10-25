import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { LocalStorageService } from '../../services/local-storage';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-busqueda',
  imports: [Header, Footer, FormsModule, CommonModule],
  templateUrl: './busqueda.html',
  styleUrl: './busqueda.css'
})
export class Busqueda {

  patente: string = '';
  mensajeError: string = '';

  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  buscar() {
    this.mensajeError = '';

    const cleanPatente = this.patente ? this.patente.trim().toUpperCase() : '';

    if (!cleanPatente) {
      this.mensajeError = 'Debes ingresar una placa patente para realizar la consulta.';
      return;
    }

    // Validación de formato básico de patente chilena (ej: ABCD12 o ABC12 o AB1234)
    if (cleanPatente.length < 5 || cleanPatente.length > 6) {
      this.mensajeError = 'Formato de patente no válido. Debe tener entre 5 y 6 caracteres alfanuméricos.';
      return;
    }

    const permiso = this.localStorage.buscarPermisoPorPatente(cleanPatente);
    const vehiculo = this.localStorage.obtenerVehiculoPorPatente(cleanPatente);

    if (!permiso && !vehiculo) {
      this.mensajeError = `No se encontró ningún registro ni permiso asociado a la patente "${cleanPatente}".`;
      return;
    }

    if (!permiso || !vehiculo) {
      this.mensajeError = `La patente "${cleanPatente}" tiene antecedentes o datos incompletos en el registro vehicular municipal.`;
      return;
    }

    // Si existe y los datos están completos, vamos a la página de detalle
    this.router.navigate(['/detalle', cleanPatente]);
  }
}
