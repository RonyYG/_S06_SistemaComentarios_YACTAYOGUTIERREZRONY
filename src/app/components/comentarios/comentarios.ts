import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './comentarios.html',
  styleUrl: './comentarios.css'
})
export class ComentariosComponent implements OnInit {
  comentarios: any[] = [];
  miForm: FormGroup;
  confirmacion: string = '';

  constructor(private api: ApiService, private fb: FormBuilder) {
    this.miForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // Campo correo con validación
      body: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Lista vacía para que solo se vean tus comentarios publicados
    this.comentarios = []; 
  }

  enviar() {
    if (this.miForm.valid) {
      const nuevoComentario = { 
        ...this.miForm.value, 
        fecha: new Date().toLocaleString() 
      };

      this.api.postComment(nuevoComentario).subscribe(() => {
        this.comentarios.unshift(nuevoComentario); // Agrega a la lista
        this.confirmacion = '✅ ¡Comentario enviado con éxito!';
        this.miForm.reset(); // Limpia el formulario
        setTimeout(() => this.confirmacion = '', 3000);
      });
    }
  }
}