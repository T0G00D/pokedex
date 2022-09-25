import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListFeatureComponent } from './pokemon-list-feature.component';

describe('PokemonListFeatureComponent', () => {
  let component: PokemonListFeatureComponent;
  let fixture: ComponentFixture<PokemonListFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonListFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonListFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
