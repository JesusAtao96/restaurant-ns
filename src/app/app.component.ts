import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';

import { registerElement } from "nativescript-angular/element-registry";
import { CardView } from 'nativescript-cardview';
registerElement('CardView', () => CardView);

import { AuthenticationService } from './shared';

import * as SocialLogin from 'nativescript-social-login';

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

    constructor(private authService: AuthenticationService, public routerExtensions: RouterExtensions) {
        // Use the component constructor to inject services.
        this.authService.authenticationState.subscribe(state => {
            console.log('authenticationState', state);
            if (state !== null) {
              if(state) {
                this.routerExtensions.navigate(["/main/list-restaurant"], { clearHistory: true });
              } else {
                this.routerExtensions.navigate(["/start"], { clearHistory: true });
              }
            }
        });
    }

    ngOnInit(): void {

    }

}
