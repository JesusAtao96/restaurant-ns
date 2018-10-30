import { Component, Input , OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-preloader',
  moduleId: module.id,
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit, OnDestroy {

  @Input() loading: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.loading = false;
  }

}
