import {FC} from 'react';
import {HeadFC} from 'gatsby';
import * as styles from './muzikaly.module.css';
import NavBar from '../../components/layout/navbar/navbar';
import Footer from '../../components/layout/footer/footer';
import Portfolio, {IPortfolioItem} from '../../components/portfolio/portfolio';
import HeadSEO from '../../components/layout/headSEO';
import {useTranslation} from '../../lib/translation/useTranslation';

const items: IPortfolioItem[] = [
    {
        image: '/images/muzikaly/bidnici.jpg',
        subheading: {
            cs: 'company',
            en: 'company',
        },
        heading: {
            cs: 'Les Misérables - Bídníci',
            en: 'Les Misérables',
        },
        text: {
            cs: 'Má první velká divadelní zkušenost a hned to nejlepší dílo. Největší malá role byla zloděj Montparnasse, ale celkem jsem měl asi deset převleků - od galejníka, přes chudáka a studenta až po svatebčana.',
            en: 'My first big theatre experience and immediately the best musical. The biggest small role was the thief Montparnasse, but I had about ten costumes in total - from a galley slave, through a pauper and a student to a wedding guest.',
        },
    },
    {
        image: '/images/muzikaly/mistr-jazzu.jpg',
        subheading: {
            cs: 'autor hudby a textů / Vypravěč',
            en: 'music and lyrics / Narrator',
        },
        heading: {
            cs: 'Mistr jazzu',
            en: 'Master of Jazz',
        },
        text: {
            cs: 'Má muzikálová prvotina coby autor hudby a textu. Hráli jsme v Karlovarském městském divadle. Příběh na motivy povídky F. S. Fitzgeralda jsem zpracoval do jednoaktové hry, kterou nastudovali žáci a učitelé ZUŠ Karlovy Vary - Rybáře.',
            en: 'My first musical as a music and lyrics author. We played in Karlovy Vary City Theatre. I adapted the story based on F. S. Fitzgerald\'s short story into a one-act play, which was staged by students and teachers of the Karlovy Vary Conservatory - Rybáře.',
        },
        button: {
            text: {
                cs: 'Poslechnout ukázky',
                en: 'Listen to samples',
            },
            url: '/co-delam/hudba#mistr-jazzu',
            isExternal: false,
        },
        isRight: true,
    },
    {
        image: '/images/muzikaly/monte-cristo.jpg',
        subheading: {
            cs: 'company / Morcerf ml.',
            en: 'company / Morcerf (young version)',
        },
        heading: {
            cs: 'Monte Cristo',
            en: 'Monte Cristo',
        },
        text: {
            cs: 'Poloprofesionální nastudování velkolepého díla v Divadle U Hasičů. Zahrál jsem si mladého Morcerfa, který se zamiluje do Mercedes, ale ta ho opustí pro Edmonda. Také jsem si užil několik menších rolí v rámci company.',
            en: 'A semi-professional staging of a magnificent work at the U Hasičů Theatre. I played the young Morcerf, who falls in love with Mercedes, but she leaves him for Edmund. I also enjoyed several smaller roles within the company.',
        },
    },
    {
        image: '/images/muzikaly/rent.jpg',
        subheading: {
            cs: 'company',
            en: 'company',
        },
        heading: {
            cs: 'RENT',
            en: 'RENT',
        },
        text: {
            cs: 'Tohle byl můj další splněný sen - zahrát si v Divadle Kalich v muzikálu, který snad nejde nemilovat. V rámci company jsem ztvárnil několik menších rolí. No day but today!',
            en: 'This was another fulfilled dream - to play in the Kalich Theatre in a musical that you cannot love. Within the company, I played several smaller roles. No day but today!',
        },
        isRight: true,
    },
    {
        image: '/images/muzikaly/fantom-opery.jpg',
        subheading: {
            cs: 'swing',
            en: 'swing',
        },
        heading: {
            cs: 'Fantom opery',
            en: 'The Phantom of the Opera',
        },
        text: {
            cs: 'Třetí světové dílo v mém životě. Poprvé jsem si v plném rozsahu vyzkoušel pozici swinga, začinal jsem s pěti rolemi, nakonec jsem si kromě Passarina vyzkoušel všechny mužské role v rámci company. Fantoma jsem si v GoJa Music Hall zahrál celkem 243x.',
            en: 'The third world-class musical in my life. For the first time, I fully experienced the position of a swing, starting with five roles, and in the end I tried all men\'s roles within the company except Passarino. I played the Phantom a total of 243 times at GoJa Music Hall.',
        },
    },
    {
        image: '/images/muzikaly/ples-upiru.jpg',
        subheading: {
            cs: 'swing',
            en: 'swing',
        },
        heading: {
            cs: 'Ples upírů',
            en: 'Dance of the Vampires',
        },
        text: {
            cs: 'Poslední muzikál coby herec. Možná zatím? Určitě nejnáročnější dílo, plné choreografií a náročných pěveckých partů. Opět jsem se vrhl do role swinga a postupně si vyzkoušel doslova všechny mužské role v rámci company.',
            en: 'The last musical as an actor. Maybe for now? Definitely the most demanding work, full of choreography and challenging singing parts. Again, I took on the role of a swing and gradually tried literally all men\'s roles within the company.',
        },
        isRight: true,
    },
    {
        image: '/images/muzikaly/co-kdyz.jpg',
        subheading: {
            cs: 'autor hudby a textů',
            en: 'music and lyrics',
        },
        heading: {
            cs: 'Co když...?',
            en: 'What if...?',
        },
        text: {
            cs: 'Muzikál ve vývoji. Hotová je první verze scénáře, hudby i textů. V současné době se chystá nahrávání konceptového EP. Jedna z písniček měla svou světovou premiéru v londýnském The Other Palace. Více informací najdete na stránkách muzikálu.',
            en: 'A musical in development. The first version of the script, music and lyrics is finished. Currently, a concept EP is being prepared. One of the songs had its world premiere at The Other Palace in London. More information can be found on the musical\'s website.',
        },
        button: {
            text: {
                cs: 'Navštívit stránky muzikálu',
                en: 'Visit the musical\'s website',
            },
            url: 'https://cokdyzmuzikal.cz',
            isExternal: true,
        },
    },
];

const MuzikalyPage: FC = () => {
    const translate = useTranslation('musicals.content');

    return (
        <>
            <NavBar/>
            <div className={styles.page}>
                <div className={styles.content}>
                    <h1 className={styles.heading}>
                        {translate('heading')}
                    </h1>
                    <p className={styles.text}>
                        {translate('description')}
                    </p>
                    <Portfolio items={items}/>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default MuzikalyPage;

export const Head: HeadFC = () => {
    const translate = useTranslation('musicals.meta');

    return (
        <HeadSEO>
            <title>{translate('title')}</title>
            <meta name="description" content={translate('description')} />
            <link rel="canonical" href="https://milanzitka.cz/co-delam/muzikaly"/>
        </HeadSEO>
    );
};
