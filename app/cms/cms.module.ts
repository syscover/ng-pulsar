import { NgModule }                     from '@angular/core';

import { SharedModule }                 from '../shared/shared.module';

import { CmsRoutingModule }             from './cms-routing.module';

import { ArticleListComponent }         from './articles/article-list.compoment';

@NgModule({
    imports: [
        SharedModule,
        CmsRoutingModule
    ],
    declarations: [
        ArticleListComponent
    ],
    bootstrap: []
})

export class CmsModule { }