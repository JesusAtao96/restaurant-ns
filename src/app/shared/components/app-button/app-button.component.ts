import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-button',
  moduleId: module.id,
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss']
})
export class AppButtonComponent implements OnInit {
  
  @Input() bgColor: string
  @Input() title: string;
  @Input() enabled: Boolean = true;
  @Input() fontColor: string;
  @Input() iconName: string;
  @Input() fontSize: string;
  @Input() margin: string;

  @Output() tapBtn = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
    /*console.log('bgColor', this.bgColor);
    console.log('title', this.title);
    console.log('enabled', this.enabled);
    console.log('fontColor', this.fontColor);
    console.log('iconName', this.iconName);
    console.log('fontSize', this.fontSize);*/
  }

  action() {
    this.tapBtn.emit();
  }

}
