import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empty',
  moduleId: module.id,
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent implements OnInit {
  
  @Input() text: String;

  constructor() { }

  ngOnInit() {
  }

}
