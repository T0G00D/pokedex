import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexFeatureComponent } from './pokedex-feature.component';

describe('PokedexFeatureComponent', () => {
  let component: PokedexFeatureComponent;
  let fixture: ComponentFixture<PokedexFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
