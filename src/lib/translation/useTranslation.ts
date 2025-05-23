import {useLanguage} from './languageContext';
import {createTranslator} from './translations';

// eslint-disable-next-line import/prefer-default-export
export const useTranslation = (
    prefix?: string,
): ((path: string, params?: Record<string, string>) => string
) => {
    const {language} = useLanguage();
    const baseTranslate = createTranslator(language);

    if (!prefix) return baseTranslate;

    return (path: string, params?: Record<string, string>) => baseTranslate(`${prefix}.${path}`, params);
};
