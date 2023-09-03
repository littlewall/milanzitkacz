import {FC} from 'react';
import {HeadFC} from 'gatsby';
import * as styles from './muzikaly.module.css';
import NavBar from '../../components/layout/navbar/navbar';
import Footer from '../../components/layout/footer/footer';
import Portfolio, {IPortfolioItem} from '../../components/portfolio/portfolio';
import HeadSEO from '../../components/layout/headSEO';

const items: IPortfolioItem[] = [
    // {
    //     image: '/images/hudba/yellow-world.webp',
    //     subheading: {
    //         cs: 'EP',
    //         en: 'EP',
    //     },
    //     heading: {
    //         cs: 'Yellow World',
    //         en: 'Yellow World',
    //     },
    //     text: {
    //         cs: 'Sbírka klavírních skladeb, které vznikaly postupně během let 2017-2022. Vychází z mých životních příběhů. Nepovažuji se za pianistu, přesto doufám, že má interpretace není úplně tragická.',
    //         en: 'A collection of piano compositions that were created gradually during the years 2017-2022. It is based on my life stories. I don\'t consider myself a pianist, yet I hope my interpretation is not completely tragic.',
    //     },
    //     noTopMargin: true,
    // },
    // {
    //     embed: `
    //         <lw-audio-player
    //             artist="Milan Zítka"
    //             cover="/images/yellow-world.jpg"
    //             playlist="Yellow World (EP, 2023)"
    //         >
    //             <lw-audio-player-song
    //                 url="/audio/milan-zitka_yellow_world.mp3"
    //                 title="Yellow World"
    //             ></lw-audio-player-song>
    //             <lw-audio-player-song
    //                 url="/audio/milan-zitka_yellow_world.mp3"
    //                 title="Dancin' my dream"
    //             ></lw-audio-player-song>
    //         </lw-audio-player>
    //     `,
    //     isFullWidth: true,
    //     noTopMargin: true,
    // },
    {
        image: '/images/muzikaly/mistr-jazzu.jpg',
        subheading: {
            cs: 'muzikál',
            en: 'musical',
        },
        heading: {
            cs: 'Mistr jazzu',
            en: 'Master of Jazz',
        },
        text: {
            cs: 'Má muzikálová prvotina coby autor hudby a textu. Hráli jsme v Karlovarském městském divadle v letech 2012 a 2013. I do takto malé produkce se mi podařilo propašovat živý orchestr. Na aranžích se spolupodílel Jindřich Volf ml. a Milan Krajíc. Níže naleznete pracovní nahrávky z představení.',
            en: 'My first musical as a music and lyrics author. We played in Karlovy Vary City Theatre in 2012 and 2013. I managed to smuggle a live orchestra into such a small production. Jindřich Volf ml. and Milan Krajíc contributed to the arrangements. Below you will find working recordings from the performance.',
        },
        isRight: true,
    },
    {
        embed: `
            <lw-audio-player
                artist="Mistr Jazzu"
                cover="/images/hudba/mistr-jazzu/playlist-cover.jpg"
                playlist="Mistr Jazzu - pracovní nahrávky" 
            >
                <lw-audio-player-song
                    url="/audio/mistr-jazzu/uvodni.mp3"
                    title="Úvodní"
                ></lw-audio-player-song>
                <lw-audio-player-song 
                    url="/audio/mistr-jazzu/amanthis-song.mp3"
                    title="Myšlenky Jima"
                ></lw-audio-player-song>
                <lw-audio-player-song 
                    url="/audio/mistr-jazzu/charleston.mp3"
                    title="Charleston"
                ></lw-audio-player-song>
                <lw-audio-player-song 
                    url="/audio/mistr-jazzu/myslenky-jima.mp3"
                    title="Myšlenky Jima"
                ></lw-audio-player-song>
                <lw-audio-player-song
                    url="/audio/mistr-jazzu/vecirek.mp3"
                    title="Večírek"
                ></lw-audio-player-song>
            </lw-audio-player>
        `,
        isFullWidth: true,
        noTopMargin: true,
    },
    {
        embed: `
            <lw-audio-player
                artist="Milan Zítka"
                cover="/images/hudba/playlist-cover-default.jpg"
                playlist="Smolíček (hudba k představení)"
            >
                <lw-audio-player-song
                    url="/audio/smolicek/vanocni-smes.mp3"
                    title="Vánoční směs"
                ></lw-audio-player-song>
                <lw-audio-player-song 
                    url="/audio/smolicek/den-preslavny.mp3"
                    title="Den přeslavný"
                ></lw-audio-player-song>
                <lw-audio-player-song 
                    url="/audio/smolicek/otcovo-tema.mp3"
                    title="Otcovo téma"
                ></lw-audio-player-song>
            </lw-audio-player>
        `,
        subheading: {
            cs: 'hudba k představení',
            en: 'music for the play',
        },
        heading: {
            cs: 'Smolíček',
            en: 'Smolíček',
        },
        text: {
            cs: 'Tato hudba vznikla pro vánoční verzi představení pro děti s názvem Smolíček. Kromě nadšených dětí byl nadšený i recenzent/redaktor z portálu i-divadlo.cz.',
            en: 'This music was created for the Christmas version of the play for children called Smolíček. In addition to the enthusiastic children, the reviewer / editor from the i-divadlo.cz portal was also enthusiastic.',
        },
        verticalReverse: true,
    },
];

const HudbaPage: FC = () => (
    <>
        <NavBar/>
        <div className={styles.page}>
            <div className={styles.content}>
                <h1 className={styles.heading}>
                    Hudba
                </h1>
                <p className={styles.text}>
                    Hudbě se věnuji od dětství. Začalo to hrou na piáno, pokračovalo přes populární zpěv a skončilo skladbou.
                    I když si občas rád zazpívám, nejvíce mě baví skládat. Většinou písně, ale i instrumentální skladby.
                    Většinou pro sebe, ale i pro jiné. Většinou pro zábavu, ale i pro zamyšlení. Většinou z radosti, ale i ze smutku.
                </p>
                <Portfolio items={items}/>
            </div>
        </div>
        <Footer/>
    </>
);

export default HudbaPage;

export const Head: HeadFC = () => (
    <HeadSEO>
        <title>O mých skladatelských pokusech | Milan Zítka</title>
        <script src="https://cdn.jsdelivr.net/npm/@lwdev/audio-player@latest" type="module"></script>
    </HeadSEO>
);
