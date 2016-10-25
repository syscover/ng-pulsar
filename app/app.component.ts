import { Component }            from '@angular/core';
import { Router }               from '@angular/router';

import { TranslatorService }    from './shared/translator/translator.service';
import { AuthService }          from './shared/auth/auth.service';

import config                   = require('./shared/app-globals');

@Component({
    selector: 'pulsar-app',
    templateUrl: 'ng-pulsar/app/app.component.html'
})

export class AppComponent
{
    title: string = 'NG PULSAR';

    constructor(
        private trans: TranslatorService,
        private authService: AuthService,
        private router: Router
    ){}

    logout()
    {
        this.authService.logout();
        this.router.navigate([config.appUrlPrefix]);
    }
}
