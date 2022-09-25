import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { PokemonService } from './../../_services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-field-feature',
  templateUrl: './info-field-feature.component.html',
  styleUrls: ['./info-field-feature.component.less']
})
export class InfoFieldFeatureComponent implements OnInit {

  constructor(
    private pokemonService: PokemonService,
    private toastr: ToastrService,
  ) { }

  infoitem: any = null
  sprites: any = null

  ngOnInit(): void {
    this.pokemonService.infoItem.subscribe({
      next: (data) => (this.infoitem = data,console.log(this.infoitem)),
      error: (e) => (console.error(e), this.toastr.error(e)),
    });
    this.pokemonService.sprites.subscribe({
      next: (data) => (this.sprites = data),
      error: (e) => (console.error(e), this.toastr.error(e)),
    });
  }

}
