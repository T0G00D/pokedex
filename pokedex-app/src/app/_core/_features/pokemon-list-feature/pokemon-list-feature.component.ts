import { Pokemon } from './../../_models/Pokemon.model';
import { ToastrService } from 'ngx-toastr';
import { Pokemons } from './../../_models/Pokemon.s.model';
import { PokemonService } from './../../_services/pokemon.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pokemon-list-feature',
  templateUrl: './pokemon-list-feature.component.html',
  styleUrls: ['./pokemon-list-feature.component.less']
})
export class PokemonListFeatureComponent implements OnInit {

  loaded: boolean = false
  pokemons: Pokemons = {
    "count": 0,
    "next": null,
    "previous": null,
    "results": new Array()
  }

  constructor(
    private pokemonService: PokemonService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {

    this.pokemonService.getPokemonList().subscribe({
      next: (data) => (this.pokemons = data),
      error: (e) => (console.error(e), this.toastr.error(e)),
      complete: () => ((this.loaded = true), this.toastr.success('loaded')),
    });
  }

  getPokemonInfo(pokemon: Pokemon){
    this.pokemonService.setInfoItem(pokemon)
  }

}
