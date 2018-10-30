import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { MenuComponent } from "./menu.component";

const routes: Routes = [
    {
        path: '',
        component: MenuComponent,
        children: [
            { path: "", redirectTo: "/home", pathMatch: "full" },
            { path: "home", loadChildren: "~/app/pages/home/home.module#HomeModule" },
            { path: "browse", loadChildren: "~/app/pages/browse/browse.module#BrowseModule" },
            { path: "search", loadChildren: "~/app/pages/search/search.module#SearchModule" },
            { path: "featured", loadChildren: "~/app/pages/featured/featured.module#FeaturedModule" },
            { path: "settings", loadChildren: "~/app/pages/settings/settings.module#SettingsModule" }
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MenuRoutingModule { }
