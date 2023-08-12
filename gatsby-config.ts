import type {GatsbyConfig} from 'gatsby';

const config: GatsbyConfig = {
    siteMetadata: {
        title: 'Milan Zítka website',
        siteUrl: 'https://milanzitka.cz',
    },
    graphqlTypegen: true,
    trailingSlash: 'never',
    plugins: [
        'gatsby-plugin-postcss',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/,
                },
            },
        },
    ],
};

export default config;
