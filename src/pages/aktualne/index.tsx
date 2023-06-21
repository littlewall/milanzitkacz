import { HeadFC } from 'gatsby';
import { FC } from 'react';
import * as styles from './index.module.css';
import '../layout.module.css';
import NavBar from '../../components/layout/navbar/navbar';
import HeadSEO from '../../components/layout/headSEO';
import Footer from '../../components/layout/footer/footer';
import CardLink from '../../components/cardLink/cardLink';

const ProjectsPage: FC = () => (
    <>
        <NavBar />
        <main className={styles.page}>
            <div className={styles.content}>
                <div className={styles.cards}>
                    <CardLink
                        heading="Yellow world (EP)"
                        text="Krátké album klavírních skladeb"
                        link="/aktualne/yellow-world-ep"
                    />
                    <CardLink
                        heading="Co když? (muzikál)"
                        text="Komorní muzikál o lásce a životě"
                        link="/aktualne/co-kdyz-muzikal"
                    />
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
                                    d="M430.5,320Q400,400,320,408Q240,416,180,388Q120,360,88.5,300Q57,240,77,168.5Q97,97,168.5,54Q240,11,311.5,54Q383,97,422,168.5Q461,240,430.5,320Z"
                                />
                            </clipPath>
                        </defs>
                        <image
                            x="0"
                            y="0"
                            width="100%"
                            height="100%"
                            clipPath="url(#blob)"
                            xlinkHref="/images/portrait/web04.jpg"
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

export default ProjectsPage;

export const Head: HeadFC = () => (
    <HeadSEO>
        <title>Na čem aktuálně pracuji | Milan Zítka</title>
    </HeadSEO>
);
