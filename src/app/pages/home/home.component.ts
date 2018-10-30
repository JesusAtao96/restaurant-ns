import { Component, OnInit } from "@angular/core";

import { DrawerService } from "~/app/shared";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(public drawerService: DrawerService) {

    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        console.log('onDrawerButtonTap');
        this.drawerService.toggle();
        /*const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();*/
    }
}
