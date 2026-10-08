import aboutme from '../../translations/aboutme';
import common from '../../translations/common';
import contact from '../../translations/contact';
import current from '../../translations/current';
import home from '../../translations/home';
import music from '../../translations/music';
import musicals from '../../translations/musicals';
import texts from '../../translations/texts';
import whatido from '../../translations/whatido';
import {SupportedLanguage} from './i18nTypes';

const messages = {
    current,
    contact,
    music,
    musicals,
    texts,
    aboutme,
    whatido,
    home,
    common,
};

export const getMessage = (language: SupportedLanguage, path: string, params: Record<string, string> = {}): string => {
    const result = path.split('.').reduce<unknown>((acc, part) => {
        if (acc && typeof acc === 'object' && part in acc) {
            return (acc as Record<string, unknown>)[part];
        }

        return undefined;
    }, messages);

    if (result && typeof result === 'object' && language in result) {
        const value = (result as Record<string, unknown>)[language];

        if (typeof value === 'string') {
            return value.replace(/\{(\w+)\}/g, (_: string, key: string) => params[key] || `{${key}}`);
        }
    }

    return path;
};

type Translator = (path: string, params?: Record<string, string>) => string;

export const createTranslator = (language: SupportedLanguage): Translator => (path, params) => getMessage(language, path, params);
