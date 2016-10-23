import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';

import { TranslatorService }    from './shared/translator/translator.service';

import { AuthService }          from './shared/auth/auth.service';

import config                   = require('./shared/app-globals');

@Component({
    moduleId: module.id,
    selector: 'pulsar-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit
{
    message: string;

    constructor(
        private trans: TranslatorService,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() { }

    login()
    {
        this.message = 'Trying to log in ...';

        this.authService.login().subscribe(() => {

            this.setMessage();

            if (this.authService.isLoggedIn)
            {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : config.appUrlPrefix + '/admin';

                // Redirect the user
                this.router.navigate([redirect]);
            }
        });
    }

    setMessage()
    {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }
}
