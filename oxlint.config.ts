import dvdevOxlint from '@dvdevcz/linters/oxlint';
import {defineConfig} from 'oxlint';

export default defineConfig({
    ...dvdevOxlint,
    ignorePatterns: [
        ...dvdevOxlint.ignorePatterns ?? [],
        'dist/**',
        '.astro/**',
        '.moon/**',
    ],
});
