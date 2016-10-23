import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { MainLayoutComponent }          from '../shared/layouts/main-layout.component';

import { DatePickerComponent }          from './components/date-picker.component';

const routes: Routes = [
    {
        path: '', component: MainLayoutComponent,
        children: [
            { path: '',                     redirectTo: 'date-picker', pathMatch: 'full' },
            { path: 'date-picker',          component: DatePickerComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DevVaadinRoutingModule {}
