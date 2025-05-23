import {SupportedLanguage, TranslationValue} from './i18nTypes';
import current from '../../translations/current';
import contact from '../../translations/contact';
import music from '../../translations/music';
import musicals from '../../translations/musicals';
import texts from '../../translations/texts';
import aboutme from '../../translations/aboutme';
import whatido from '../../translations/whatido';
import home from '../../translations/home';
import common from '../../translations/common';

// Helper to get translation from TranslationValue
function getTranslationValue(value: TranslationValue, language: SupportedLanguage): string {
    return value[language];
}

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

export function getMessage(language: SupportedLanguage, path: string, params: Record<string, string> = {}): string {
    const pathParts = path.split('.');
    const result = pathParts.reduce((acc, part) => {
        if (acc && typeof acc === 'object' && part in acc) {
            return acc[part];
        }

        return undefined;
    }, messages as any);

    if (result && typeof result === 'object' && language in result) {
        const str = getTranslationValue(result, language);

        return str.replace(/\{(\w+)\}/g, (_: string, key: string) => params[key] || `{${key}}`);
    }

    return path;
}

export function createTranslator(language: SupportedLanguage): (path: string, params?: Record<string, string>) => string {
    return (path: string, params?: Record<string, string>) => getMessage(language, path, params);
}
