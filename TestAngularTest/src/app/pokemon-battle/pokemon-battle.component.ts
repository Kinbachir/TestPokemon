import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-battle',
  templateUrl: './pokemon-battle.component.html',
  styleUrls: ['./pokemon-battle.component.css']
})
export class PokemonBattleComponent implements OnInit {
  myPokemon:any;
  enemyPokemon:any;
  constructor(private pokemonService: PokemonService) { }
  result:any='';
  ngOnInit(): void {
  }

  battle(): void {
    this.pokemonService.battle({myPokemon:this.myPokemon,enemyPokemon:this.enemyPokemon})
      .subscribe({
        next: (data) => {
          this.result = data.result;
          console.log(this.result);
        },
        error: (e) => console.error(e)
      });
  }

}
