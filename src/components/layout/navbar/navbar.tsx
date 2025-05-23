import {Link} from 'gatsby';
import {FC, useState} from 'react';
import clsx from 'clsx';
import InstagramIcon from '../../../assets/images/socials/instagram.svg';
import SoundcloudIcon from '../../../assets/images/socials/soundcloud.svg';
import YoutubeIcon from '../../../assets/images/socials/youtube.svg';
import GithubIcon from '../../../assets/images/socials/github.svg';
import LanguageSwitcher from '../languageSwitcher/languageSwitcher';
import {useTranslation} from '../../../lib/translation/useTranslation';
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
    const translate = useTranslation();

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
                                {translate('common.navbar.whoAmI')}
                            </Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link
                                activeClassName={styles.linkActive}
                                to="/co-delam"
                                className={styles.menuLink}
                            >
                                {translate('common.navbar.whatIDo')}
                            </Link>
                            <ul className={styles.menuDropdown}>
                                <li className={styles.menuItem}>
                                    <Link
                                        className={styles.menuLink}
                                        to="/co-delam/muzikaly"
                                    >
                                        {translate('common.navbar.musicals')}
                                    </Link>
                                </li>
                                <li className={styles.menuItem}>
                                    <Link
                                        className={styles.menuLink}
                                        to="/co-delam/hudba"
                                    >
                                        {translate('common.navbar.music')}
                                    </Link>
                                </li>
                                <li className={styles.menuItem}>
                                    <Link
                                        className={styles.menuLink}
                                        to="/co-delam/texty"
                                    >
                                        {translate('common.navbar.lyrics')}
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
                                className={styles.menuLink}
                                activeClassName={styles.linkActive}
                                to="/kontakt"
                            >
                                {translate('common.navbar.contact')}
                            </Link>
                        </li>
                        <li className={styles.menuItem}>
                            <div className={styles.languageContainer}>
                                <LanguageSwitcher className={styles.menuLanguageSwitcher} />
                            </div>
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
