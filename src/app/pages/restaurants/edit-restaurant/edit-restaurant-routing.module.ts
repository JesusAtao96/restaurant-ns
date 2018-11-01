import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { EditRestaurantPage } from "./edit-restaurant.page";

const routes: Routes = [
    { path: "", component: EditRestaurantPage }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class EditRestaurantRoutingModule { }
