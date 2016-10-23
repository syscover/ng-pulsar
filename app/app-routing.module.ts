import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent }       from './login.component';

import config                   = require('./shared/app-globals');

export const routes: Routes = [

    // bootstrap route
    { path: config.appUrlPrefix, redirectTo: config.appUrlPrefix + '/login', pathMatch: 'full' },
    { path: config.appUrlPrefix + '/login', component: LoginComponent },

    { path: config.appUrlPrefix + '/admin', loadChildren: 'app/admin/admin.module#AdminModule' },
    { path: config.appUrlPrefix + '/cms', loadChildren: 'app/cms/cms.module#CmsModule' },
    { path: config.appUrlPrefix + '/material', loadChildren: 'app/dev-material/dev-material.module#DevMaterialModule' },
    { path: config.appUrlPrefix + '/vaadin', loadChildren: 'app/dev-vaadin/dev-vaadin.module#DevVaadinModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}