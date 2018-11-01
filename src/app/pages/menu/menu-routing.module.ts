import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MenuComponent } from "./menu.component";

const routes: Routes = [
    {
        path: '',
        component: MenuComponent,
        children: [
            { path: "", redirectTo: "/list-restaurant", pathMatch: "full" },
            { path: 'list-restaurant', loadChildren: '~/app/pages/restaurants/list-restaurant/list-restaurant.module#ListRestaurantPageModule' },
            { path: 'add-restaurant', loadChildren: '~/app/pages/restaurants/add-restaurant/add-restaurant.module#AddRestaurantPageModule' },
            { path: 'detail-restaurant/:id', loadChildren: '~/app/pages/restaurants/detail-restaurant/detail-restaurant.module#DetailRestaurantPageModule' },
            { path: 'reviews', loadChildren: '~/app/pages/reviews/reviews.module#ReviewsPageModule' },
            { path: 'profile', loadChildren: '~/app/pages/profile/profile.module#ProfilePageModule' }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MenuRoutingModule { }
