import React from 'react';
import {WrapPageElementNodeArgs} from 'gatsby';
import {LanguageProvider} from './src/lib/translation/languageContext';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({element}: WrapPageElementNodeArgs) => <LanguageProvider>{element}</LanguageProvider>;
