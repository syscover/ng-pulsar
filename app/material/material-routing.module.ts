import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

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

export class MaterialRoutingModule {}
