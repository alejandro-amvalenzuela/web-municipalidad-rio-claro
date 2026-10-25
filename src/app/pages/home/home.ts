import { Component, signal, OnDestroy, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from '@angular/router';

interface Slide {
  imagen: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-home',
  imports: [Header, Footer, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {
  slides: Slide[] = [
    {
      imagen: 'assets/hero1.png',
      titulo: 'Fondo Concursable Capital Río Claro Emprende 2026',
      descripcion: 'Postulaciones abiertas para el fomento del emprendimiento y desarrollo local.'
    },
    {
      imagen: 'assets/hero2.png',
      titulo: 'Bases Remate Público Fiestas Patrias 2026',
      descripcion: 'Conoce las bases y requisitos para participar en el remate público municipal.'
    },
    {
      imagen: 'assets/banner.jpg',
      titulo: 'Bases Puestos Artesanales y Juegos Inflables Fiestas Patrias 2026',
      descripcion: 'Información y normativas para instalación de puestos artesanales y entretenciones.'
    },
    {
      imagen: 'assets/add.png',
      titulo: 'Remate de Pisos para Fiestas Patrias 2026',
      descripcion: 'Bases e información oficial para la adjudicación de pisos en las celebraciones patrias.'
    }
  ];

  slideActual = signal(0);
  private intervaloTimer: any;

  // Estado del modal de información rápida
  modalAbierto = signal(false);
  modalTitulo = signal('');
  modalTexto = signal('');

  ngOnInit() {
    this.iniciarAutoplay();
  }

  ngOnDestroy() {
    if (this.intervaloTimer) {
      clearInterval(this.intervaloTimer);
    }
  }

  iniciarAutoplay() {
    this.intervaloTimer = setInterval(() => {
      this.siguienteSlide();
    }, 7000);
  }

  siguienteSlide() {
    this.slideActual.update(curr => (curr + 1) % this.slides.length);
  }

  anteriorSlide() {
    this.slideActual.update(curr => (curr - 1 + this.slides.length) % this.slides.length);
  }

  irASlide(index: number) {
    this.slideActual.set(index);
  }

  abrirModal(titulo: string, texto: string) {
    this.modalTitulo.set(titulo);
    this.modalTexto.set(texto);
    this.modalAbierto.set(true);
  }

  cerrarModal() {
    this.modalAbierto.set(false);
  }
}
