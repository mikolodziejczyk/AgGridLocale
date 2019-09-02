import { localeText_pl } from './pl';

export function getLocaleObject(locale: string) {
    // tslint:disable-next-line:no-unnecessary-initializer
    let r: any = undefined;

    if (locale.toLocaleLowerCase() === 'pl') {
        r = localeText_pl;
    }

    return r;
}