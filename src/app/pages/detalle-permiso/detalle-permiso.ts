import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { LocalStorageService } from '../../services/local-storage';
import { Permiso } from '../../models/permiso';
import { Vehiculo } from '../../models/vehiculo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-permiso',
  imports: [Header, Footer, CommonModule, RouterLink],
  templateUrl: './detalle-permiso.html',
  styleUrl: './detalle-permiso.css'
})
export class DetallePermiso implements OnInit {

  permiso: Permiso | undefined;
  vehiculo: Vehiculo | undefined;
  mensaje: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit() {
    const patente = this.route.snapshot.paramMap.get('patente');

    if (!patente) {
      this.mensaje = 'Patente no válida.';
      return;
    }

    this.permiso = this.localStorage.buscarPermisoPorPatente(patente);
    this.vehiculo = this.localStorage.obtenerVehiculoPorPatente(patente);

    if (!this.permiso) {
      this.mensaje = 'No se encontró el permiso.';
    }
  }

  irAPagar() {
    if (this.permiso) {
      this.router.navigate(['/pago', this.permiso.id]);
    }
  }
}
