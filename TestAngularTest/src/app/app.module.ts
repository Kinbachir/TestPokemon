import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonByNameComponent } from './pokemon-by-name/pokemon-by-name.component';
import { PokemonByWeaknessesComponent } from './pokemon-by-weaknesses/pokemon-by-weaknesses.component';
import { PokemonByStrongComponent } from './pokemon-by-strong/pokemon-by-strong.component';
import { PokemonBattleComponent } from './pokemon-battle/pokemon-battle.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonByNameComponent,
    PokemonByWeaknessesComponent,
    PokemonByStrongComponent,
    PokemonBattleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
