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

    getRecords(): Promise<Action[]>
    {
        return this.http
            .get(this.apiRestUrl)
            .toPromise()
            .then(response => response.json().data as Action[])
            .catch(this.handleError);
    }

    getRecord(id: string): Promise<Action>
    {
        return this.getRecords()
            .then(actions => actions.find(action => action.id_008 === id));
    }

    private handleError (error: any)
    {
        let errorMsg = (error.message) ?
            error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';

        console.error(errorMsg);

        return Observable.throw(errorMsg);
    }

    //****************************************
    //* Operations examples with observables
    //****************************************
    getRecords_ob(): Observable<Action[]>
    {
        return this.http
            .get(this.apiRestUrl)
            .map((response: Response) => response.json().data as Action[])
            .catch(this.handleError);
    }

    // get data from elements without model
    private extractData(res: Response)
    {
        let body = res.json();
        return body.data || { };
    }
}