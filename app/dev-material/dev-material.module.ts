import { NgModule }                     from '@angular/core';
import { MaterialModule }               from '@angular/material';

import { SharedModule }                 from '../shared/shared.module';

import { DevMaterialRoutingModule }     from './dev-material-routing.module';

import { ButtonComponent }              from './components/button.component';


@NgModule({
    imports: [
        MaterialModule.forRoot(),
        SharedModule,
        DevMaterialRoutingModule
    ],
    declarations: [
        ButtonComponent
    ],
    providers: [],
    bootstrap: []
})

export class DevMaterialModule { }