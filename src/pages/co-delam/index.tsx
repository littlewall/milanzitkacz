import {HeadFC} from 'gatsby';
import {FC} from 'react';
import * as styles from './index.module.css';
import '../layout.module.css';
import NavBar from '../../components/layout/navbar/navbar';
import HeadSEO from '../../components/layout/headSEO';
import Footer from '../../components/layout/footer/footer';
import CardLink from '../../components/cardLink/cardLink';

const WorkPage: FC = () => (
    <>
        <NavBar />
        <main className={styles.page}>
            <div className={styles.content}>
                <div className={styles.cards}>
                    <CardLink
                        heading="Hudba"
                        text="Původni písňová a instrumentální tvorba"
                        link="/co-delam/hudba"
                    />
                    <CardLink
                        heading="Muzikály"
                        text="Mé vlastní, světová díla, i malé produkce"
                        link="/co-delam/muzikaly"
                    />
                    <CardLink
                        heading="Texty"
                        text="Autorské písně, covery a muzikály"
                        link="/co-delam/texty"
                    />
                    {/* <CardLink
                        heading="Weby"
                        text="Malé a mikro stránky"
                        link="/co-delam/weby"
                    /> */}
                </div>
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
                                    d="M418.5,301.5Q363,363,301.5,395Q240,427,159.5,414Q79,401,41.5,320.5Q4,240,53,171Q102,102,171,73.5Q240,45,309,73.5Q378,102,426,171Q474,240,418.5,301.5Z"
                                />
                            </clipPath>
                        </defs>
                        <image
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            clipPath="url(#blob)"
                            xlinkHref="/images/portrait/whatido.jpg"
                            preserveAspectRatio="xMidYMid slice"
                        >
                        </image>
                    </svg>
                </div>
            </div>
        </main>
        <Footer />
    </>
);

export default WorkPage;

export const Head: HeadFC = () => (
    <HeadSEO>
        <title>Co dělám a co jsem zažil | Milan Zítka</title>
    </HeadSEO>
);
