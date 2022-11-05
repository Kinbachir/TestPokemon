import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonBattleComponent } from './pokemon-battle/pokemon-battle.component';
import { PokemonByNameComponent } from './pokemon-by-name/pokemon-by-name.component';
import { PokemonByStrongComponent } from './pokemon-by-strong/pokemon-by-strong.component';
import { PokemonByWeaknessesComponent } from './pokemon-by-weaknesses/pokemon-by-weaknesses.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  { path: 'pokemons', component: PokemonListComponent },
  { path: 'pokemonByName', component: PokemonByNameComponent },
  { path: 'pokemonByWeaknesses', component: PokemonByWeaknessesComponent },
  { path: 'pokemonByStrong', component: PokemonByStrongComponent },
  { path: 'pokemonBattle', component: PokemonBattleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }