import { Injectable }       from '@angular/core';

import { Observable }       from 'rxjs/Observable';

import { SessionService }   from '../session/session.service';

@Injectable()
export class AuthService
{
    // store the URL so we can redirect after logging in
    redirectUrl: string;

    login(): Observable<boolean>
    {
        return Observable.of(true)
            .delay(1000)
            .do(val => SessionService.set('auth', true));
    }

    logout(): void
    {
        SessionService.delete('auth');
    }

    check()
    {
        return SessionService.get('auth');
    }
}

