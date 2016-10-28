import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { MainLayoutComponent }          from '../shared/layouts/main-layout.component';
import { AuthGuard }                    from '../shared/auth/auth-guard.service';

import { DashboardComponent }           from './dashboard/dashboard.component';
import { LangListComponent }            from './langs/lang-list.compoment';
import { LangDetailComponent }          from './langs/lang-detail.component';
import { ActionListComponent }          from './actions/action-list.compoment';
import { ActionDetailComponent }        from './actions/action-detail.component';

const routes: Routes = [

    // Login
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: '', component: MainLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full'},

            // Dashboard
            { path: 'dashboard',    component: DashboardComponent, data: { resource: 'hola-mundo'} },

            // Langs
            { path: 'langs',        component: LangListComponent},
            { path: 'langs/:id',    component: LangDetailComponent},

            // Actions
            { path: 'actions',      component: ActionListComponent, data: { resource: 'actions-resource'}},
            { path: 'actions/:id',  component: ActionDetailComponent, data: { resource: 'actions-resource2'}}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRoutingModule {}
