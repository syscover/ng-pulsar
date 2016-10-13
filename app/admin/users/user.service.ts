import { Injectable }       from '@angular/core';
import { Http, Headers }    from '@angular/http';

@Injectable()
export class UserService {

    private loggedIn = false;

    constructor(private http: Http) {

    }
}