import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";

import { filter } from "rxjs/operators";
import { DrawerService } from "~/app/shared";
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';

import {Page} from "ui/page";

import { AuthenticationService } from '../../shared';

@Component({
    moduleId: module.id,
    selector: "ns-menu",
    templateUrl: "menu.component.html",
    styleUrls: ['menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;
    userData: any = {
        name: 'name',
        email: 'name@email.com',
        img: null
    };

    constructor(private router: Router, private routerExtensions: RouterExtensions, public drawerService: DrawerService, page: Page, private authService: AuthenticationService) {
        // Use the component constructor to inject services.
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this._activatedUrl = "/main/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
            .pipe(filter((event: any) => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
        
        if(this.authService.user) {
            this.userData = this.authService.user;
        }
    }

    ngAfterViewInit() {
        console.log("MenuComponent ngAfterViewInit - this.drawerComponent.sideDrawer=");
        this.drawerService.drawer = this.drawerComponent.sideDrawer;
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: { name: "fade" }
        });
        
        this.drawerService.toggle();
    }

    logout() {
        this.authService.logout();
    }
}