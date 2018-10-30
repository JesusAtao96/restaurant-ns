import { Component, OnInit } from "@angular/core";

import { DrawerService } from "~/app/shared";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

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
