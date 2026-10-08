# Dokončení přepisu do Astro

Přepis je dokončený v pracovním stromu. Původní rozpracované změny jsou zachované; změny nejsou commitnuté ani nasazené.

## Opravené mezery

- CSS moduly používají výchozí importy. Globální styly se načítají z běžného CSS souboru, takže fungují fonty, barvy, tlačítka i rozměry stránek.
- Všech osm stránek má českou i anglickou statickou verzi. Anglické vstupy sdílejí české šablony a získávají jazyk z URL. Navigace a obsah jsou lokalizované již při generování HTML.
- Stránka Texty znovu obsahuje původní portfolio a všech osm písňových textů. Dialog má klávesnicové ovládání, správný fokus a zavírání pomocí Escape.
- Oba audio přehrávače se registrují z lokálního balíčku; jejich playlisty obsahují osm nahrávek.
- Na úvodní stránce jsou obnovené sociální odkazy.
- Projektové karty vedou na existující stránky Hudba a Muzikály. Původně odkazovaly na neexistující detaily projektů.
- Sdílený layout obsahuje kanonické URL a jazykové alternativy. Manifest používá existující favicon.
- Složka public již není ignorovaná Gitem. Všech 37 původních médií bylo při kontrole přesunu identických s originálem; následně byl opraven manifest s neexistujícími ikonami.
- Odstraněné jsou nevyužité původní jazykové hooky a nepotřebné závislosti. TypeScript používá konfiguraci Astro.
- README obsahuje anglický návod; všechny vývojové a kontrolní úlohy jsou v moon.yml. Package.json neobsahuje skripty.

## Ověření

Úspěšně prošly:

- pnpm install --frozen-lockfile
- pnpm verify: typová kontrola bez chyb, varování a hintů, produkční build všech 16 stránek a kontrola lokálních odkazů, médií, metadat, globálních stylů a portfolia.
- pnpm exec moon run web:typecheck
- git diff --check
- Kontrola v Chrome na desktopu a mobilu: vzhled, menu, jazykové přepnutí, dialogy s texty, fokus, Escape, oba audio přehrávače a kontakt. Bez JavaScriptových chyb.

Kontrola audio přehrávačů ověřila jejich registraci a vykreslení; neposuzovala zvuk poslechem. Prohlížečové ověření použilo dočasný Playwright mimo závislosti projektu.

## Spuštění

moon run web:dev spustí vývojový web na http://localhost:4321.
moon run web:preview zobrazí produkční build; během dokončování byl spuštěný na http://127.0.0.1:4321.
K nasazení je připravený statický obsah dist/.

## Navazující úprava nástrojů

Staré ESLint a Stylelint konfigurace nahradil balíček @dvdevcz/linters.
ESLint formátuje JS, TS a Astro; Stylelint formátuje CSS; Oxlint kontroluje kód včetně typových pravidel.
Moon obsahuje fmt, fmt-check, lint, test a verify. Test automaticky závisí na buildu.
Po úpravě prošly moon run web:install, moon run web:verify a prohlížečová regresní kontrola.
Oxlint používá základní preset bez React pravidel.

## Odstranění Reactu

Všechny komponenty jsou nyní v Astro, včetně navigace, karet, portfolia, patičky, SVG ikon a písňových textů.
Mobilní menu ovládá krátký skript, jazyk se přepíná běžným odkazem a písňové texty používají HTML template a nativní dialog.
Odstraněné jsou React, React DOM, Astro React integrace, React typy, JSX soubory, clsx a vite-plugin-svgr.
Regresní kontrola odmítá frameworkové závislosti a hydratované komponenty ve výstupu a vyžaduje všech osm šablon textů.

Finální ověření: moon run web:install web:verify prošlo. Oxlint a typová kontrola mají nula chyb, varování i hintů; build vytváří všech 16 stránek.
Prohlížečové kontroly ověřily desktop i mobil, menu včetně Escape a návratu fokusu, přepínání jazyka s JavaScriptem i bez něj, všech osm dialogů s texty, zavírání dialogu tlačítkem i kliknutím na pozadí, audio přehrávače a kontakt.
Ve zdrojích ani konfiguraci nejsou React odkazy a pnpm why react react-dom @astrojs/react vrací prázdný strom.
Obsah všech osmi převedených písňových textů odpovídá původním dokumentům.
