import { Component, OnInit }    from '@angular/core';

import { Core, Translator }     from "./shared/inheritable-core.component";

@Component({
    selector: 'pulsar-app',
    templateUrl: 'ng-pulsar/app/app.component.html'
})

// por que funciona? el mixin no estaría solo permitido en tiempo de declaración???

export class AppComponent extends Core implements Translator, OnInit
{
    title: string = 'NG PULSAR';

    ngOnInit()
    {
        this.applyMixins(AppComponent, [Translator]);
    }
}
