import React, {FC} from 'react';
import {useLanguage} from '../../../lib/translation/languageContext';
import {useTranslation} from '../../../lib/translation/useTranslation';
import CsFlag from '../../../assets/images/flags/cs.svg';
import EnFlag from '../../../assets/images/flags/en.svg';
import * as styles from './languageSwitcher.module.css';

interface LanguageSwitcherProps {
  className?: string,
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({className}) => {
    const {language, setLanguage} = useLanguage();
    const translate = useTranslation();

    const toggleLanguage = () => {
        setLanguage(language === 'cs' ? 'en' : 'cs');
    };

    return (
        <button
            onClick={toggleLanguage}
            className={`${styles.languageSwitcher} ${className || ''}`}
            aria-label={translate('navigation.languageSwitch')}
        >
            {language === 'cs' ? <EnFlag className={styles.flag} /> : <CsFlag className={styles.flag} />}
        </button>
    );
};

export default LanguageSwitcher;
