import {FC} from 'react';
import clsx from 'clsx';
import * as styles from './portfolio.module.css';
import {useLanguage} from '../../lib/translation/languageContext';
import {TranslationValue} from '../../lib/translation/i18nTypes';

export interface IPortfolioItem {
    image?: string,
    component?: JSX.Element,
    subheading?: TranslationValue,
    heading?: TranslationValue,
    text?: TranslationValue,
    isRight?: boolean,
    embed?: string,
    isFullWidth?: boolean,
    verticalReverse?: boolean,
    noTopMargin?: boolean,
    button?: {
        text: TranslationValue,
        url: string,
        isExternal?: boolean,
    },
}

interface IPortfolio {
    items: IPortfolioItem[],
}

const Portfolio: FC<IPortfolio> = ({items}) => {
    const {language} = useLanguage();

    return (
        <div className={styles.wrapper}>
            {items.map((item, index) => (
                <div
                    className={clsx(
                        styles.row,
                        item.isRight && styles.right,
                        item.isFullWidth && styles.fullWidth,
                        item.verticalReverse && styles.verticalReverse,
                        item.noTopMargin && styles.noTopMargin,
                    )}
                    key={`portfolioItem${index}`}
                >
                    {item.embed && (
                        <div
                            className={styles.embed}
                            dangerouslySetInnerHTML={{__html: item.embed}}
                        />
                    )}
                    {item.image && (
                        <div
                            className={styles.image}
                            style={{backgroundImage: `url('${item.image}')`}}
                        />
                    )}
                    {item.component && (
                        <div className={styles.component}>
                            {item.component}
                        </div>
                    )}
                    {!item.isFullWidth && item.heading && (
                        <div className={styles.text}>
                            <h4 className={styles.subheading}>
                                {item.subheading?.[language]}
                            </h4>
                            <h2 className={styles.heading}>
                                {item.heading?.[language]}
                            </h2>
                            <p className={styles.paragraph}>
                                {item.text?.[language]}
                            </p>
                            {item.button && (
                                <a
                                    href={item.button.url}
                                    className={styles.button}
                                    target={item.button.isExternal ? '_blank' : undefined}
                                    rel={item.button.isExternal ? 'noopener noreferrer' : undefined}
                                >
                                    {item.button.text[language]}
                                </a>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Portfolio;
