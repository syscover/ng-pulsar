import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { ActionService }            from './action.service';
import { Action }                   from './action.model';

import { TranslatorService }        from '../../shared/translator/translator.service';
import { MiddlewareService }        from "../../shared/middleware.service";

@Component({
    moduleId: module.id,
    templateUrl: 'action-detail.component.html',
    providers: [ MiddlewareService ]
})

export class ActionDetailComponent implements OnInit {

    action: Action;

    constructor(
        private route: ActivatedRoute,
        private actionService: ActionService,
        private trans: TranslatorService,
        private middleeareService: MiddlewareService
    ) { }

    ngOnInit()
    {
        this.route.params.forEach((params: Params) => {
            this.actionService.getRecord(params['id'])
                .then(action => this.action = action);
        });
    }
}