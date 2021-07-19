import { Component } from '@angular/core';
import { SharedService } from './shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'open-weather-map';
  showLoader = false;

  constructor(
    private sharedService: SharedService
  ){}

  ngOnInit() {
    this.sharedService.loadingEventEmitter
      .subscribe(response => this.showLoader = response);
  }
}
