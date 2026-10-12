export type SupportedLanguage = 'cs' | 'en';
export const supportedLanguages = ['cs', 'en'] as const;

export type TranslationValue = {
    [lang in SupportedLanguage]: string;
};

export type TranslationContent = TranslationValue | {[key: string]: TranslationContent};
export interface PageTranslations {
    meta: {
        title: TranslationValue,
        description: TranslationValue,
    },
    content: {[key: string]: TranslationContent},
}
