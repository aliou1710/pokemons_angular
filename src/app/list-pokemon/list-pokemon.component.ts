import { Component ,OnInit} from '@angular/core';
import { pokemon } from '../pokemon';
import {ListPOKEMONS} from '../mock-pokemon-lists';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent {
  //title = 'ng-pokemon-app';
  title = 'List de pokemons';

  constructor(private router : Router){}
  //tableau de pokemon
  pokemonlist : pokemon[] = ListPOKEMONS
 //pokemonlists=['pikachu','barbaroza','noah'];

 ngOnInit(){
    console.table(this.pokemonlist); 
    //this.selectPokemon(this.pokemonlist[0]);
  }

  /*selectPokemon(events : MouseEvent){
    const index : number = Number((events.target as HTMLInputElement).value);
    console.log(`Ona cliqué sur le pokemon ${this.pokemonlist[index].name}`);
  }*/
  //le ? : si le pokemonselected n'est pas defini, il ne vas pas generer d'erreur
  Pokemonselected?:pokemon;

  selectPokemon(pokemonId : string){
    const index = Number(pokemonId);
    //on veut chercher un pokemon qui a cet id dans la liste, s'il n'existe pas il renvoie undefined
    const pokemonunit: pokemon|undefined = this.pokemonlist.find(pokemon_=>pokemon_.id==index);
    this.Pokemonselected = this.pokemonlist[index];
    if(pokemonunit){
      //pokemon
      console.log(`seconde methode : On a cliqué sur le pokemon ${pokemonunit.name}`);
      this.Pokemonselected = pokemonunit;
    }else{
      //undefined
      console.log(`vous avez demander un pokemon qui n'existe pas`);
      this.Pokemonselected = pokemonunit;
      
    }
  
  }

  selectPokemonDirective(pokemon__ : pokemon){
    const index = Number(pokemon__.id);
    //on veut chercher un pokemon qui a cet id dans la liste, s'il n'existe pas il renvoie undefined
    const pokemonunit: pokemon|undefined = this.pokemonlist.find(pokemon_=>pokemon_.id==index);
    this.Pokemonselected = this.pokemonlist[index];
    if(pokemonunit){
      //pokemon
      console.log(`seconde methode : On a cliqué sur le pokemon ${pokemonunit.name}`);
      this.Pokemonselected = pokemonunit;
    }else{
      //undefined
      console.log(`vous avez demander un pokemon qui n'existe pas`);
      this.Pokemonselected = pokemonunit;
      
    }
  
  }

  goToDetailPokemons(pokemon___ : pokemon){
    
    this.router.navigate(['/pokemon/',pokemon___.id]);
  }
}
