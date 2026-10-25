import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-denuncias',
  imports: [Header, Footer, RouterLink, FormsModule],
  templateUrl: './denuncias.html',
  styleUrl: './denuncias.css'
})
export class Denuncias {
  email = '';
  tipoDenuncia = '';
  nombre = '';
  rut = '';
  telefono = '';
  antecedentes = '';

  archivosSeleccionados: { name: string; size: string }[] = [];
  formularioEnviado = signal(false);
  errorTipo = signal(false);
  folioGenerado = signal('');

  onFilesSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      const files = Array.from(target.files);
      if (files.length > 10) {
        alert('Máximo 10 archivos permitidos.');
        target.value = '';
        this.archivosSeleccionados = [];
        return;
      }
      this.archivosSeleccionados = files.map(f => ({
        name: f.name,
        size: (f.size / (1024 * 1024)).toFixed(2) + ' MB'
      }));
    }
  }

  enviarDenuncia(form: any) {
    if (!this.tipoDenuncia) {
      this.errorTipo.set(true);
    } else {
      this.errorTipo.set(false);
    }

    if (!form.valid || !this.tipoDenuncia) {
      return;
    }

    const nuevoFolio = 'DEN-' + Math.floor(100000 + Math.random() * 900000);
    this.folioGenerado.set(nuevoFolio);
    this.formularioEnviado.set(true);

    // Guardado simulado en localStorage para persistencia
    const denunciasGuardadas = JSON.parse(localStorage.getItem('denuncias_municipales') || '[]');
    denunciasGuardadas.push({
      folio: nuevoFolio,
      fecha: new Date().toLocaleString(),
      email: this.email,
      tipo: this.tipoDenuncia,
      nombre: this.nombre,
      rut: this.rut,
      telefono: this.telefono,
      antecedentes: this.antecedentes,
      archivos: this.archivosSeleccionados.length
    });
    localStorage.setItem('denuncias_municipales', JSON.stringify(denunciasGuardadas));

    // Reset formulario
    this.email = '';
    this.tipoDenuncia = '';
    this.nombre = '';
    this.rut = '';
    this.telefono = '';
    this.antecedentes = '';
    this.archivosSeleccionados = [];
    form.resetForm();

    window.scrollTo({ top: 150, behavior: 'smooth' });
  }

  nuevaDenuncia() {
    this.formularioEnviado.set(false);
  }
}
