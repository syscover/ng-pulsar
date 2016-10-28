import { NgModule }                             from '@angular/core';
import { PolymerElement }                       from '@vaadin/angular2-polymer';

import { SharedModule }                         from '../shared/shared.module';

import { DevPolymerRoutingModule }              from './dev-polymer-routing.module';

import { ButtonComponent }                      from './components/button.component';



@NgModule({
    imports: [
        SharedModule,
        DevPolymerRoutingModule
    ],
    declarations: [
        PolymerElement('paper-button'),
        PolymerElement('iron-icon'),
        ButtonComponent
    ],
    providers: [],
    bootstrap: []
})

export class DevPolymerModule { }