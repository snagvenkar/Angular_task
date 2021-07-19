import { Component, OnInit } from '@angular/core';
import { City } from './../../shared/interfaces/city';
import { CityService } from './city.service';
import { SharedService } from './../../shared/services/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit {
  cityInfo: any;
  cityName: string = '';
  filterValue: any;

  constructor(
    private cityService: CityService,
    private sharedService: SharedService,
    private route: ActivatedRoute
  ) { 
    this.sharedService.loadingEventEmitter.emit(true);
  }

  ngOnInit(): void {
    //get cityName from the query parameter
    this.route.queryParams
      .subscribe(
        params => {
          this.cityName = params.city;
          console.log('params: ' + this.cityName);
        }
      );

      this.getCityDetails();
  }

  //Get city weather history
  getCityDetails(): void {
    const cityVal = this.cityName;
    console.log('cityVal', cityVal);
    this.cityService.getCityInfo(cityVal)
      .subscribe(response => {
        console.log(response);
        this.cityInfo = response.list;
        console.log(this.cityInfo);
        this.sharedService.loadingEventEmitter.emit(false);
      },
        err => {
          console.error('err!', err);
        }
      );
  }

  //Search value
  onFilterValue(val:string){
    //console.log("recieved: "+ val);
    this.filterValue = val;
  }

}
