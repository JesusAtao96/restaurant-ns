import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  moduleId: module.id,
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  
  @Input() numbers: Number;
  stars: Array<any> = [];
  constructor() { }

  ngOnInit() {
    for (let index = 1; index <= 5; index++) {
      if(index <= this.numbers) {
        this.stars.push({on: true});
      } else {
        this.stars.push({on: false});
      }
    }
  }

}
