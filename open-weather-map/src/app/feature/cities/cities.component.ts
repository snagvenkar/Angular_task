import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../shared/services/shared.service';
import cities from '../../../assets/cities.json';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  cityList: any[] = cities;
  selectedCityForm = this.fb.group({
    cityName: ['', Validators.required]
  });
  selectedCityName: string = '';

  constructor(
    private sharedService: SharedService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  changeCity(e: any) {
    console.log(e.target.value)
  }
  
  //On Submit
  submit(){
    console.log(this.selectedCityForm.value);
    this.selectedCityName = this.selectedCityForm.controls.cityName.value;
    console.log('selectedCityName: ', this.selectedCityName);
    this.router.navigate(['/city-details'], {queryParams: {city: this.selectedCityName}});
  }
}
