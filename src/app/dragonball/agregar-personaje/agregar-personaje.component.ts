import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dragonball.interface';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})
export class AgregarPersonajeComponent {

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output()
  onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0)
      return;

    this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }
}
