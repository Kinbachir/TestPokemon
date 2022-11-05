import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-by-strong',
  templateUrl: './pokemon-by-strong.component.html',
  styleUrls: ['./pokemon-by-strong.component.css']
})
export class PokemonByStrongComponent implements OnInit {
  pokemons?: Pokemon[];
  constructor(private pokemonService: PokemonService) { }
  strong:any;
  ngOnInit(): void {
  }

  searchStrong(): void {
    this.pokemonService.getByStrong(this.strong)
      .subscribe({
        next: (data) => {
          this.pokemons = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
