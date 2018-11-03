import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';

import { DrawerService } from "~/app/shared";

@Component({
    selector: 'app-edit-restaurant',
    moduleId: module.id,
    templateUrl: './edit-restaurant.page.html',
    styleUrls: ['./edit-restaurant.page.scss'],
})
export class EditRestaurantPage implements OnInit {

    constructor(public drawerService: DrawerService, public routerExtensions: RouterExtensions) {

    }

    ngOnInit(): void {
        // Init your component properties here.
    }

}
