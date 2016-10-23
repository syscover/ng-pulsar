import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { MainLayoutComponent }          from '../shared/layouts/main-layout.component';

import { LoginComponent }               from "./login/login.component";
import { DashboardComponent }           from './dashboard/dashboard.component';
import { LangListComponent }            from './langs/lang-list.compoment';
import { LangDetailComponent }          from './langs/lang-detail.component';
import { ActionListComponent }          from './actions/action-list.compoment';
import { ActionDetailComponent }        from './actions/action-detail.component';


const routes: Routes = [

    // Login
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // with route /admin redirect to login
    {
        path: 'login',        component: LoginComponent
    },

    {
        path: '', component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full'},

            // Dashboard
            { path: 'dashboard',    component: DashboardComponent },

            // Langs
            { path: 'langs',        component: LangListComponent},
            { path: 'langs/:id',    component: LangDetailComponent},

            // Actions
            { path: 'actions',      component: ActionListComponent},
            { path: 'actions/:id',  component: ActionDetailComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {}
