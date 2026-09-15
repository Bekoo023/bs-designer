# Voortgang

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
