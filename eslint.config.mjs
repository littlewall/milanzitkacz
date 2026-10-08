import dvdevEslint from '@dvdevcz/linters/eslint';
import astro from 'eslint-plugin-astro';

export default [
    {ignores: [
        '**/node_modules/**',
        '**/dist/**',
        '**/.astro/**',
        '**/.moon/**',
    ]},
    ...dvdevEslint.map(config => (config.files
        ? {...config, files: [...config.files, '**/*.astro']}
        : config)),
    ...astro.configs['flat/base'],
];
