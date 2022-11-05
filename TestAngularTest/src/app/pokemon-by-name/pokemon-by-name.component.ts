import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-by-name',
  templateUrl: './pokemon-by-name.component.html',
  styleUrls: ['./pokemon-by-name.component.css']
})
export class PokemonByNameComponent implements OnInit {
  pokemons?: Pokemon[];
  constructor(private pokemonService: PokemonService) { }
  name:any;
  ngOnInit(): void {
  }

  searchName(): void {
    this.pokemonService.getByName(this.name)
      .subscribe({
        next: (data) => {
          this.pokemons = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
