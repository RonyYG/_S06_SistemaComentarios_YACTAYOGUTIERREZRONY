import { Component, signal } from '@angular/core';
import { ComentariosComponent } from './components/comentarios/comentarios'; // 👈 Fíjate que la ruta coincida con tu carpeta

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComentariosComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sistema-comentarios');
}