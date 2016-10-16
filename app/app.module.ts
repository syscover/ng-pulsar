import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { HttpModule, JsonpModule }  from '@angular/http';

import { AppComponent }             from './app.component';
import { CoreModule }               from './core/core.module';
import { AppRoutingModule }         from './app-routing.module';

import { TranslatorService }        from './shared/translator.service';

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
    providers: [
        TranslatorService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }