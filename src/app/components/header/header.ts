import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuAbierto = signal(false);
  modalAbierto = signal(false);
  modalTitle = signal('Información Institucional');
  modalText = signal('Municipalidad de Río Claro');

  toggleMenu() {
    this.menuAbierto.update(v => !v);
  }

  abrirInfo(titulo: string, texto: string, event?: Event) {
    if (event) event.preventDefault();
    this.modalTitle.set(titulo);
    this.modalText.set(texto);
    this.modalAbierto.set(true);
  }

  cerrarModal() {
    this.modalAbierto.set(false);
  }
}
