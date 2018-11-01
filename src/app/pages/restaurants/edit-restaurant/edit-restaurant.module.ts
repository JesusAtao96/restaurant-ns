import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { EditRestaurantRoutingModule } from "./edit-restaurant-routing.module";
import { EditRestaurantPage } from "./edit-restaurant.page";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        EditRestaurantRoutingModule
    ],
    declarations: [
        EditRestaurantPage
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EditRestaurantPageModule { }
