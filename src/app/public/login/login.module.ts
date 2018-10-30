import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginPage } from './login.page';

import { ComponentsSharedModule } from '../../shared';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        ComponentsSharedModule,
        LoginRoutingModule
    ],
    declarations: [
      LoginPage
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginPageModule { }