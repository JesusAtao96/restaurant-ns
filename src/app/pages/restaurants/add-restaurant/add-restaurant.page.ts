import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: "app-add-restaurant",
    moduleId: module.id,
    templateUrl: './add-restaurant.page.html',
    styleUrls: ['./add-restaurant.page.scss'],
})
export class AddRestaurantPage implements OnInit {

    constructor(public routerExtensions: RouterExtensions) {

    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
