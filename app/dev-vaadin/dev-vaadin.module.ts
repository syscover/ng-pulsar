import { NgModule }                             from '@angular/core';
import { PolymerElement }                       from '@vaadin/angular2-polymer';

import { SharedModule }                         from '../shared/shared.module';

import { DevVaadinRoutingModule }               from './dev-vaadin-routing.module';

import { DatePickerComponent }                  from './components/date-picker.component';


@NgModule({
    imports: [
        SharedModule,
        DevVaadinRoutingModule
    ],
    declarations: [
        PolymerElement('vaadin-date-picker'),
        DatePickerComponent
    ],
    providers: [],
    bootstrap: []
})

export class DevVaadinModule { }