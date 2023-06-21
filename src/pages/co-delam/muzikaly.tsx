import {FC} from 'react';
import {HeadFC} from 'gatsby';
import * as styles from './muzikaly.module.css';
import NavBar from '../../components/layout/navbar/navbar';
import Footer from '../../components/layout/footer/footer';
import Portfolio, {IPortfolioItem} from '../../components/portfolio/portfolio';
import HeadSEO from '../../components/layout/headSEO';

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
            en: '',
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
            en: '',
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
            en: '',
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
            cs: 'Muzikál, který teprve vzniká. Jedná se o původní příběh, což je pro mě velká výzva, protože jsem zvyklý pracovat spíše s předlohou. V současné době je hotová kostra příběhu a několik písní. Více informací brzy.',
            en: 'A musical that is only just being created. It is an original story, which is a big challenge for me, because I am used to work with a template. At present, the skeleton of the story and several songs are ready. More information soon.',
        },
    },
];

const MuzikalyPage: FC = () => (
    <>
        <NavBar/>
        <div className={styles.page}>
            <div className={styles.content}>
                <h1 className={styles.heading}>
                    Muzikály
                </h1>
                <p className={styles.text}>
                    Už od prvního muzikálu, který jsem viděl v Praze, jsem věděl,
                    že tohle je to, co chci dělat. Jako autor jsem rád, že jsem si muzikál
                    zkusil &quot;z druhé strany&quot;. Inspiraci pravidelně jezdím chytat na londýnský West End. Na cestě jsem se potkal s mnoha skvělými lidmi.
                    Někteří z nich jsou dnes hvězdy, jiní jsou už jen vzpomínkou. Ale všichni jsou pro mě inspirací.
                </p>
                <Portfolio items={items}/>
            </div>
        </div>
        <Footer/>
    </>
);

export default MuzikalyPage;

export const Head: HeadFC = () => (
    <HeadSEO>
        <title>O mém putování muzikály | Milan Zítka</title>
    </HeadSEO>
);
