import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

import { WebshopServer } from '../../services/webshopServer.service';
import { Kunde } from '../../models/Kunde';
import { Warenkorb } from '../../models/Warenkorb';
import { WarenkorbPosition } from '../../models/WarenkorbPosition';
import { ArtikelService } from 'src/app/services/artikelService.service';

@Component({
    selector: 'app-kasse',
    templateUrl: './kasse.component.html',
    styleUrls: ['./kasse.component.css']
})

/**
 * Daten und Logik für die Kasse-Komponente, d.h. das Template "kasse.component.html".
 * Hinweis: Diese Komponente ist eine vereinfachte Version der Warenkorb-Komponente.
 */
export class KasseComponent implements OnInit {
    

    public constructor(private server: WebshopServer, public artikelService: ArtikelService, 
            private router: Router) {
    }

    public ngOnInit(): void {
        
    }

    
}