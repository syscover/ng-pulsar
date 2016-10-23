import { Component, OnInit }                from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { ActionService }                    from './action.service';
import { Action }                           from './action.model';

import { TranslatorService }                from '../../shared/translator/translator.service';

@Component({
    moduleId: module.id,
    templateUrl: 'action-list.component.html'
})

export class ActionListComponent implements OnInit
{
    errorMessage: string;
    actions: Action[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private trans: TranslatorService,
        private actionService: ActionService
    ) {}

    ngOnInit()
    {
        this.getRecords();
    }

    getRecords(): void
    {
        this.actionService.getRecords()
            .then(
                actions => this.actions = actions,
                error   => this.errorMessage = <any>error
            );
    }

    // function no used, replace by [routerLink]="[action.id_008]" in action-list.component.html
    onSelect(action: Action): void
    {
        this.router.navigate([action.id_008], { relativeTo: this.route });

        //console.log('with promise');
        // this.actionService.getRecord(action.id_008)
        //     .then(
        //         actions => this.actions = actions,
        //         error   => this.errorMessage = <any>error
        //     );
    }


    //****************************************
    //* Operations examples with observables
    //****************************************
    getRecords_ob(): void
    {
        this.actionService.getRecords_ob()
            .subscribe(
                actions => this.actions = actions,
                error   => this.errorMessage = <any>error
            );
    }
}
