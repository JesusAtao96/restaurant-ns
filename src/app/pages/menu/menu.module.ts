import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { MenuRoutingModule } from "./menu-routing.module";
import { MenuComponent } from "./menu.component";

@NgModule({
    bootstrap: [
        MenuComponent
    ],
    imports: [
        NativeScriptCommonModule,
        MenuRoutingModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        MenuComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MenuModule { }
