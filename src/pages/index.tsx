import {HeadFC, Link} from 'gatsby';
import {FC} from 'react';
import NavBar, {SocialsIcons} from '../components/layout/navbar/navbar';
import HeadSEO from '../components/layout/headSEO';
import Footer from '../components/layout/footer/footer';
import * as styles from './index.module.css';
import './layout.module.css';
import {useTranslation} from '../lib/translation/useTranslation';

const IndexPage: FC = () => {
    const translate = useTranslation('home.content');

    return (
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
                        {translate('title')}
                        &nbsp;
                        <br className={styles.desktopBreak}/>
                        {translate('description')}
                    </span>
                    <Link className={styles.button} to="/kdo-jsem">
                        {translate('cta')}
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
};

export default IndexPage;

export const Head: HeadFC = () => {
    const translate = useTranslation('home.meta');

    return (
        <HeadSEO>
            <title>{translate('title')}</title>
            <meta name="description" content={translate('description')} />
            <link rel="canonical" href="https://milanzitka.cz"/>
        </HeadSEO>
    );
};
