import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AppButtonComponent } from './app-button/app-button.component';
import { RatingComponent } from './rating/rating.component';
import { EmptyComponent } from './empty/empty.component';
import { PreloaderComponent } from './preloader/preloader.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
    ],
    exports: [
        AppButtonComponent,
        RatingComponent,
        EmptyComponent,
        PreloaderComponent
    ],
    declarations: [
        AppButtonComponent,
        RatingComponent,
        EmptyComponent,
        PreloaderComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ComponentsSharedModule { }
