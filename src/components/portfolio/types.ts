import type {SupportedLanguage, TranslationValue} from '../../lib/translation/i18nTypes';

export interface PortfolioItem {
    image?: string,
    links?: {id: string, title: string}[],
    subheading?: TranslationValue,
    heading?: TranslationValue,
    text?: TranslationValue,
    isRight?: boolean,
    embed?: string,
    isFullWidth?: boolean,
    verticalReverse?: boolean,
    noTopMargin?: boolean,
    button?: {
        text: TranslationValue,
        url: string,
        isExternal?: boolean,
    },
}
export interface PortfolioProps {
    items: PortfolioItem[],
    lang?: SupportedLanguage,
}
