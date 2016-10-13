import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { HttpModule, JsonpModule }  from '@angular/http';

import { AppComponent }             from './app.component';
import { CoreModule }               from './core/core.module';
import { AppRoutingModule }         from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        AppRoutingModule,

        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }