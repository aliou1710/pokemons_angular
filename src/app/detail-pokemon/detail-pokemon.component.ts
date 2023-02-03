import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ListPOKEMONS} from '../mock-pokemon-lists';
import { pokemon } from '../pokemon';
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent  implements OnInit{

  //on veut recuperer l'id sur la route pokemeon/3 qui est 
  constructor(private route : ActivatedRoute , private router : Router){
    
  }
  pokemonlist : pokemon[] = ListPOKEMONS;
  Pokemonselected?:pokemon;
  ngOnInit(): void {
    const pokemonId :string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      // Le symbole "+" devant "pokemonId" est utilisé pour convertir la valeur en un type de nombre. 
      //Si la variable "pokemonId" n'a pas de valeur (c'est-à-dire qu'elle est fausse), rien ne se passe.
      this.Pokemonselected = this.pokemonlist.find(pokmn =>pokmn.id == +pokemonId);
    }else{
      
    }
    
  }
  //il faut import le service "Router" au niveau du constructeur en le mettant en parametre
  //ex: private router : Router
  gotoPokemonList(){
    this.router.navigate(['/pokemons']);

  }
}
