import {TranslationValue} from '../lib/translation/i18nTypes';

export interface CommonMessages {
    navbar: {
        whoAmI: TranslationValue,
        whatIDo: TranslationValue,
        musicals: TranslationValue,
        music: TranslationValue,
        lyrics: TranslationValue,
        currentProjects: TranslationValue,
        contact: TranslationValue,
        whatsNewMusical: TranslationValue,
    },
}

const common: CommonMessages = {
    navbar: {
        whoAmI: {
            cs: 'Kdo jsem',
            en: 'Who am I',
        },
        whatIDo: {
            cs: 'Co dělám',
            en: 'What I do',
        },
        musicals: {
            cs: 'Muzikály',
            en: 'Musicals',
        },
        music: {
            cs: 'Hudba',
            en: 'Music',
        },
        lyrics: {
            cs: 'Texty',
            en: 'Lyrics',
        },
        currentProjects: {
            cs: 'Aktuálně',
            en: 'Current projects',
        },
        contact: {
            cs: 'Kontakt',
            en: 'Contact',
        },
        whatsNewMusical: {
            cs: 'Co když? (muzikál)',
            en: 'What if? (musical)',
        },
    },
};

export default common;
