import sitemap from '@astrojs/sitemap';
import {defineConfig} from 'astro/config';

export default defineConfig({
    site: 'https://milanzitka.cz',
    integrations: [sitemap()],
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
