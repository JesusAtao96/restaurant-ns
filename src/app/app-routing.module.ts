import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    //{ path: "", redirectTo: "/start", pathMatch: "full" },
    { path: 'start', loadChildren: '~/app/public/start/start.module#StartPageModule' },
    { path: 'login', loadChildren: '~/app/public/login/login.module#LoginPageModule' },
    { path: 'register', loadChildren: '~/app/public/register/register.module#RegisterPageModule' },
    { path: 'main', loadChildren: '~/app/pages/menu/menu.module#MenuModule' }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
