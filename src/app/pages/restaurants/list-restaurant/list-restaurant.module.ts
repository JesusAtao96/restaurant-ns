import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ListRestaurantRoutingModule } from "./list-restaurant-routing.module";
import { ListRestaurantPage } from "./list-restaurant.page";

import { ComponentsSharedModule, SharedPipesModule } from '../../../shared';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ComponentsSharedModule, 
        SharedPipesModule,
        ListRestaurantRoutingModule
    ],
    declarations: [
        ListRestaurantPage
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ListRestaurantPageModule { }
