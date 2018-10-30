import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ReversePipe } from './reverse/reverse.pipe';
import { FilterPipe } from './filter/filter.pipe';

@NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    declarations: [
        ReversePipe,
        FilterPipe
    ],
    exports: [
        ReversePipe,
        FilterPipe
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedPipesModule { }
