import { NgModule }                     from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';

import { ArticleListComponent }         from './articles/article-list.compoment';

const routes: Routes = [
    { path: '', redirectTo: 'articles', pathMatch: 'full' },

    // Article
    { path: 'articles',        component: ArticleListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CmsRoutingModule {}
