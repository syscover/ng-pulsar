import { NgModule }                     from '@angular/core';

import { SharedModule }                 from '../shared/shared.module';

import { MaterialRoutingModule }        from './material-routing.module';


@NgModule({
    imports: [
        SharedModule,
        MaterialRoutingModule
    ],
    declarations: [
        LoginComponent,

        DashboardComponent,

        LangListComponent,
        LangDetailComponent,

        ActionListComponent,
        ActionDetailComponent
    ],
    providers: [],
    bootstrap: []
})

export class MaterialModule { }