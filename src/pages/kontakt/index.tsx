import type {HeadFC} from 'gatsby';
import {FC} from 'react';
import NavBar, {SocialsIcons} from '../../components/layout/navbar/navbar';
import HeadSEO from '../../components/layout/headSEO';
import Footer from '../../components/layout/footer/footer';
import * as styles from './index.module.css';
import '../layout.module.css';
import content from '../../Globals';

const ContactPage: FC = () => (
    <>
        <NavBar isHome={true}/>
        <div className={styles.page}>
            <div className={styles.background}>
                <div
                    className={styles.backgroundImage}
                    style={{backgroundImage: 'url("/images/portrait/contact.png")'}}
                />
            </div>
            <div className={styles.content}>
                <h2>Vždy jsem otevřený novým příběhům!</h2>
                <p>
                    Máte-li v hlavě nebo na papíře projekt, se kterým bych mohl pomoct, případně mě chcete
                    jen pozdravit či vznést dotaz, stačí poslat e-mail na uvedenou adresu,
                    nebo mě navštívit na jedné ze sociálních platforem.
                </p>
                <a className={styles.email} href="mailto:mz@milanzitka.cz">
                    mz@milanzitka.cz
                </a>
                <span className={styles.socials}>
                    <SocialsIcons />
                </span>
            </div>
            <div className={styles.footer}>
                <Footer inline={true}/>
            </div>
        </div>
    </>
);

export default ContactPage;

export const Head: HeadFC = () => (
    <HeadSEO>
        <title>Vytvořme příběh společně | Milan Zítka</title>
        <meta name="description" content="Jsem vždy otevřený novým příběhům a projektům. Pokud máte nápad, kterým bych mohl přispět, nebo se chcete jen zeptat či pozdravit, neváhejte mi poslat e-mail nebo mě sledovat na sociálních médiích. Těším se na vaše příběhy a myšlenky!" />
        <link rel="canonical" href="https://milanzitka.cz/kontakt"/>
    </HeadSEO>
);
