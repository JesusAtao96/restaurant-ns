import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ReviewsRoutingModule } from "./reviews-routing.module";
import { ReviewsPage } from "./reviews.page";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ReviewsRoutingModule
    ],
    declarations: [
        ReviewsPage
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ReviewsPageModule { }
