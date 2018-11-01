import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from 'nativescript-angular/router';

import { PageRoute } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";

@Component({
    selector: 'app-detail-restaurant',
    moduleId: module.id,
    templateUrl: './detail-restaurant.page.html',
    styleUrls: ['./detail-restaurant.page.scss']
})
export class DetailRestaurantPage implements OnInit {
    paramId: number;

    constructor(public routerExtensions: RouterExtensions, private pageRoute: PageRoute) {
        this.pageRoute.activatedRoute.pipe(
            switchMap(activatedRoute => activatedRoute.params)
        ).forEach((params) => { 
            this.paramId = params["id"]; 
            console.log('this.paramId', this.paramId)
        });
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

}
