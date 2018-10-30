import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { RegisterRoutingModule } from "./register-routing.module";
import { RegisterPage } from './register.page';

import { ComponentsSharedModule } from '../../shared';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        ComponentsSharedModule,
        RegisterRoutingModule
    ],
    declarations: [
      RegisterPage
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RegisterPageModule { }