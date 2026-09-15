# BS Designer — vaste scope en eindcriteria

Doel: een professionele Nederlandse marketingwebsite voor BS Designer, met karakter, toegankelijke interacties en een echte contactroute. Beperk de eerste release tot de bestaande secties; geen webshop, betalingen, CRM, login of marketingautomatisering toevoegen.

## Werkpakketten

- [x] 01 Basis: homepage, diensten, werkwijze, over Bekir, eigen projecten en lokale projectbrief.
- [ ] 02 Kwaliteit van de basis: groene syntax/build/browserchecks op de actuele code; screenshots beoordelen op 360/390/768/1440px; concrete problemen repareren.
  - 15 september: syntax, build en zes browseronafhankelijke tests lokaal geslaagd; ongeldige URL-afhandeling in de previewserver gerepareerd. Browsertests/visuele beoordeling blijven open. GitHub Actions start niet wegens een door GitHub gemelde accountblokkade, niet wegens een uitgevoerde testfout.
- [ ] 03 Portfolio: twee heldere casestudies met eerlijke projectstatus, probleem, aanpak en techniek. Gebruik alleen bevestigde feiten. Vervang interpretaties door echte screenshots uitsluitend als die beschikbaar en toegestaan zijn.
- [ ] 04 Contact: bevestigd openbaar zakelijk kanaal koppelen. Primaire actie moet werkelijk een gesprek kunnen starten; nooit een schijnsucces. Als alleen mailto beschikbaar is, expliciet labelen als e-mail openen en een kopieerbaar adres tonen. Projectbrief behouden.
- [ ] 05 Oplevering: toetsenbord, contrast, reduced motion, foutafhandeling, mobiele navigatie en metadata controleren; passende privacy en bedrijfsgegevens afronden; host/domein bevestigen en eventuele benodigde configuratie voorbereiden.
- [ ] 06 Eindcontrole: productie-URL indien hosting beschikbaar is verifiëren, alle kernacties nalopen, resterende blokkades oplossen, handleiding actualiseren en deze taak stoppen.

## Klaar betekent

Alle werkpakketten afgerond, actuele checks groen, visuele controle aantoonbaar gedaan, geen dode knoppen of verzonnen claims, contactroute werkt, noodzakelijke zakelijke informatie klopt en de afgesproken publicatie is gecontroleerd. Zonder visuele controle, echt contactkanaal of bevestigde publicatie geen claim 'helemaal klaar'. Een repository opleveren en een website publiceren zijn aparte resultaten.

## Werkwijze per ronde

1. Lees de actuele branch main, deze lijst en PROGRESS.md. Respecteer gebruikerswijzigingen.
2. Kies één zinvol werkpakket (of een concreet defect dat een eerder pakket blokkeert).
3. Maak de wijziging, verifieer passend, schrijf een beschrijvende commit op main zonder force push. Bij branchbescherming: gebruik een branch/PR en rapporteer die beperking.
4. Controleer de exacte commit en de CI-status. Een aangemaakte test is geen geslaagde test.
5. Werk deze lijst en PROGRESS.md bij met wat aantoonbaar af is en wat nog ontbreekt.
6. Geen willekeurige redesigns of scope-uitbreiding om de taak bezig te houden.
7. Zijn alle criteria gehaald: meld klaar en schakel de bijbehorende dagelijkse ChatGPT-taak uit.
8. Rest alleen ontbrekende gebruikersinput of ontbrekende toegang: meld de precieze blokkade en pauzeer de taak. Noem dat 'gepauzeerd', niet 'klaar'. Hervat na bruikbare input.
