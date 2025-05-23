import React from 'react';
import {WrapPageElementBrowserArgs} from 'gatsby';
import {LanguageProvider} from './src/lib/translation/languageContext';

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({element}: WrapPageElementBrowserArgs): React.ReactElement => <LanguageProvider>{element}</LanguageProvider>;
