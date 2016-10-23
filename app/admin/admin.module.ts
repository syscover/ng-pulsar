import { NgModule }                     from '@angular/core';

import { SharedModule }                 from '../shared/shared.module';

import { AdminRoutingModule }           from './admin-routing.module';

import { DashboardComponent }           from './dashboard/dashboard.component';
import { LangListComponent }            from './langs/lang-list.compoment';
import { LangDetailComponent }          from './langs/lang-detail.component';
import { ActionListComponent }          from './actions/action-list.compoment';
import { ActionDetailComponent }        from './actions/action-detail.component';

import { ActionService }                from './actions/action.service';

@NgModule({
    imports: [
        SharedModule,
        AdminRoutingModule
    ],
    declarations: [
        DashboardComponent,

        LangListComponent,
        LangDetailComponent,

        ActionListComponent,
        ActionDetailComponent
    ],
    providers: [
        ActionService
    ],
    bootstrap: []
})

export class AdminModule { }