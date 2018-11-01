import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AddRestaurantPage } from "./add-restaurant.page";

const routes: Routes = [
    { path: "", component: AddRestaurantPage }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AddRestaurantRoutingModule { }
