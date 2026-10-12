import type {PortfolioItem} from '../components/portfolio/types';

const items: PortfolioItem[] = [
    {
        links: [
            {
                id: 'mistr-jazzu-uvodni',
                title: 'Úvodní',
            },
            {
                id: 'mistr-jazzu-amanthis-song',
                title: 'Amanthis song',
            },
            {
                id: 'mistr-jazzu-myslenky-jima',
                title: 'Myšlenky Jima',
            },
        ],
        subheading: {
            cs: 'muzikál',
            en: 'musical',
        },
        heading: {
            cs: 'Mistr jazzu',
            en: 'Master of Jazz',
        },
        text: {
            cs: 'Má muzikálová prvotina coby autor hudby a textu. Muzikál jsem napsal na motivy povídky F. S. Fitzgeralda "Kostky, boxery a kytara". Jednalo se o malou produkci, která se hrála v Karlovarském městském divadle v letech 2012 a 2013. ',
            en: 'My first musical as a music and lyrics author. I wrote the musical based on F. S. Fitzgerald\'s short story "The Dice, the Boxers, and the Guitar". It was a small production that was performed at the Karlovy Vary City Theatre in 2012 and 2013.',
        },
        verticalReverse: true,
    },
    {
        links: [
            {
                id: 'covers-co-vic-ti-muzu-dat',
                title: 'Co víc ti můžu dát (To make you feel my love)',
            },
            {
                id: 'covers-jsi-ted-tam-kde-touzis-byt',
                title: 'Jsi teď tam, kde toužíš být? (Rose)',
            },
        ],
        subheading: {
            cs: '',
            en: '',
        },
        heading: {
            cs: 'Coververze',
            en: 'Cover versions',
        },
        text: {
            cs: 'Přebásnění písní od jiných autorů. Většina vznikla pro mé vlastní potřeby v rámci aktuálních rozpoložení. Některé z nich jsem nahrál a naleznete je na mém YouTube kanálu.',
            en: 'Translation of songs by other authors. Most were created for my own needs within the framework of current moods. I have recorded some of them and you can find them on my YouTube channel.',
        },
        isRight: true,
        verticalReverse: true,
    },
    {
        links: [
            {
                id: 'mala-morska-vila-part-of-your-world',
                title: 'Part of your world',
            },
            {
                id: 'mala-morska-vila-under-the-sea',
                title: 'Under the sea',
            },
            {
                id: 'mala-morska-vila-kiss-the-girl',
                title: 'Kiss the girl',
            },
        ],
        subheading: {
            cs: 'muzikál',
            en: 'musical',
        },
        heading: {
            cs: 'Malá mořská víla (Junior)',
            en: 'The Little Mermaid (Junior)',
        },
        text: {
            cs: 'Překlad dětské verze muzikálu Malá mořská víla. Můj dosud největší projekt v oblasti překladu. Také bylo docela náročné se odprostit od původního překladu a přinést něco nového',
            en: 'Translation of the junior version of the musical The Little Mermaid. My biggest project in the field of translation so far. It was also quite challenging to detach myself from the original translation and bring something new',
        },
        verticalReverse: true,
    },
];

export default items;
