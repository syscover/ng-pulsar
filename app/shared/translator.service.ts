import { Injectable }   from '@angular/core';

declare const System: any;

@Injectable()
export class TranslatorService {

    private locale = document['locale'] as string;
    private collections: Object[] = [];
    private isLoading: boolean = false;

    private load(
        moduleName: string
    )
    {
        if(this.isLoading)
            return null;

        let routeModule = '';
        if(moduleName !== 'root')
            routeModule = moduleName + '/';

        this.isLoading = true;
        System.import(System.baseURL + 'app/' + routeModule + 'translations/' + document['locale']).then((response) => {
            this.collections[moduleName] = response.collection;
            this.isLoading = false;
        });
    }

    get(key: string): string
    {
        let index       = null;
        let moduleName  = null;

        if(key.indexOf('::') !== -1)
        {
            index       = key.substring(key.indexOf('::') + 2, key.length);
            moduleName  = key.substring(0, key.indexOf('::'));
        }
        else
        {
            index       = key;
            moduleName  = 'root';
        }

        if(moduleName in this.collections)
        {
            return this.collections[moduleName][index];
        }
        else
        {
            this.load(moduleName);
        }
    }
}