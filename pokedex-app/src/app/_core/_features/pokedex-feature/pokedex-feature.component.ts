import { BehaviorSubject } from 'rxjs';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex-feature',
  templateUrl: './pokedex-feature.component.html',
  styleUrls: ['./pokedex-feature.component.less']
})
export class PokedexFeatureComponent implements OnInit, AfterViewInit {

  loaded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    this.loaded.next(true)
  }

}
