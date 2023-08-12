import {Link} from 'gatsby';
import {FC, useState} from 'react';
import clsx from 'clsx';
import InstagramIcon from '../../../assets/images/socials/instagram.svg';
import SoundcloudIcon from '../../../assets/images/socials/soundcloud.svg';
import YoutubeIcon from '../../../assets/images/socials/youtube.svg';
import GithubIcon from '../../../assets/images/socials/github.svg';
import * as styles from './navbar.module.css';

interface INavBar {
    isHome?: boolean,
}

export const SocialsIcons: FC = () => (
    <>
        <a
            href="https://www.instagram.com/milanzitkacz"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
        >
            <InstagramIcon />
        </a>
        <a
            href="https://www.soundcloud.com/milanzitkacz"
            target="_blank"
            rel="noreferrer"
            title="Soundcloud"
        >
            <SoundcloudIcon />
        </a>
        <a
            href="https://www.youtube.com/@milanzitkacz"
            target="_blank"
            rel="noreferrer"
            title="Youtube"
        >
            <YoutubeIcon />
        </a>
        <a
            href="https://www.github.com/littlewall"
            target="_blank"
            rel="noreferrer"
            title="Github"
        >
            <GithubIcon />
        </a>

    </>
);

const NavBar: FC<INavBar> = ({isHome}) => {
    const [opened, setIsOpened] = useState(false);

    return (
        <nav className={clsx(styles.navbar, isHome && styles.homeVariant)}>
            <div className={styles.menu}>
                <Link
                    className={styles.menuInitials}
                    to="/"
                >
                    MZ
                </Link>
                <button
                    className={clsx(styles.hamburgerButton, opened && styles.active)}
                    onClick={() => setIsOpened(!opened)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={clsx(styles.menuWrapper, opened && styles.mobileOpened)}>
                    <ul className={clsx(styles.menuList)}>
                        <li className={styles.menuItem}>
                            <Link
                                className={styles.menuLink}
                                activeClassName={styles.linkActive}
                                to="/kdo-jsem"
                            >
                                Kdo jsem
                            </Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link
                                activeClassName={styles.linkActive}
                                to="/co-delam"
                                className={styles.menuLink}
                            >
                                Co dělám
                            </Link>
                            <ul className={styles.menuDropdown}>
                                <li className={styles.menuItem}>
                                    <Link
                                        className={styles.menuLink}
                                        to="/co-delam/muzikaly"
                                    >
                                        Muzikály
                                    </Link>
                                </li>
                                <li className={styles.menuItem}>
                                    <Link
                                        className={styles.menuLink}
                                        to="/co-delam/hudba"
                                    >
                                        Hudba
                                    </Link>
                                </li>
                                <li className={styles.menuItem}>
                                    <Link
                                        className={styles.menuLink}
                                        to="/co-delam/texty"
                                    >
                                        Texty
                                    </Link>
                                </li>
                                {/* <li className={styles.menuItem}>
                                    <Link
                                        className={styles.menuLink}
                                        to="/co-delam/weby"
                                    >
                                        Weby
                                    </Link>
                                </li> */}
                            </ul>
                        </li>
                        <li className={styles.menuItem}>
                            <Link
                                activeClassName={styles.linkActive}
                                to="/aktualne"
                                className={styles.menuLink}
                            >
                                Aktuální projekty
                            </Link>
                            <ul className={styles.menuDropdown}>
                                <li className={styles.menuItem}>
                                    <Link
                                        className={styles.menuLink}
                                        to="/aktualne/yellow-world-ep"
                                    >
                                        Yellow world (EP)
                                    </Link>
                                </li>
                                <li className={styles.menuItem}>
                                    <Link
                                        className={styles.menuLink}
                                        to="/aktualne/co-kdyz-muzikal"
                                    >
                                        Co když? (muzikál)
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.menuItem}>
                            <Link
                                className={styles.menuLink}
                                activeClassName={styles.linkActive}
                                to="/kontakt"
                            >
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                    {!isHome && (
                        <div className={styles.socials}>
                            <SocialsIcons/>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
