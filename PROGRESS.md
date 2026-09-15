# Voortgang

## 2026-09-16 — ClauseLens als uitgelichte visuele case

Op expliciet verzoek van Bekir de portfolioverbetering uitgevoerd.

- ClauseLens kreeg een prominente case met een echte screenshot van de openbare homepage en een detailopname van het demonstratiecontract. Beide beelden zijn in de browser bekeken en lokaal opgenomen, met bronnotitie in PORTFOLIO-SOURCES.md.
- Nieuwe inhoud beschrijft het project, design/development en twee zichtbare ontwerpkeuzes. Geen gemeten resultaten of geverifieerde werking achter login geclaimd.
- Numico is nu een kleinere case in ontwikkeling met een korte beschrijving van dashboard, transacties en handmatige boninvoer.
- Responsive CSS, afbeeldingsafmetingen, lazy loading, alt-teksten en links naar vergrotingen toegevoegd. De previewserver serveert beide JPEGs expliciet; assettests controleren ook binaire inhoud.
- `npm run check`, de build via `npm test`, zes regressietests en `git diff --check` geslaagd.
- Visuele controle van de gewijzigde BS Designer-pagina is niet afgerond: de cloudbrowser blokkeert de lokale bestands-URL vanwege URL-beleid. Geen alternatieve browserroute gebruikt om die blokkade te omzeilen. Geen mobiele productopname beschikbaar via de aangeboden browser-API.
- Contact, productiehosting en volledige browsercontrole blijven open. Een repository-update is geen bevestigde live-publicatie.


## 2026-09-15 — Twee controleerbare projectverhalen

Werkpakket 03 afgerond: de korte portfolio-teksten vervangen door twee casestudies met aanleiding, aanpak, techniek, actuele status en een link naar de openbare bron.

- ClauseLens: [actuele productpagina](https://clauselens.org/) beschrijft contract uploaden/plakken, aandachtspunten per clausule en uitleg met suggesties. Er worden geen niet-gecontroleerde resultaten of snelheidscijfers geclaimd.
- Numico: [openbare repository](https://github.com/Bekoo023/numiconl) toont een Next.js/React/TypeScript-dashboard met Supabase-transacties en bonupload met handmatige gegevensinvoer. De eerdere tekst presenteerde automatische bonnetjesherkenning en chat als bestaand; daarvoor is geen bevestiging in de onderzochte code. De nieuwe tekst benoemt die grens.
- Beide projectillustraties zijn nog steeds interpretaties, geen product-screenshots.
- De lokale resourcecontrole accepteert uitsluitend deze twee gecontroleerde externe projectlinks.
- Op de gewijzigde code zijn `npm run check`, `npm run build`, `npm test` (6/6) en `git diff --check` lokaal geslaagd; dit bewijst geen browser- of CI-succes.
- Browser en visuele controle blijven open: de beschikbare browser blokkeerde de lokale preview-URL (`net::ERR_BLOCKED_BY_CLIENT`). De GitHub Actions-job wordt door GitHub niet gestart wegens een accountblokkade rond betaling; accountinstellingen zijn niet aangepast.

Volgende stap: mobiel en desktop in een daadwerkelijk bereikbare browser beoordelen en interacties controleren; daarna de openstaande toegankelijkheids- en opleverpunten. Voor een echte contactroute blijft een door Bekir bevestigd openbaar zakelijk kanaal nodig. Er is geen productiepublicatie bevestigd.

## 2026-09-15 — Previewserver hersteld en controleerbare build

Eén afgebakende verbetering aan werkpakket 02: browseronafhankelijke regressietests en herstel van een daarmee aangetoond serverdefect.

- Nieuw `npm test`: zes Node.js-tests zonder extra pakketten voor buildinhoud, publieke assets, lokale links/ankers, HTTP-headers, HEAD/queryverzoeken, niet-publieke bestanden, geweigerde schrijfacties en ongeldige URL-verzoeken.
- Reproductie vóór reparatie: vijf tests slaagden; het ongeldige verzoek veroorzaakte een onbehandelde `TypeError: Invalid URL` en een timeout.
- Gerepareerd: de lokale previewserver antwoordt nu met HTTP 400 op een ongeldige URL en blijft daarna bereikbaar.
- Na reparatie: `npm run check`, `npm run build`, `npm test` (6/6) en `git diff --check` lokaal geslaagd op Node.js 24.19.0. Dit is geen claim over een geslaagde GitHub- of browsertestrun.
- CI-workflow uitgebreid met dezelfde tests. De annotatie van de bestaande run 34873963479 bevestigt dat GitHub de job niet start wegens een accountblokkade. De gebruiker wordt geïnformeerd; accountinstellingen en betalingen zijn niet gewijzigd.
- De browsercontrole kon tijdens deze uitvoering niet worden afgerond. Er zijn geen beoordeelde screenshots en geen geslaagde browsertests; werkpakket 02 blijft daarom open.
- Geen ontwerpwijzigingen, contactgegevens toegevoegd of productiepublicatie uitgevoerd.

Volgende stap: browser-/visuele controles hervatten zodra uitvoerbaar; daarnaast blijven de casestudies een onafhankelijke uitvoerbare roadmaptaak. Voor contact en publicatie blijven bevestigde zakelijke gegevens en hosting nodig. De dagelijkse taak blijft actief omdat er nog zelfstandig uitvoerbaar werk is.

## 2026-09-14 — Eerste versie en dagelijkse ontwikkeling

Gemaakt en opgeslagen:
- Responsieve homepage met eigen typografie, groen/crème-palet en CSS-sculptuur.
- Werkselectie ClauseLens/Numico, diensten, vier stappen, over Bekir en lokale projectbrief.
- Privacyuitleg die aansluit bij de actuele werking.
- Previewserver, statische build, browserchecks en GitHub Actions-workflow.
- Afgebakende roadmap met expliciete stop- en pauzecriteria.
- Eerste codecommit: [43df2c1](https://github.com/Bekoo023/bs-designer/commit/43df2c1d62a549943106ae64bfee01c8d4a6677f).

Verificatie:
- Schrijfrechten en daadwerkelijke update van main bevestigd.
- Broncontrole: interne ankers bestaan, HTML-IDs zijn uniek, package.json is geldige JSON.
- [GitHub Actions-run 34873963479](https://github.com/Bekoo023/bs-designer/actions/runs/34873963479) eindigde met failure voordat enige jobstap draaide. De API gaf geen runner en geen stappen terug; er waren geen joblogs beschikbaar. Oorzaak nog niet bevestigd.
- Syntax-, build- en browserchecks zijn dus NIET aantoonbaar geslaagd.
- Deze chatsessie biedt geen lokale terminal of browser. Visuele beoordeling is nog niet uitgevoerd.
- Geen productiehosting ingesteld; deze repository is geen live website.

Dagelijkse ontwikkeling:
- ChatGPT-taak 'BS Designer website bouwen' is succesvol aangemaakt en ingeschakeld.
- Start: 15 september 2026, dagelijks rond 08:00 Europe/Amsterdam (flexibel).
- Per uitvoering één zinvolle roadmapverbetering, rechtstreeks naar main als rechten en branchregels dat toelaten; anders een PR.
- Eindcriteria volgen uit ROADMAP.md; taak uitschakelen zodra klaar.
- Als alleen harde blokkades of benodigde gebruikersinput resteren: duidelijk melden en pauzeren, niet blijven herontwerpen.
- GitHub Actions controleert code; de ChatGPT-taak doet het ontwikkelwerk.

Eerstvolgende punten:
- Vaststellen waarom de CI-run niet startte; zo mogelijk repareren en de echte tests uitvoeren.
- Screenshots/visuele controle doen wanneer een uitvoeromgeving beschikbaar is.
- Onafhankelijke portfoliotaken verder uitwerken.
- Openbaar zakelijk contactkanaal en benodigde bedrijfsgegevens bevestigen.
- Hosting/domein bepalen en de publicatie controleren.
