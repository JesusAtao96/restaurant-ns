import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { DetailRestaurantRoutingModule } from "./detail-restaurant-routing.module";
import { DetailRestaurantPage } from "./detail-restaurant.page";

import { ComponentsSharedModule, SharedPipesModule } from '../../../shared';
@NgModule({
    imports: [
        NativeScriptCommonModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
        ComponentsSharedModule,
        SharedPipesModule,
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
