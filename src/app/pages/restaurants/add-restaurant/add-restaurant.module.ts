import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AddRestaurantRoutingModule } from "./add-restaurant-routing.module";
import { AddRestaurantPage } from "./add-restaurant.page";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AddRestaurantRoutingModule
    ],
    declarations: [
        AddRestaurantPage
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AddRestaurantPageModule { }
