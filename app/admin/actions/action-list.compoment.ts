import { Component, OnInit }    from '@angular/core';

import { ActionService }        from './action.service';
import { Action }               from './action.model';

@Component({
    moduleId: module.id,
    //selector: 'pulsar-actions-list',
    templateUrl: 'action-list.component.html'
})

export class ActionListComponent implements OnInit
{
    errorMessage: string;
    actions: Action[];

    constructor(
        private actionService: ActionService
    ) { }

    ngOnInit()
    {
        this.getRecords();
    }

    getRecords(): void
    {
        console.log('with observables');

        this.actionService.getRecords()
            .subscribe(
                actions => this.actions = actions,
                error   => this.errorMessage = <any>error
            );
    }

    getRecords2(): void
    {
        console.log('with promise');

        this.actionService.getRecords2()
            .then(
                actions => this.actions = actions,
                error   => this.errorMessage = <any>error
            );
    }
}