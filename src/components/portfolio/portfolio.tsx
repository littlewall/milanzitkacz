import {FC} from 'react';
import clsx from 'clsx';
import * as styles from './portfolio.module.css';
import {LocalizedString} from '../../Globals';

export interface IPortfolioItem {
    image?: string,
    subheading?: LocalizedString,
    heading?: LocalizedString,
    text?: LocalizedString,
    isRight?: boolean,
    embed?: string,
    isFullWidth?: boolean,
}

interface IPortfolio {
    items: IPortfolioItem[],
}

const Portfolio: FC<IPortfolio> = ({items}) => (
    <div className={styles.wrapper}>
        {items.map((item, index) => (
            <div
                className={clsx(
                    styles.row,
                    item.isRight && styles.right,
                    item.isFullWidth && styles.fullWidth,
                )}
                key={`portfolioItem${index}`}
            >
                {item.embed && (
                    <div
                        className={styles.embed}
                        dangerouslySetInnerHTML={{__html: item.embed}}
                    />
                )}
                {!item.embed && (
                    <div
                        className={styles.image}
                        style={{backgroundImage: `url('${item.image}')`}}
                    />
                )}
                {!item.isFullWidth && (
                    <div className={styles.text}>
                        <h4 className={styles.subheading}>
                            {item.subheading?.cs}
                        </h4>
                        <h2 className={styles.heading}>
                            {item.heading?.cs}
                        </h2>
                        <p className={styles.paragraph}>
                            {item.text?.cs}
                        </p>
                    </div>
                )}
            </div>
        ))}
    </div>
);

export default Portfolio;
