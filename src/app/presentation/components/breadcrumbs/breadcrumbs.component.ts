import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

interface Breadcrumb {
  label: string;
  path: string;
}

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './breadcrumbs.component.html',
  styleUrl: './breadcrumbs.component.css'
})
export class BreadcrumbsComponent implements OnInit{
  // breadcrumbs: Breadcrumb[] = [];

  // constructor(private router: Router) {}

  // ngOnInit() {
  //   this.router.events.pipe(
  //     filter(event => event instanceof NavigationEnd)
  //   ).subscribe(() => {
  //     this.breadcrumbs = this.createBreadcrumbs();
  //   });
  // }

  // private createBreadcrumbs(): Breadcrumb[] {
  //   const paths = this.router.url.split('/').filter(path => path);
  //   const breadcrumbs: Breadcrumb[] = [];
  //   let url = '';

  //   breadcrumbs.push({ label: 'Inicio', path: '/' });

  //   paths.forEach(path => {
  //     url += `/${path}`;
  //     const label = this.formatLabel(path);
  //     breadcrumbs.push({ label, path: url });
  //   });

  //   return breadcrumbs;
  // }

  // private formatLabel(path: string): string {
  //   // Convert route path to display name
  //   switch(path) {
  //     case 'simplex': return 'Método Simplex';
  //     case 'saw': return 'Método SAW';
  //     case 'data-mining': return 'Minería de Datos';
  //     case 'perceptron': return 'Perceptrón Simple';
  //     default: return path;
  //   }
  // }
  breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.breadcrumbs = this.createBreadcrumbs();
    });
  }

  ngOnInit() {
    // Initialize breadcrumbs on component load
    this.breadcrumbs = this.createBreadcrumbs();
  }

  private createBreadcrumbs(): Breadcrumb[] {
    const paths = this.router.url.split('/').filter(path => path);
    const breadcrumbs: Breadcrumb[] = [];
    let url = '';

    // Always add home
    breadcrumbs.push({ label: 'Inicio', path: '/' });

    // Add remaining path segments
    paths.forEach(path => {
      url += `/${path}`;
      const label = this.formatLabel(path);
      breadcrumbs.push({ label, path: url });
    });

    return breadcrumbs;
  }

    private formatLabel(path: string): string {
    // Convert route path to display name
    switch(path) {
      case 'simplex': return 'Método Simplex';
      case 'saw': return 'Método SAW';
      case 'data-mining': return 'Minería de Datos';
      case 'perceptron': return 'Perceptrón Simple';
      default: return path;
    }
  }
}
