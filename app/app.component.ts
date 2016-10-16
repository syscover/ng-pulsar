import { Component }        from '@angular/core';

import { TranslatorService }    from './shared/translator.service';

@Component({
    selector: 'pulsar-app',
    templateUrl: 'ng-pulsar/app/app.component.html'
})

export class AppComponent
{
    title: string = 'NG PULSAR';

    constructor(
        private trans: TranslatorService
    ){}
}
