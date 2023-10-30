import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon-list.interface';
import { PokemonListService } from 'src/app/service/pokemon-list.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit{

  pokemonList: Pokemon[]= []
  constructor(private pokemonservice: PokemonListService){}

  ngOnInit(): void {
    this.pokemonservice.getAllPokemon().subscribe(pokemon => {
      this.pokemonList= pokemon.results;
    });
  }
}
