import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';

const routes: Routes = [
  //les routes les plus spécifiques sont en haut et les plus globales en bas
  {path:'pokemons',component	: ListPokemonComponent},
  {path:'pokemon/:id',component: DetailPokemonComponent },
  //chemin par defaut
  {path:'',redirectTo: 'pokemons',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
