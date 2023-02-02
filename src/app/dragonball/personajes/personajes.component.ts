import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dragonball.interface';
import { DragonballService } from '../services/dragonball.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  
  @Input("data")
  personajes: Personaje[] = [];

  constructor(private dbService: DragonballService){}
}
