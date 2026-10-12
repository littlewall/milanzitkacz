import sitemap from '@astrojs/sitemap';
import {defineConfig, fontProviders} from 'astro/config';

export default defineConfig({
    site: 'https://milanzitka.cz',
    integrations: [sitemap()],
    fonts: [
        {
            name: 'Poppins',
            cssVariable: '--font-poppins',
            provider: fontProviders.fontsource(),
            weights: [
                300,
                500,
                600,
                900,
            ],
            styles: ['normal'],
            subsets: ['latin', 'latin-ext'],
            formats: ['woff2'],
        },
    ],
    i18n: {
        defaultLocale: 'cs',
        locales: ['cs', 'en'],
        routing: {
            prefixDefaultLocale: false,
        },
    },
    vite: {
        css: {
            modules: {
                localsConvention: 'camelCase',
            },
        },
    },
});
