import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from '@angular/router';

interface Concejal {
  nombre: string;
  partido: string;
  cargo: string;
  foto: string;
  email: string;
}

@Component({
  selector: 'app-consejo',
  imports: [Header, Footer, RouterLink],
  templateUrl: './consejo.html',
  styleUrl: './consejo.css'
})
export class Consejo {
  concejales: Concejal[] = [
    {
      nombre: 'Mauricio Montecino',
      partido: 'PRSD',
      cargo: 'CONCEJAL',
      foto: 'assets/MAURICIO_MONTECINOS.jpg',
      email: 'mmontecino@rioclaro.cl'
    },
    {
      nombre: 'Roberto Rojas',
      partido: 'RN',
      cargo: 'CONCEJAL',
      foto: 'assets/ROBERTO_ROJAS.jpg',
      email: 'robertorojas@rioclaro.cl'
    },
    {
      nombre: 'Joaquín Poblete',
      partido: 'RN',
      cargo: 'CONCEJAL',
      foto: 'assets/JOAQUIN_POBLETE.jpg',
      email: 'joaquinpoblete@rioclaro.cl'
    },
    {
      nombre: 'Jorge Mora',
      partido: 'UDI',
      cargo: 'CONCEJAL',
      foto: 'assets/JORGE_MORA.jpg',
      email: 'jorgemora@rioclaro.cl'
    },
    {
      nombre: 'Eduardo Muñoz',
      partido: 'IND',
      cargo: 'CONCEJAL',
      foto: 'assets/EDUARDO_MUNOZ.jpg',
      email: 'eduardomunoz@rioclaro.cl'
    },
    {
      nombre: 'Néstor Vergara',
      partido: 'PDC',
      cargo: 'CONCEJAL',
      foto: 'assets/NESTOR_VERGARA.jpg',
      email: 'nvergara@rioclaro.cl'
    }
  ];
}
