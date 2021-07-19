import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesComponent } from './cities/cities.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './city-details/search/search.component';
import { SearchFilterPipe } from './city-details/search-filter.pipe';

@NgModule({
  declarations: [
    CitiesComponent,
    CityDetailsComponent,
    SearchComponent,
    SearchFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule
  ]
})
export class FeatureModule { }
