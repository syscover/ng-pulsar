import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { LoginComponent }               from "./login/login.component";
import { DashboardComponent }           from './dashboard/dashboard.component';
import { LangListComponent }            from './langs/lang-list.compoment';
import { LangDetailComponent }          from './langs/lang-detail.component';
import { ActionListComponent }          from './actions/action-list.compoment';
import { ActionDetailComponent }        from './actions/action-detail.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

    // Login
    { path: 'login',        component: LoginComponent },

    // Dashboard
    { path: 'dashboard',    component: DashboardComponent },

    // Langs
    { path: 'langs',        component: LangListComponent},
    { path: 'langs/:id',    component: LangDetailComponent},

    // Actions
    { path: 'actions',      component: ActionListComponent},
    { path: 'actions/:id',  component: ActionDetailComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {}
