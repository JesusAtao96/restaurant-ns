import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DetailRestaurantRoutingModule } from "./detail-restaurant-routing.module";
import { DetailRestaurantPage } from "./detail-restaurant.page";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DetailRestaurantRoutingModule
    ],
    declarations: [
        DetailRestaurantPage
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DetailRestaurantPageModule { }
