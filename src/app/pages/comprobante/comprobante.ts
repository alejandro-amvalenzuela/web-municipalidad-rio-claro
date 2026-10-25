import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { LocalStorageService } from '../../services/local-storage';
import { Pago } from '../../models/pago';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-comprobante',
  imports: [Header, Footer, CommonModule, RouterLink],
  templateUrl: './comprobante.html',
  styleUrl: './comprobante.css'
})
export class Comprobante implements OnInit {

  pago: Pago | undefined;
  mensajeError: string = '';

  constructor(
    private route: ActivatedRoute,
    private localStorage: LocalStorageService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.mensajeError = 'Comprobante no válido.';
      return;
    }

    this.pago = this.localStorage.obtenerPagoPorId(id);

    if (!this.pago) {
      this.mensajeError = 'No se encontró el comprobante.';
    }
  }

  descargarPDF() {
    if (!this.pago) return;

    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pago = this.pago;

    // Encabezado institucional azul (#004D79)
    doc.setFillColor(0, 77, 121);
    doc.rect(0, 0, 210, 42, 'F');

    // Franja decorativa naranja (#EA9838)
    doc.setFillColor(234, 152, 56);
    doc.rect(0, 42, 210, 4, 'F');

    // Texto de cabecera
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('ILUSTRE MUNICIPALIDAD DE RÍO CLARO', 105, 18, { align: 'center' });

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('DIRECCIÓN DE TRÁNSITO Y TRANSPORTE PÚBLICO', 105, 26, { align: 'center' });

    doc.setFontSize(10);
    doc.text('COMPROBANTE DE PAGO ELECTRÓNICO - PERMISO DE CIRCULACIÓN', 105, 34, { align: 'center' });

    // Cuadro contenedor del comprobante
    doc.setDrawColor(210, 215, 220);
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(15, 56, 180, 150, 4, 4, 'FD');

    // Título interno
    doc.setTextColor(0, 77, 121);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('DETALLE DE LA TRANSACCIÓN', 25, 70);

    doc.setDrawColor(234, 152, 56);
    doc.setLineWidth(0.8);
    doc.line(25, 73, 185, 73);

    // Campos de datos
    doc.setFontSize(11);
    doc.setTextColor(100, 100, 100);
    doc.setFont('helvetica', 'normal');

    // Folio
    doc.text('N° de Comprobante / Folio:', 25, 86);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 77, 121);
    doc.text(pago.id, 95, 86);

    // Fecha
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text('Fecha y Hora de Emisión:', 25, 98);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(40, 40, 40);
    doc.text(pago.fecha, 95, 98);

    // Patente
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text('Placa Patente Única:', 25, 110);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 77, 121);
    doc.text(pago.patente, 95, 110);

    // Municipalidad
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text('Municipalidad Emisora:', 25, 122);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(40, 40, 40);
    doc.text(pago.municipalidad, 95, 122);

    // Estado
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text('Estado de Pago:', 25, 134);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(40, 167, 69);
    doc.text('PAGADO / APROBADO', 95, 134);

    // Recuadro Total Cancelado
    doc.setFillColor(244, 246, 248);
    doc.setDrawColor(200, 205, 210);
    doc.setLineWidth(0.4);
    doc.roundedRect(25, 146, 160, 22, 3, 3, 'FD');

    doc.setFontSize(12);
    doc.setTextColor(0, 77, 121);
    doc.setFont('helvetica', 'bold');
    doc.text('Monto Total Cancelado:', 32, 160);

    const montoFormateado = '$' + Number(pago.monto).toLocaleString('es-CL') + ' CLP';
    doc.setFontSize(15);
    doc.setTextColor(40, 167, 69);
    doc.text(montoFormateado, 175, 160, { align: 'right' });

    // Timbre Digital Electrónico
    doc.setDrawColor(180, 185, 190);
    doc.setLineDashPattern([2, 2], 0);
    doc.setFillColor(250, 252, 255);
    doc.roundedRect(25, 176, 160, 22, 2, 2, 'FD');
    doc.setLineDashPattern([], 0);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 77, 121);
    doc.text('TESORERÍA MUNICIPAL DE RÍO CLARO - TIMBRE ELECTRÓNICO', 105, 185, { align: 'center' });

    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(120, 120, 120);
    doc.text('Documento oficial timbrado digitalmente conforme a la Ley de Rentas Municipales N° 3.063.', 105, 192, { align: 'center' });

    // Pie de página
    doc.setFontSize(8.5);
    doc.setTextColor(140, 140, 140);
    doc.text('Municipalidad de Río Claro - Cumpeo, Región del Maule | Fono: (56) 44 216 0224', 105, 280, { align: 'center' });

    // Descarga directa del archivo PDF
    doc.save(`Comprobante-Permiso-${pago.patente}-${pago.id}.pdf`);
  }
}

