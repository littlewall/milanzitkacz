import {ReactElement} from 'react';

import myslenkyJima from './mistr-jazzu/myslenky-jima';
import uvodni from './mistr-jazzu/uvodni';
import amanthisSong from './mistr-jazzu/amanthis-song';

import jsiTedTamKdeTouzisByt from './covers/jsi-ted-tam-kde-touzis-byt';
import coVicTiMuzuDat from './covers/co-vic-ti-muzu-dat';

import underTheSea from './mala-morska-vila/under-the-sea';
import kissTheGirl from './mala-morska-vila/kiss-the-girl';
import partOfYourWorld from './mala-morska-vila/part-of-your-world';

interface Texts {
    [key: string]: ReactElement,
}

const texts: Texts = {
    'mistr-jazzu-myslenky-jima': myslenkyJima,
    'mistr-jazzu-uvodni': uvodni,
    'mistr-jazzu-amanthis-song': amanthisSong,

    'covers-jsi-ted-tam-kde-touzis-byt': jsiTedTamKdeTouzisByt,
    'covers-co-vic-ti-muzu-dat': coVicTiMuzuDat,

    'mala-morska-vila-under-the-sea': underTheSea,
    'mala-morska-vila-kiss-the-girl': kissTheGirl,
    'mala-morska-vila-part-of-your-world': partOfYourWorld,
};

export default texts;
