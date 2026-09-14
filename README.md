# BS Designer

Website voor de onafhankelijke webstudio van Bekir Sezgin.

## Status

Eerste versie in ontwikkeling. De site is nog niet definitief gepubliceerd. Zie [ROADMAP.md](./ROADMAP.md) voor de eindcriteria en [PROGRESS.md](./PROGRESS.md) voor bewezen voortgang.

## Starten

Node.js 22 of hoger:

```sh
npm run dev
```

Open http://127.0.0.1:4173. Er zijn geen runtime-afhankelijkheden en er is geen installatie nodig om de website te draaien. Voor de statische productie-uitvoer:

```sh
npm run build
```

Publiceer uitsluitend de map `dist` via een statische host. Alle assetpaden zijn relatief en ondersteunen daardoor hosting in een submap. Er is in deze commit geen hosting ingericht.

## Controleren

```sh
npm run check
npm run build
npm install --no-save --package-lock=false playwright@1.58.2
npx playwright install --with-deps chromium
npm run test:browser
```

De GitHub Actions-workflow voert deze controles uit bij een push of pull request op main. Browserchecks verifiëren vier schermbreedtes, navigatie, diensten, invoervalidatie, de inhoud van de download, privacy, JavaScript-uitval en toetsenbordnavigatie. Screenshots en de gebouwde website zijn workflow-artifacts. De setup volgt de [Playwright CI-documentatie](https://playwright.dev/docs/ci).

## Inhoud en techniek

- HTML, CSS en JavaScript; geen framework of client-side router nodig voor deze scope.
- CSS-illustraties, native details-elementen en subtiele aanwijzerinteractie met respect voor reduced motion.
- Eigen projecten ClauseLens en Numico; illustraties zijn nadrukkelijk geen echte screenshots.
- Geen verzonnen reviews, prijzen, resultaatclaims of klantrelaties.
- De projectbrief wordt lokaal gedownload. Er wordt niets verstuurd en geen formulierinvoer opgeslagen.
- Geen tracking of externe lettertypen.
- `noindex` blijft staan totdat zakelijke informatie, contact, hosting en oplevering kloppen.
- `scripts/serve.mjs` is alleen een lokale previewserver; geen productiehosting of backend.

## Dagelijkse ontwikkeling

De dagelijkse verbetering wordt door een aparte ChatGPT-taak gestart; GitHub Actions test code, maar schrijft de website niet zelf. De taak leest eerst de actuele repository, kiest een afgebakende stap uit ROADMAP.md, commit wijzigingen en noteert bewijs in PROGRESS.md. De taak stopt bij de afgesproken eindcriteria. Bij een harde toegangsfout of wanneer alleen gebruikersinput rest, pauzeert ze met een concrete uitleg in plaats van eindeloos cosmetische wijzigingen te maken.

## Voor definitieve oplevering nodig

Bevestigd openbaar zakelijk e-mailadres/contactkanaal, eventuele verplichte bedrijfsgegevens en de gewenste hosting/domeinnaam. Geen privégegevens uit gekoppelde accounts publiceren zonder bevestiging. De huidige privacyuitleg beschrijft alleen de werkelijke lokale formulierwerking, niet een toekomstig contactformulier.
