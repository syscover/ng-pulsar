import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { MainLayoutComponent }          from '../shared/layouts/main-layout.component';

import { ButtonComponent }              from './components/button.component';

const routes: Routes = [
    {
        path: '', component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: 'button', pathMatch: 'full' },
            { path: 'button',        component: ButtonComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DevMaterialRoutingModule {}
