import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  public heroes: string[] = ['Spiderman','Ironman','Hulk','Thor']
  public heroeBorrado: string = '';

  ngOnInit(): void {
    console.log('On Init');
    
  }

  borrarHeroe(): void{
    // this.heroes.splice(this.heroes.length - 1, 1);
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
    
  }
}
