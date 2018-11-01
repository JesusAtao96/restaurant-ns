import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ListRestaurantPage } from "./list-restaurant.page";

const routes: Routes = [
    { path: "", component: ListRestaurantPage }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ListRestaurantRoutingModule { }
