import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output()
  filterValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  //Emit the search value
  search(val:any):void{
    this.filterValue.emit(val);
  }

}
