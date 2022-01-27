import { Injectable } from '@angular/core';

import { Artikel } from '../models/Artikel';
import { WebshopServer } from './webshopServer.service';

@Injectable()
/**
 * Service für den vereinfachten Zugriff auf Artikeldaten.
 * Die Artikelliste wird als Map verwaltet, welches einen Artikel anhand seiner Id findet.
 */
export class ArtikelService {
    private artikelMap: Map<number, Artikel>;

    public constructor(private server: WebshopServer) {
        this.artikelMap = new Map<number, Artikel>();
        // Map aufbauen zum Zugriff auf Artikel über ID
        const artikelliste = this.server.ladeAlleArtikel();
        for (let a of artikelliste) {
            this.artikelMap.set(a.id, a);
        };
    }

    public artikelZuId(id: number): Artikel {
        if (!this.artikelMap.has(id)) {
            throw `artikelPreis: Artikel mit id ${id} existiert nicht!`;
        }
        const artikel = this.artikelMap.get(id) as Artikel;
        return artikel;
    }

    public artikelPreis(artikelId: number): number {
        const artikel = this.artikelMap.get(artikelId);
        if (artikel)
            return artikel.preis;
        else
            throw `artikelPreis: Artikel mit id ${artikelId} existiert nicht!`;
    }

}