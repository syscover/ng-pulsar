import { Injectable }       from '@angular/core';
import { Http, Response }   from '@angular/http';

import { Observable }       from 'rxjs/Observable';

import { Action }           from './action.model';

import config               = require('../../shared/app-globals');

@Injectable()
export class ActionService {

    private apiRestUrl = config.apiUrlPrefix + '/admin/actions';

    constructor(
        private http: Http
    ) { }

    // function with Observable
    getRecords(): Observable<Action[]>
    {
        return this.http
            .get(this.apiRestUrl)
            .map((response: Response) => response.json().data as Action[])
            .catch(this.handleError);
    }

    // function with Promise
    getRecords2 (): Promise<Action[]>
    {
        return this.http
            .get(this.apiRestUrl)
            .toPromise()
            .then(response => response.json().data as Action[])
            .catch(this.handleError);
    }

    private extractData(res: Response)
    {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any)
    {
        let errorMsg = (error.message) ?
            error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';

        console.error(errorMsg);

        return Observable.throw(errorMsg);
    }
}