import type {HeadFC} from 'gatsby';
import {FC} from 'react';
import NavBar, {SocialsIcons} from '../../components/layout/navbar/navbar';
import HeadSEO from '../../components/layout/headSEO';
import Footer from '../../components/layout/footer/footer';
import * as styles from './index.module.css';
import '../layout.module.css';
import {useTranslation} from '../../lib/translation/useTranslation';

const ContactPage: FC = () => {
    const translate = useTranslation('contact.content');

    return (
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
                    <h2>{translate('heading')}</h2>
                    <p>
                        {translate('paragraph')}
                    </p>
                    <a className={styles.email} href={`mailto:${translate('email')}`}>
                        {translate('email')}
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
};

export default ContactPage;

export const Head: HeadFC = () => {
    const translate = useTranslation('contact.meta');

    return (
        <HeadSEO>
            <title>{translate('title')}</title>
            <meta name="description" content={translate('description')} />
            <link rel="canonical" href="https://milanzitka.cz/kontakt"/>
        </HeadSEO>
    );
};
