import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pulsar-app',
    templateUrl: 'ng-pulsar/app/app.component.html'
})

export class AppComponent implements OnInit {

    lang: {};
    title: string = 'NG PULSAR';
    //lang    =  require('./lab-lang/' + document['locale']);
    //lang    =  import {object} from ('./lab-lang/es');

    ngOnInit()
    {
        //this.lang = require('./lab-lang/' + document['locale']);
    }

    getValue(){
        return 'hola mundo';
    }
}