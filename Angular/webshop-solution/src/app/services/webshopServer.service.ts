import { Injectable } from '@angular/core';

import { Benutzer } from '../models/Benutzer';
import { Warenkorb } from '../models/Warenkorb';
import { Kunde } from '../models/Kunde';
import { Artikel } from '../models/Artikel';

@Injectable()
/**
 * Schnittstellenservice für den Webshop-Server. Dieser stellt Operationen für Login, Artikeldaten und Warenkorbdaten zur Verfügung.
 * 
 * Diese Implementierung simuliert den Server, indem Arrays mit Kunden, Artikel und Warenkörbe gehalten werden.
 * Die Operationen des Service greifen auf die Arrays zu.
 */
export class WebshopServer {
    private kunden: Array<Kunde> = JSON.parse(
    `[
        {
            "id": 1,
            "name": "Hugo Maier",
            "benutzername": "Hugo",
            "passwort": "123"
        },
        {
            "id": 2,
            "name": "Codie Coder",
            "benutzername": "Codie",
            "passwort": "123"
        }
    ]`);
    private artikel: Array<Artikel> = JSON.parse(
    `[
        {
            "id": 1,
            "kurzText": "Milch",
            "beschreibung": "1L H-Milch 3,5% Fett",
            "preis": "0.80"
        },
        {
            "id": 2,
            "kurzText": "Butter",
            "beschreibung": "250gr. Markenbutter",
            "preis": "1.80"
        },
        {
            "id": 3,
            "kurzText": "Essig",
            "beschreibung": "1L Balsamico-Essig",
            "preis": "2.80"
        }
    ]`);
    private warenkoerbe: Array<Warenkorb> = JSON.parse(
    `{
        "1": {
            "id": 1,
            "kundenId": 1,
            "status": "angelegt",
            "positionen": [
                {
                    "nr": 1,
                    "artikelId": 2,
                    "menge": 1
                },
                {
                    "nr": 2,
                    "artikelId": 1,
                    "menge": 8
                },
                {
                    "nr": 3,
                    "artikelId": 3,
                    "menge": 9
                }
            ]
        },
        "2": {
            "id": 2,
            "kundenId": 2,
            "status": "angelegt",
            "positionen": []
        }
    }`);

    public aktuellerKunde: Kunde;

    public constructor() {
    }

    public login(benutzer: Benutzer): boolean {
        for (let kunde of this.kunden) {
            if (benutzer.name === kunde.benutzername && benutzer.passwort === kunde.passwort) {
                this.aktuellerKunde = kunde;
                return true;
            }
        }
        return false;
    }

    public ladeWarenkorbZuKunde(kundeId: number): Warenkorb {
        const warenkorb = this.warenkoerbe[kundeId];
        return warenkorb;
    }

    public ladeAlleArtikel(): Array<Artikel> {
        return this.artikel;
    }

    public speichereWarenkorb(warenkorb: Warenkorb): void {
        if (warenkorb.status == 'bezahlt') {
            warenkorb = new Warenkorb(Number(Date.now()), warenkorb.kundenId, 'angelegt', []);
        }
        this.warenkoerbe[warenkorb.kundenId] = warenkorb;
    }
}