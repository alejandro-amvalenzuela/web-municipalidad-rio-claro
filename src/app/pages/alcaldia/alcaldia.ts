import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { RouterLink } from '@angular/router';

interface Funcionario {
  iniciales: string;
  cargo: string;
  nombre: string;
  telefono: string;
  email: string;
  lugar: string;
  descripcion: string;
}

@Component({
  selector: 'app-alcaldia',
  imports: [Header, Footer, RouterLink],
  templateUrl: './alcaldia.html',
  styleUrl: './alcaldia.css'
})
export class Alcaldia {
  equipo: Funcionario[] = [
    {
      iniciales: 'BR',
      cargo: 'ADMINISTRADOR MUNICIPAL',
      nombre: 'Brian Robinson Pavez',
      telefono: '442160224',
      email: 'brobinson@rioclaro.cl',
      lugar: 'Edificio Municipal',
      descripcion: 'Asesora al alcalde en la gestión permanente de la municipalidad, ejerce la coordinación interna y la ejecución del plan anual. Es el segundo cargo en jerarquía y ejerce la función de alcalde subrogante.'
    },
    {
      iniciales: 'DZ',
      cargo: 'SECRETARIO MUNICIPAL',
      nombre: 'Daniel Zamorano Araya',
      telefono: '442160224 anexo 1300',
      email: 'dzamorano@rioclaro.cl',
      lugar: 'Edificio Municipal',
      descripcion: 'Dirige las actividades de secretaría administrativa del alcalde y el concejo, se desempeña como ministro de fe en las actuaciones municipales y lleva el registro de juntas de vecinos.'
    },
    {
      iniciales: 'RL',
      cargo: 'JEFE DE GABINETE',
      nombre: 'Ricardo Loyola Marabolí',
      telefono: '442160224 anexo 602',
      email: 'gabinete@rioclaro.cl',
      lugar: 'Edificio Municipal',
      descripcion: 'Apoya el desarrollo de las actividades administrativas, municipales y protocolares del alcalde, y procura dar oportuna respuesta a las presentaciones y reclamos de la comunidad.'
    },
    {
      iniciales: 'MJ',
      cargo: 'DIRECCIÓN JURÍDICA',
      nombre: 'Mauricio Jara Valenzuela',
      telefono: '442160224 anexo 1400',
      email: 'asesoriajuridica@rioclaro.cl',
      lugar: 'Edificio Municipal',
      descripcion: 'Presta apoyo legal y orientación jurídica al Alcalde y las distintas unidades municipales, velando por la estricta legalidad de los actos administrativos.'
    }
  ];
}
