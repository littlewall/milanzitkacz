import {HeadFC, Link} from 'gatsby';
import {FC} from 'react';
import NavBar, {SocialsIcons} from '../components/layout/navbar/navbar';
import HeadSEO from '../components/layout/headSEO';
import Footer from '../components/layout/footer/footer';
import * as styles from './index.module.css';
import './layout.module.css';

const IndexPage: FC = () => (
    <>
        <NavBar isHome={true}/>
        <div className={styles.hero}>
            <div className={styles.background}>
                <div
                    className={styles.backgroundImage}
                    style={{backgroundImage: 'url("/images/portrait/home.png")'}}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.name}>
                    <h3>Milan Zítka</h3>
                </div>
                <span className={styles.job}>
                    Snílek, vypravěč a tvůrce v oblasti hudby a webového designu.&nbsp;
                    <br className={styles.desktopBreak}/>
                    Věřím, že příběh se dá vyprávět mnoha způsoby.
                </span>
                <Link className={styles.button} to="/kdo-jsem">
                    Prožijte ho se mnou
                </Link>
                <span className={styles.socials}>
                    <SocialsIcons/>
                </span>
            </div>
            <div className={styles.footer}>
                <Footer inline={true}/>
            </div>
        </div>
    </>
);

export default IndexPage;

export const Head: HeadFC = () => (
    <HeadSEO>
        <title>Milan Zítka - skladatel, zpěvák a web developer</title>
        <meta name="description" content="Jsem Milan Zítka, snílek a vypravěč, který se věnuje tvorbě v hudbě a web designu. Ve svém uměleckém světě vám představím, jak se příběhy mohou rozvíjet skrze mé melodie a designy. Poznejte můj přístup, kde každá nota a pixel vypráví jedinečný příběh."/>
        <link rel="canonical" href="https://milanzitka.cz"/>
    </HeadSEO>
);
