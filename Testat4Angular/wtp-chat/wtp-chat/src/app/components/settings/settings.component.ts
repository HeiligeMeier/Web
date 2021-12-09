import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { userInfo } from 'os';
import { Profile } from 'src/app/models/Profile';
import { User } from 'src/app/models/User';
import { BackendService } from 'src/app/services/backend.service';
import { ContextService } from 'src/app/services/context.service';
//import { ContextService } from 'src/app/services/context.service';


@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent  {
    public coffeeOrTea: string = "";
    public aboutText: string ="";
    public chatLayout: string="";
    public firstname:string="";
    public lastname:string="";
    public backend:BackendService;
   
    public profil:Profile;
    // public context:ContextService;
    public router:Router;

    public constructor(private http: HttpClient, router:Router, backend:BackendService, private context: ContextService) {
       this.backend=backend;
       this.profil=new Profile(this.firstname,this.lastname,this.coffeeOrTea,this.aboutText,this.chatLayout);
       this.router=router; 
        
    }

    public ngOnInit():void {
       this.loadCurrentUser();
       
        
        
    }

    public loadCurrentUser(): void {
        this.backend.loadUser(this.context.loggedInUsername).then((user: any) => {
        if (user == null) {
            this.router.navigate(['/login']);
        } else {
            this.profil.firstName = user.firstName;
            this.profil.lastName=user.lastName;
            //this.profil.description=user.aboutText;
            this.aboutText=user.description;
            this.firstname=user.firstName;
            this.lastname=user.lastName;
            this.coffeeOrTea=user.coffeeOrTea;
            this.chatLayout=this.context.currentChatLayout;
            //alert(this.profil.firstName);
        }   
            })
    }
    
    

    public settings(username:string){
        this.context.loggedInUsername = username;
    }

    public submitSettings(){
        this.profil.firstName=this.firstname;
        this.profil.lastName=this.lastname;
        this.profil.description=this.aboutText;
        this.profil.coffeeOrTea=this.coffeeOrTea;
        this.profil.layout=this.chatLayout;
        this.backend.saveCurrentUserProfile(this.profil);
    }
  
    public setLayoutOnelined(): void {
        this.chatLayout = "1";
        this.context.currentChatLayout = this.chatLayout;
    }

    public setLayoutTwolined(): void {
        this.chatLayout = "2";
        this.context.currentChatLayout = this.chatLayout;
    }
}


