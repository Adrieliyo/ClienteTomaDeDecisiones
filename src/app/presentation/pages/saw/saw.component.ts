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
  showResults = false;
  isLoading = false;
  resultado: Resultado | null = null;
  inputMethod: 'manual' | 'file' = 'manual';

  selectedFile: File | null = null;

  setInputMethod(method: 'manual' | 'file') {
    this.inputMethod = method;
    this.showResults = false; // Ocultar resultados cuando se cambia el método de entrada
  }

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
  
  resetResults() {
    this.showResults = false;
    this.isLoading = false;
    this.resultado = null;
  }


  calcularSAW() {
    this.isLoading = true;
    // Simulate API call
    setTimeout(() => {
      this.resultado = {
        mejor_alternativa: "Laptop A",
        puntaje: 0.8977,
        todos_puntajes: {
          "Laptop A": 0.8977,
          "Laptop B": 0.8121,
          "Laptop C": 0.8243
        }
      };
      this.showResults = true;
      this.isLoading = false;
    }, 1000);
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file && file.type === 'text/csv') {
        this.selectedFile = file;
        this.readCSVFile(file);
    } else {
        alert('Por favor, seleccione un archivo CSV válido');
    }
  }

  private readCSVFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
        const text = e.target?.result as string;
        // TODO: Process CSV data
        console.log('CSV Content:', text);
    };
    reader.readAsText(file);
  }

  trackByIndex(index: number): number {
    return index;
  }
}
