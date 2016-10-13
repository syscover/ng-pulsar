export abstract class Core
{
    applyMixins(derivedCtor: any, baseCtors: any[])
    {
        baseCtors.forEach(baseCtor => {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });
    }
}

export abstract class Translator
{
    trans(): string
    {
        return 'lanza el mensaje from abstract class 3';
    }
}