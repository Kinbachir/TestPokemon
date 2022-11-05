import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons?: Pokemon[];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.retrievePokemons();
  }

  retrievePokemons(): void {
    this.pokemonService.getAll()
      .subscribe({
        next: (data) => {
          this.pokemons = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
