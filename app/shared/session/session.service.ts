import { Injectable }   from '@angular/core';

import { Cookie }       from 'ng2-cookies/ng2-cookies';

import config           = require('../app-globals');
var CryptoJS            = require('crypto-js');

@Injectable()
export class SessionService
{
    private static cookieName = 'pulsar_session';

    public static set(name: string, value: any): void
    {
        let encryptValue    = Cookie.get('pulsar_session');
        let pulsarSession   = {};

        if(encryptValue !== '')
        {
            pulsarSession   = JSON.parse(CryptoJS.AES.decrypt(encryptValue, config.key).toString(CryptoJS.enc.Utf8));
        }

        pulsarSession[name] = value;

        encryptValue = CryptoJS.AES.encrypt(JSON.stringify(pulsarSession), config.key);

        Cookie.set(SessionService.cookieName, encryptValue, 1, '/');
        sessionStorage.setItem(SessionService.cookieName, encryptValue);
    }

    public static get(name: string): any
    {
        let encryptValue    = Cookie.get(SessionService.cookieName);

        if(encryptValue === '')
            return null;

        let pulsarSession   = JSON.parse(CryptoJS.AES.decrypt(encryptValue, config.key).toString(CryptoJS.enc.Utf8));

        if(typeof pulsarSession[name] === 'undefined')
        {
            return null;
        }
        else
        {
            return pulsarSession[name];
        }
    }

    public static delete(name: string): boolean
    {
        let encryptValue    = Cookie.get(SessionService.cookieName);

        if(encryptValue === '')
            return false;

        let pulsarSession   = JSON.parse(CryptoJS.AES.decrypt(encryptValue, config.key).toString(CryptoJS.enc.Utf8));

        if(typeof pulsarSession[name] === 'undefined')
        {
            return false;
        }
        else
        {
            delete pulsarSession[name];

            encryptValue = CryptoJS.AES.encrypt(JSON.stringify(pulsarSession), config.key);

            Cookie.set(SessionService.cookieName, encryptValue, 1, '/');

            return true;
        }
    }

    public static destroy(): void
    {
        Cookie.delete(SessionService.cookieName);
    }

    public static has(name: string): boolean
    {
        let encryptValue = Cookie.get(SessionService.cookieName);

        if(encryptValue === '')
            return false;

        let pulsarSession = JSON.parse(CryptoJS.AES.decrypt(encryptValue, config.key).toString(CryptoJS.enc.Utf8));

        return typeof pulsarSession[name] === 'undefined';
    }

    public static all(): Object
    {
        let encryptValue    = Cookie.get(SessionService.cookieName);

        if(encryptValue === '')
            return null;

        let pulsarSession   = JSON.parse(CryptoJS.AES.decrypt(encryptValue, config.key).toString(CryptoJS.enc.Utf8));

        if(typeof pulsarSession[name] === 'undefined')
        {
            return null;
        }
        else
        {
            return pulsarSession;
        }
    }
}