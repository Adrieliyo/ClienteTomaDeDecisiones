import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNavbarComponent } from './presentation/components/header-navbar/header-navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ClienteProyectoDSS';
}
