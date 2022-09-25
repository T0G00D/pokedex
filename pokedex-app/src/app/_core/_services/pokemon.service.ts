import { Sprites } from './../_models/Sprites.model';
import { ToastrService } from 'ngx-toastr';
import { Pokemon } from './../_models/Pokemon.model';
import { Pokemons } from '../_models/Pokemon.s.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private pokemon_url = 'https://pokeapi.co/api/v2/pokemon';

  infoItem: BehaviorSubject<Pokemon> = new BehaviorSubject<Pokemon>({
    name: 'DUMMY',
    url: 'DUMMY',
    forms: []
  });

  sprites: BehaviorSubject<Sprites> = new BehaviorSubject<Sprites>({
    sprites: {
      back_default: null,
      back_female: null,
      back_shiny: null,
      back_shiny_female: null,
      front_default: null,
      front_female: null,
      front_shiny: null,
      front_shiny_female: null,
    },
  });

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getPokemonList(
    limit: number = 10000,
    offset: number = 0
  ): Observable<Pokemons> {
    return this.http.get<Pokemons>(
      this.pokemon_url + '?limit=' + limit + '&offset=' + offset
    );
  }

  getPokemon(request: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(request);
  }

  getPokemonSprites(request: string): Observable<Sprites> {
    return this.http.get<Sprites>(request);
  }

  setInfoItem(item: any) {
    this.getPokemon(item?.url).subscribe({
      next: (data) => (
        this.infoItem.next(data),
        this.getPokemonSprites(data?.forms[0].url).subscribe({
          next: (sprites) => (
            this.sprites.next(sprites)
          ),
          error: (sprites_e) => (console.error(sprites_e), this.toastr.error(sprites_e)),
        })
      ),
      error: (e) => (console.error(e), this.toastr.error(e)),
      complete:() => (this.toastr.success("loaded info"))
    });
  }
}
