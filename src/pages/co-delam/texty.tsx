import {
    FC,
    useEffect,
    useRef,
    useState,
} from 'react';
import {HeadFC} from 'gatsby';
import * as styles from './texty.module.css';
import NavBar from '../../components/layout/navbar/navbar';
import Footer from '../../components/layout/footer/footer';
import Portfolio, {IPortfolioItem} from '../../components/portfolio/portfolio';
import HeadSEO from '../../components/layout/headSEO';
import texts from '../../data/texts/texts';

const getLinkList = (links: {
    id: string,
    title: string,
}[], onClick: (id: string) => void) => (
    <ul className={styles.linkList}>
        {links.map(link => (
            <li
                key={link.id}
                className={styles.linkListItem}
            >
                <button
                    onClick={() => onClick(link.id)}
                >
                    {link.title}
                </button>
            </li>
        ))}
    </ul>
);

const getItems = (onClick: (id: string) => void): IPortfolioItem[] => ([
    {
        component: (
            <>
                {getLinkList(
                    [
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
                    onClick,
                )}
            </>
        ),
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
            en: '',
        },
        verticalReverse: true,
    },
    {
        component: (
            <>
                {getLinkList(
                    [
                        {
                            id: 'covers-co-vic-ti-muzu-dat',
                            title: 'Co víc ti můžu dát (To make you feel my love)',
                        }, {
                            id: 'covers-jsi-ted-tam-kde-touzis-byt',
                            title: 'Jsi teď tam, kde toužíš být? (Rose)',
                        },
                    ],
                    onClick,
                )}
            </>
        ),
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
            en: '',
        },
        isRight: true,
        verticalReverse: true,
    },
    {
        component: (
            <>
                {getLinkList(
                    [
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
                    onClick,
                )}
            </>
        ),
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
            en: '',
        },
        verticalReverse: true,
    },
]);

const TextyPage: FC = () => {
    const [active, setActive] = useState('');
    const [, setIsModalOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const onClick = (id: string) => {
        setActive(id);
        setIsModalOpen(true);

        if (modalRef.current) {
            modalRef.current.style.display = 'block';
            modalRef.current.scrollTop = 0;
        }
    };

    return (
        <>
            <NavBar/>
            <div className={styles.page}>
                <div className={styles.content}>
                    <h1 className={styles.heading}>
                        Texty
                    </h1>
                    <p className={styles.text}>
                        Písňové texty jsem začal psát asi ve stejné době jako hudbu. Většinou jsem je psal
                        pro své písně, ale někdy jsem se pustil i do překladů. Velkou část mé textové tvorby
                        patří muzikálům - ať už původním, nebo překladům.
                    </p>
                    <Portfolio items={getItems(onClick)}/>
                </div>
            </div>
            <div className={styles.modal} ref={modalRef}>
                <span
                    className={styles.close}
                    onClick={() => {
                        setIsModalOpen(false);

                        if (modalRef.current) {
                            modalRef.current.style.display = 'none';
                        }
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="35px"
                        height="45px"
                    >
                        <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" fill="#fff"/>
                    </svg>
                </span>
                <div className={styles.modalContent}>
                    {texts[active]}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default TextyPage;

export const Head: HeadFC = () => (
    <HeadSEO>
        <title>O mém básnickém střevu | Milan Zítka</title>
        <meta name="description" content="Písňové texty jsou pro mě součástí hudebního vyjádření - od vlastních písní až po práci na muzikálech. Můj repertoár zahrnuje jak originální texty, tak překlady, každý s jeho vlastním příběhem a emocí." />
    </HeadSEO>
);
