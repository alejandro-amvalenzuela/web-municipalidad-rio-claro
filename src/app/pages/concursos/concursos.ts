import { Component, signal, computed } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from '@angular/router';

interface Concurso {
  id: string;
  titulo: string;
  descripcion: string;
  estado: 'vigente' | 'resuelto';
  fechaCierre: string;
  detalleBases: string;
}

@Component({
  selector: 'app-concursos',
  imports: [Header, Footer, RouterLink],
  templateUrl: './concursos.html',
  styleUrl: './concursos.css'
})
export class Concursos {
  filtroActual = signal<'todos' | 'vigente' | 'resuelto'>('todos');

  // Modal para ver bases
  modalAbierto = signal(false);
  concursoSeleccionado = signal<Concurso | null>(null);

  concursos: Concurso[] = [
    {
      id: 'C01',
      titulo: 'Jefatura Tesorería Municipal',
      descripcion: 'Concurso público de antecedentes para proveer el cargo de Jefatura de Tesorería Municipal.',
      estado: 'vigente',
      fechaCierre: '15 de Noviembre de 2026',
      detalleBases: 'Requisitos: Título profesional de Contador Auditor, Ingeniero Comercial o afín. Experiencia mínima de 3 años en administración pública o municipal. Recepción de antecedentes en Oficina de Partes o correo gestionpersonas@rioclaro.cl.'
    },
    {
      id: 'C02',
      titulo: 'Director CESFAM Río Claro',
      descripcion: 'Llamado a concurso público de antecedentes para Director del Centro de Salud Familiar.',
      estado: 'resuelto',
      fechaCierre: '01 de Octubre de 2026',
      detalleBases: 'Proceso culminado satisfactoriamente. Se adjudica el cargo al profesional correspondiente tras cumplir todas las etapas de evaluación curricular, entrevista y comisión de selección de salud.'
    },
    {
      id: 'C03',
      titulo: 'Base Grado 17° Auxiliar de Servicios',
      descripcion: 'Concurso público para cargo de Auxiliar de Servicios Generales en recintos municipales.',
      estado: 'vigente',
      fechaCierre: '20 de Noviembre de 2026',
      detalleBases: 'Requisitos: Licencia de Enseñanza Media completa, disponibilidad inmediata para turnos y mantención de dependencias municipales. Consultas en Dirección de Administración y Finanzas.'
    },
    {
      id: 'C04',
      titulo: 'Asistente de Cuidados - Red Local',
      descripcion: 'Programa Red Local de Apoyos y Cuidados comunitarios en convenio con Ministerio de Desarrollo Social.',
      estado: 'resuelto',
      fechaCierre: '15 de Septiembre de 2026',
      detalleBases: 'Concurso resuelto y postulantes seleccionados notificados para inicio de labores en apoyo a familias y personas en situación de dependencia moderada o severa en Río Claro.'
    },
    {
      id: 'C05',
      titulo: 'Encargado(a) Programa Fomento Productivo y OMIL',
      descripcion: 'Profesional para intermediación laboral, ferias de emprendimiento y fondos concursables.',
      estado: 'vigente',
      fechaCierre: '30 de Noviembre de 2026',
      detalleBases: 'Requisitos: Título profesional del área social o ingeniería, deseable experiencia en gestión de proyectos SENCE, FOSIS y SERCOTEC. Postulaciones en DIDECO Río Claro.'
    }
  ];

  concursosFiltrados = computed(() => {
    const filtro = this.filtroActual();
    if (filtro === 'todos') {
      return this.concursos;
    }
    return this.concursos.filter(c => c.estado === filtro);
  });

  cambiarFiltro(nuevoFiltro: 'todos' | 'vigente' | 'resuelto') {
    this.filtroActual.set(nuevoFiltro);
  }

  verBases(concurso: Concurso) {
    this.concursoSeleccionado.set(concurso);
    this.modalAbierto.set(true);
  }

  cerrarModal() {
    this.modalAbierto.set(false);
    this.concursoSeleccionado.set(null);
  }
}
