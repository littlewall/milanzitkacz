import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from 'react';

export type Language = 'cs' | 'en';

type LanguageContextType = {
  language: Language,
  setLanguage: (language: Language) => void,
};

const LanguageContext = createContext<LanguageContextType>({
    language: 'cs',
    setLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode,
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({children}) => {
    const [language, setLanguage] = useState<Language>('cs');

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const savedLanguage = localStorage.getItem('language') as Language;

        if (savedLanguage && (savedLanguage === 'cs' || savedLanguage === 'en')) {
            setLanguage(savedLanguage);

            return;
        }

        const browserLanguage = navigator.language.split('-')[0].toLowerCase();
        const detectedLanguage = browserLanguage === 'cs' ? 'cs' : 'en';

        setLanguage(detectedLanguage);
        localStorage.setItem('language', detectedLanguage);
    }, []);

    const handleSetLanguage = (newLanguage: Language) => {
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };

    return (
        <LanguageContext.Provider value={{language, setLanguage: handleSetLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
