import { Injectable }               from '@angular/core';
import { Translation }              from './translation.model';
import { TranslationCollection }    from './translation-collection.model';


declare var System: any;

/**
 *  Services to get translator
 */
@Injectable()
export class TranslatorService
{
    private locale: string = document['locale'] as string;
    private collections: TranslationCollection[] = [];
    private isLoading: boolean = false;

    /**
     * Load translations files
     *
     * @param       moduleName        Module name to load translations, if module if empty, record TranslationCollection with root index
     * @param       checkOverload     Flag to manage overload, and first angular 2 load, are many request, by hooks lifecycle, to render views, this request cause overload, if we don't control
     * @returns     {null}
     */
    private load(
        moduleName: string, checkOverload: boolean
    )
    {
        if(this.isLoading && checkOverload)
            return null;

        let routeModule = '';
        if(moduleName !== 'root')
            routeModule = moduleName + '/';

        if(checkOverload)
            this.isLoading = true;

        System.import(System.baseURL + 'app/' + routeModule + 'translations/' + this.locale).then((response) => {

            // Search translationCollection in collections array
            var isFound = false;
            this.collections.find((translationCollection: TranslationCollection, index) => {
                if(translationCollection.module === moduleName )
                {
                    this.collections[index] = ({ module: moduleName, translations: response.translations } as TranslationCollection);
                    return isFound = true;
                }
            });

            // Add new translationCollection
            if(! isFound)
                this.collections.push({ module: moduleName, translations: response.translations } as TranslationCollection);

            if(checkOverload)
                this.isLoading = false;
        });
    }

    /**
     * Function to get translation from a kay
     *
     * @param       key
     * @returns     {string}
     */
    public get(key: string): string
    {
        // console.log('do request');

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

        var translationCollection = this.collections.find((translationCollection: TranslationCollection) => { return translationCollection.module == moduleName });

        if(translationCollection)
        {
            var translation: Translation = translationCollection.translations.find((translation: Translation) => { return translation.key === index });

            return translation.value;
        }
        else
        {
            this.load(moduleName, true);
        }
    }

    /**
     * Function to change lang
     *
     * @param lang
     */
    public change(lang: string)
    {
        this.locale = lang;

        for(let translationCollection of this.collections)
        {
            this.load(translationCollection.module, false);
        }
    }
}