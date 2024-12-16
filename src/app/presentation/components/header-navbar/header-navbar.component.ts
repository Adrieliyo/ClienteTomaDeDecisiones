import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header-navbar.component.html',
  styleUrl: './header-navbar.component.css'
})
export class HeaderNavbarComponent {
  isMenuOpen = false;

  navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/simplex', label: 'Simplex' },
    { path: '/saw', label: 'SAW' },
    { path: '/data-mining', label: 'Minería de Datos' },
    { path: '/perceptron', label: 'Perceptrón Simple' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
