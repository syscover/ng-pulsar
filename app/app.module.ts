import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { HttpModule, JsonpModule }  from '@angular/http';

import { AppComponent }             from './app.component';
import { CoreModule }               from './core/core.module';
import { AppRoutingModule }         from './app-routing.module';

import { TranslatorService }        from './shared/translator/translator.service';
import { AuthGuard }                from './shared/auth/auth-guard.service';
import { AuthService }              from './shared/auth/auth.service';

import { LoginComponent }           from './login.component';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        AppRoutingModule,

        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        LoginComponent
    ],
    providers: [
        TranslatorService,
        AuthGuard,
        AuthService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }