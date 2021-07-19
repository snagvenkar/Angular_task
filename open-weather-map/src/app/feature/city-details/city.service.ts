import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { settings } from 'src/app/core/app_settings/settings';
import { City } from './../../shared/interfaces/city';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  cityUrl = settings.cityDetails;
  apiKey = environment.apiKey

  constructor(
    private http: HttpClient
  ) { }

  getCityInfo(cityName:any): Observable<City> {
    return this.http.get<City>(`${this.cityUrl}city?q=${cityName}&appid=${this.apiKey}`);
  }
}
