import { Component } from '@angular/core';

import { DataService } from './services/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name = 'Angular';
  test = {};
  constructor(private dataService: DataService){}

  increaseCount(){
    this.dataService.count++;
  }
}
