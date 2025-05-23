import type {HeadFC} from 'gatsby';
import {FC} from 'react';
import * as styles from './index.module.css';
import '../layout.module.css';
import NavBar from '../../components/layout/navbar/navbar';
import HeadSEO from '../../components/layout/headSEO';
import Footer from '../../components/layout/footer/footer';
import {useTranslation} from '../../lib/translation/useTranslation';

const AboutMePage: FC = () => {
    const translate = useTranslation('aboutme.content');

    return (
        <>
            <NavBar />
            <div className={styles.page}>
                <div className={styles.blob}>
                    <svg
                        id="10015.io"
                        viewBox="0 0 480 480"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                        <defs>
                            <clipPath id="blob">
                                <path
                                    fill="#474bff"
                                    d="M413.5,302.5Q390,365,335.5,417.5Q281,470,205.5,450Q130,430,88,370.5Q46,311,35,236.5Q24,162,74.5,101.5Q125,41,203,24.5Q281,8,337,59.5Q393,111,415,175.5Q437,240,413.5,302.5Z"
                                />
                            </clipPath>
                        </defs>
                        <image
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            clipPath="url(#blob)"
                            xlinkHref="/images/portrait/whoami.png"
                            preserveAspectRatio="xMidYMid slice"
                        >
                        </image>
                    </svg>
                </div>
                <div className={styles.content}>
                    <p dangerouslySetInnerHTML={{__html: translate('paragraph1')}} />
                    <p dangerouslySetInnerHTML={{__html: translate('paragraph2')}} />
                    <p dangerouslySetInnerHTML={{__html: translate('paragraph3')}} />
                    <p dangerouslySetInnerHTML={{__html: translate('paragraph4')}} />
                    <p dangerouslySetInnerHTML={{__html: translate('paragraph5')}} />
                    <p dangerouslySetInnerHTML={{__html: translate('paragraph6')}} />
                    <p dangerouslySetInnerHTML={{__html: translate('paragraph7')}} />
                    <p dangerouslySetInnerHTML={{__html: translate('paragraph8')}} />
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default AboutMePage;

export const Head: HeadFC = () => {
    const translate = useTranslation('aboutme.meta');

    return (
        <HeadSEO>
            <title>{translate('title')}</title>
            <meta name="description" content={translate('description')} />
            <link rel="canonical" href="https://milanzitka.cz/kdo-jsem"/>
        </HeadSEO>
    );
};
