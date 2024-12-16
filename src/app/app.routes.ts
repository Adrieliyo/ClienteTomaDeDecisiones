import { Routes } from '@angular/router';

import { HomeComponent } from './presentation/pages/home/home.component';
import { SimplexComponent } from './presentation/pages/simplex/simplex.component';
import { SawComponent } from './presentation/pages/saw/saw.component';
import { DataMiningComponent } from './presentation/pages/data-mining/data-mining.component';
import { PerceptronComponent } from './presentation/pages/perceptron/perceptron.component';

export const routes: Routes = [

  // Home page
  {
    path: "", component: HomeComponent, title: "DSS - Home"
  },
  // Simplex page
  {
    path: "simplex", component: SimplexComponent, title: "DSS - Simplex"
  },
  // Simple Additive Weighting page
  {
    path: "saw", component: SawComponent, title: "DSS - SAW"
  },
  // Data Mining page
  {
    path: "data-mining", component: DataMiningComponent, title: "DSS - Data Mining"
  },
  {
    path: "perceptron", component: PerceptronComponent, title: "DSS - Perceptron"
  }

];
