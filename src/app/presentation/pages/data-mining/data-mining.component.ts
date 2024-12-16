import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface PassengerData {
  ticketClass: number;
  sex: string;
  age: number;
  siblingsSpouses: number;
  parentsChildren: number;
}

@Component({
  selector: 'app-data-mining',
  standalone: true,
  imports: [BreadcrumbsComponent, FormsModule, CommonModule],
  templateUrl: './data-mining.component.html',
  styleUrl: './data-mining.component.css'
})
export class DataMiningComponent {
  // passengerData: PassengerData = {
  //   ticketClass: 1,
  //   sex: 'M',
  //   age: null,
  //   siblingsSpouses: 0,
  //   parentsChildren: 0
  // };

  // survivalProbability: number = null;
  // classAverage: number = null;
  // genderAverage: number = null;
  // ageGroupAverage: number = null;

  // predictSurvival() {
  //   // Aquí iría la lógica de predicción
  //   // Por ahora solo simularemos valores
  //   this.survivalProbability = 75;
  //   this.classAverage = 62;
  //   this.genderAverage = 74;
  //   this.ageGroupAverage = 68;
  // }

  showResults = false;
  isLoading = false;
  passengerData: PassengerData = {
    ticketClass: 1,
    sex: 'M',
    age: 10,
    siblingsSpouses: 0,
    parentsChildren: 0
  };

  survivalProbability: number = 0;
  classAverage: number = 0;
  genderAverage: number = 0;
  ageGroupAverage: number = 0;

  predictSurvival() {
    this.isLoading = true;
    // Simulate API call
    setTimeout(() => {
      this.survivalProbability = 75;
      this.classAverage = 62;
      this.genderAverage = 74;
      this.ageGroupAverage = 68;
      this.showResults = true;
      this.isLoading = false;
    }, 1000);
  }

}
