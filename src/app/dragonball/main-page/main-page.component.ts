import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dragonball.interface';
import { DragonballService } from '../services/dragonball.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // agregar(event: any) {
  //   event.preventDefault();
  //   console.log("hey!");
  // }

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegetta',
      poder: 14000,
    }
  ]

  nuevo: Personaje = {
    nombre: 'sdf',
    poder: 13
  }

  agregarNuevoPersonaje(argumento: Personaje){
    //debugger;
    this.personajes.push(argumento);
  }

  constructor(private dbService: DragonballService){}
}
