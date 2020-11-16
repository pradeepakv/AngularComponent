import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-test1',
  template: `
    <p>
      test1 works! {{dataSe.count}}
    </p>
  `,
  styleUrls: ['./test1.component.css'],
  providers: [DataService]
})
export class Test1Component implements OnInit {

  constructor(private dataSe: DataService) { }

  ngOnInit() {
  }

}
