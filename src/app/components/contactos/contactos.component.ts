import { Component } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent {
  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  enviarFormulario() {
    // Validar el formulario antes de enviarlo
    if (this.nombre.trim() === '' || this.email.trim() === '' || this.mensaje.trim() === '') {
      alert('Por favor, complete todos los campos del formulario.');
      return;
    }

    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado');
    console.log('Nombre:', this.nombre);
    console.log('Email:', this.email);
    console.log('Mensaje:', this.mensaje);

    // Luego puedes restablecer los campos del formulario
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
  }
}
