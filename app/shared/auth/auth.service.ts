import { Injectable } from '@angular/core';

import { Cookie } from 'ng2-cookies/ng2-cookies';

import { Observable } from 'rxjs/Observable';

var CryptoJS = require("crypto-js");

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    login(): Observable<boolean>
    {


        let text = CryptoJS.AES.encrypt(JSON.stringify({auth:true}), '33527667Sb');
        console.log(text.toString());

        Cookie.set('pulsar_session', text.toString());


        let variable = Cookie.get('pulsar_session');



        // Decrypt
        var bytes  = CryptoJS.AES.decrypt(variable, '33527667Sb');
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        console.log(decryptedData);

        return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    }

    logout(): void
    {
        this.isLoggedIn = false;
    }
}

