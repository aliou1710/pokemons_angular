import { Component,OnInit } from '@angular/core';
import {ListPOKEMONS} from './mock-pokemon-lists';
import {pokemon} from './pokemon'
@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`
})
export class AppComponent implements OnInit{
  //title = 'ng-pokemon-app';
  title = 'List de pokemons';
  //tableau de pokemon
  pokemonlist : pokemon[] = ListPOKEMONS
 //pokemonlists=['pikachu','barbaroza','noah'];

 ngOnInit(){
    console.table(this.pokemonlist); 
    this.selectPokemon(this.pokemonlist[0]);
  }

  selectPokemon(pokemonObject : pokemon){
    console.log(`Ona cliqué sur le pokemon ${pokemonObject.name}`);
  }
 
}
