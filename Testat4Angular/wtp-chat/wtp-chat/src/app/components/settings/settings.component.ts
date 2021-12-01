import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
//import { ContextService } from 'src/app/services/context.service';


@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    public coffeeOrTea: string = "";
    public aboutText: string ="";
    public chatLayout: string="";
    public firstname:string="";
    public lastname:string="";
    public user:User;

    public constructor(user:User) {
        this.user=user;
    }

    public ngOnInit(): void {
       
    }

    public submitSettings(){
        
    }
}
