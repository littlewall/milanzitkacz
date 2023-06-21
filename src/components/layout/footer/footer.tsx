import clsx from 'clsx';
import {FC} from 'react';
import * as styles from './footer.module.css';

interface IFooter {
    inline?: boolean,
}

const Footer: FC<IFooter> = ({inline}) => (
    <footer className={clsx(styles.footer, inline && styles.inline)}>
        &copy; {new Date().getFullYear()}&nbsp;
        <a
            href="https://github.com/littlewall"
            target='_blank'
            rel="noreferrer"
        >
            littlewall
        </a>
        &nbsp;|&nbsp;Foto:&nbsp;
        <a
            href='https://lukasjindra.cz'
            target='_blank'
            rel="noreferrer"
        >
            Lukáš Jindra
        </a>
    </footer>
);

export default Footer;
