import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Variable {
  coefficient: string;
  name: string;
}

interface Constraint {
  variables: Variable[];
  inequality: string;
  rhs: string;
}

interface Objective {
  type: 'max' | 'min';
  variables: Variable[];
}


@Component({
  selector: 'app-simplex',
  standalone: true,
  imports: [BreadcrumbsComponent, FormsModule, CommonModule],
  templateUrl: './simplex.component.html',
  styleUrl: './simplex.component.css'
})
export class SimplexComponent {
  showResults = false;
  isLoading = false;

  selectedFile: File | null = null;

  inputMethod: 'manual' | 'file' = 'manual';

  setInputMethod(method: 'manual' | 'file') {
    this.inputMethod = method;
    this.showResults = false; // Ocultar resultados cuando se cambia el método de entrada
  }
  
  objective: Objective = {
    type: 'max',
    variables: [{ coefficient: '', name: 'x1' }]
  };

  constraints: Constraint[] = [{
    variables: [{ coefficient: '', name: 'x1' }],
    inequality: '<=',
    rhs: ''
  }];

  addVariable() {
    const newVar = {
      coefficient: '',
      name: `x${this.objective.variables.length + 1}`
    };
    
    this.objective.variables.push(newVar);
    
    this.constraints.forEach(constraint => {
      constraint.variables.push({ ...newVar });
    });
  }

  removeVariable(index: number) {
    if (this.objective.variables.length > 1) {
      // Remove from objective
      this.objective.variables.splice(index, 1);
      
      // Remove from all constraints
      this.constraints.forEach(constraint => {
        constraint.variables.splice(index, 1);
      });

      // Rename remaining variables
      this.objective.variables.forEach((variable, i) => {
        variable.name = `x${i + 1}`;
      });
      this.constraints.forEach(constraint => {
        constraint.variables.forEach((variable, i) => {
          variable.name = `x${i + 1}`;
        });
      });
    }
  }

  addConstraint() {
    this.constraints.push({
      variables: this.objective.variables.map(v => ({ coefficient: '', name: v.name })),
      inequality: '<=',
      rhs: ''
    });
  }

  removeConstraint(index: number) {
    if (this.constraints.length > 1) {
      this.constraints.splice(index, 1);
    }
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

onSolve() {
  this.isLoading = true;
  // Simulate API call
  setTimeout(() => {
    this.showResults = true;
    this.isLoading = false;
    console.log('Resolviendo simplex...', {
      objective: this.objective,
      constraints: this.constraints
    });
  }, 1000);
}
}
