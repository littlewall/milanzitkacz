import assert from 'node:assert/strict';
import {existsSync, readFileSync} from 'node:fs';
import {join} from 'node:path';

const routes = [
    '',
    'kdo-jsem',
    'kontakt',
    'aktualne',
    'co-delam',
    'co-delam/hudba',
    'co-delam/muzikaly',
    'co-delam/texty',
];
let pages = 0;
const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));

for (const dependency of [
    'react',
    'react-dom',
    '@astrojs/react',
    '@types/react',
    '@types/react-dom',
    'vite-plugin-svgr',
]) {
    assert.ok(!packageJson.dependencies?.[dependency] && !packageJson.devDependencies?.[dependency], `Unexpected framework dependency: ${dependency}`);
}

const manifest = JSON.parse(readFileSync('dist/images/favicon/site.webmanifest', 'utf8'));

for (const icon of manifest.icons) {
    assert.ok(existsSync(join('dist', icon.src)), `Missing manifest icon: ${icon.src}`);
}

for (const locale of ['cs', 'en']) {
    for (const route of routes) {
        const prefix = locale === 'en' ? 'en/' : '';
        const file = join('dist', prefix, route, 'index.html');

        assert.ok(existsSync(file), `Missing page: ${file}`);

        const html = readFileSync(file, 'utf8');

        assert.ok(!html.includes('<astro-island'), `Unexpected hydrated framework component: ${file}`);

        const stylesheets = [...html.matchAll(/<link[^>]*href="([^"]+\.css)"[^>]*>/g)]
            .map(match => readFileSync(join('dist', match[1]), 'utf8')).join('\n');

        assert.ok(stylesheets.includes('--color-yellow:') || html.includes('--color-yellow:'), `Missing global styles: ${file}`);
        assert.ok(html.includes(`<html lang="${locale}"`), `Wrong language: ${file}`);
        assert.ok(!(/class="undefined"|className="undefined"/).test(html), `Missing styles: ${file}`);
        assert.ok((/rel="canonical" href="https:\/\/milanzitka.cz\//).test(html), `Canonical: ${file}`);
        assert.ok((/hreflang="en"/).test(html), `English alternate: ${file}`);
        assert.ok(!(/>\s*(?:texts|home|common|whatido)\.content\./).test(html), `Missing translation: ${file}`);
        for (const match of html.matchAll(/(?:href|src|url|cover)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
            const target = decodeURIComponent(match[1]);

            assert.ok(existsSync(join('dist', target)) || existsSync(join('dist', target, 'index.html')), `Broken local URL ${target} on ${file}`);
        }

        if (route === 'co-delam/texty') {
            assert.equal([...html.matchAll(/<template\b[^>]*data-lyrics-text=/g)].length, 8, `Missing lyric templates: ${file}`);
            assert.match(html, /Amanthis song/, `Missing lyrics list: ${file}`);
            assert.match(html, /Part of your world/, `Missing translated musical: ${file}`);
        }

        if (route === 'co-delam/hudba') {
            assert.equal([...html.matchAll(/<lw-audio-player-song\b/g)].length, 8, `Audio playlist: ${file}`);
            assert.match(html, /<script[^>]*src=/, `Missing player registration: ${file}`);
        }

        if (!route) {
            assert.match(html, /title="Instagram"/, `Missing homepage socials: ${file}`);
            assert.ok(html.includes('Yellow world (EP)'), `Missing homepage projects: ${file}`);
        }

        pages++;
    }
}

console.log(`Verified ${pages} Czech and English pages, translations, local links, assets, lyrics and audio playlists.`);
