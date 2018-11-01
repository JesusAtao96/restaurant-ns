import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DetailRestaurantPage } from "./detail-restaurant.page";

const routes: Routes = [
    { path: "", component: DetailRestaurantPage }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DetailRestaurantRoutingModule { }
