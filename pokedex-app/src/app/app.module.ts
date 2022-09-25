import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';
import {MatRippleModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListFeatureComponent } from './_core/_features/pokemon-list-feature/pokemon-list-feature.component';
import { PokedexFeatureComponent } from './_core/_features/pokedex-feature/pokedex-feature.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { InfoFieldFeatureComponent } from './_core/_features/info-field-feature/info-field-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListFeatureComponent,
    PokedexFeatureComponent,
    InfoFieldFeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatRippleModule,
    MatTabsModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatIconModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
