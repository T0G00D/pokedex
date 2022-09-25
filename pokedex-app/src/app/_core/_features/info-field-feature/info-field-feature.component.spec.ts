import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFieldFeatureComponent } from './info-field-feature.component';

describe('InfoFieldFeatureComponent', () => {
  let component: InfoFieldFeatureComponent;
  let fixture: ComponentFixture<InfoFieldFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoFieldFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoFieldFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
