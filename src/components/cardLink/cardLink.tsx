import {Link} from 'gatsby';
import {FC} from 'react';
import * as styles from './cardLink.module.css';

interface ICardLink {
    heading: string,
    text: string,
    link: string,
}

const CardLink: FC<ICardLink> = ({heading, text, link}) => (
    <Link to={link} className={styles.card}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.text}>
            {text}
        </p>
    </Link>
);

export default CardLink;
