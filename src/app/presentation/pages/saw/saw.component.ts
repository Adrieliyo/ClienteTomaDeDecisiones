import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';

interface Criterio {
  nombre: string;
  ponderacion: number;
  tipo: 'min' | 'max';
}

interface Alternativa {
  nombre: string;
  valores: { [key: string]: number };
}

interface Resultado {
  mejor_alternativa: string;
  puntaje: number;
  todos_puntajes: { [key: string]: number };
}

@Component({
  selector: 'app-saw',
  standalone: true,
  imports: [CommonModule, FormsModule, BreadcrumbsComponent],
  templateUrl: './saw.component.html',
  styleUrl: './saw.component.css'
})
export class SawComponent {
  criterios: Criterio[] = [
    { nombre: 'Precio', ponderacion: 0.4, tipo: 'min' },
    { nombre: 'Batería', ponderacion: 0.3, tipo: 'max' },
    { nombre: 'Generación', ponderacion: 0.3, tipo: 'max' }
  ];

  alternativas: Alternativa[] = [
    { nombre: 'Laptop A', valores: { 'Precio': 800, 'Batería': 6, 'Generación': 19 } },
    { nombre: 'Laptop B', valores: { 'Precio': 1200, 'Batería': 8, 'Generación': 21 } },
    { nombre: 'Laptop C', valores: { 'Precio': 950, 'Batería': 5, 'Generación': 11 } }
  ];

  resultado: Resultado | null = null;

  addCriterio() {
    this.criterios.push({ nombre: '', ponderacion: 0, tipo: 'max' });
  }

  addAlternativa() {
    const nuevaAlternativa: Alternativa = {
      nombre: '',
      valores: this.criterios.reduce((acc, criterio) => ({
        ...acc,
        [criterio.nombre]: 0
      }), {})
    };
    this.alternativas.push(nuevaAlternativa);
  }

  removeCriterio(index: number) {
    this.criterios.splice(index, 1);
  }

  removeAlternativa(index: number) {
    this.alternativas.splice(index, 1);
  }

  calcularSAW() {
    // Simulación del cálculo del método SAW
    this.resultado = {
      mejor_alternativa: "Laptop A",
      puntaje: 0.8977,
      todos_puntajes: {
        "Laptop A": 0.8977,
        "Laptop B": 0.8121,
        "Laptop C": 0.8243
      }
    };
  }

  trackByIndex(index: number): number {
    return index;
  }
}
