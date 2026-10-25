import { Component, signal } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagos',
  imports: [Header, Footer, RouterLink],
  templateUrl: './pagos.html',
  styleUrl: './pagos.css'
})
export class Pagos {
  modalAbierto = signal(false);
  modalTitulo = signal('');
  modalTexto = signal('');

  abrirInfo(titulo: string, texto: string) {
    this.modalTitulo.set(titulo);
    this.modalTexto.set(texto);
    this.modalAbierto.set(true);
  }

  cerrarModal() {
    this.modalAbierto.set(false);
  }
}
