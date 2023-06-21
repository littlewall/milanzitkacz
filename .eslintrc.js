module.exports = {
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module',
    },
    plugins: ['react'],
    extends: ['@dvdevcz/eslint-config-react', '@dvdevcz/eslint-config-typescript'],
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
    ignorePatterns: [
        '.eslintrc',
        '.eslintrc.js',
        'gatsby-types.d.ts',
        'graphql-types.ts',
        `postcss.config.js`
    ],
    rules: {
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-param-reassign': [
            'error', {
                props: true,
                ignorePropertyModificationsFor: ['state'],
            },
        ],
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'no-underscore-dangle': [
            'error', { 
                allow: ['__typename'] 
        }]
    },
};
