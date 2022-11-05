import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-by-weaknesses',
  templateUrl: './pokemon-by-weaknesses.component.html',
  styleUrls: ['./pokemon-by-weaknesses.component.css']
})
export class PokemonByWeaknessesComponent implements OnInit {
  pokemons?: Pokemon[];
  constructor(private pokemonService: PokemonService) { }
  weaknesses:any;
  ngOnInit(): void {
  }

  searchWeaknesses(): void {
    this.pokemonService.getByWeaknesses(this.weaknesses)
      .subscribe({
        next: (data) => {
          this.pokemons = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
