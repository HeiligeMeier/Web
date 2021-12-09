import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { userInfo } from 'os';
import { Profile } from 'src/app/models/Profile';
import { BackendService } from 'src/app/services/backend.service';
import { ContextService } from 'src/app/services/context.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    profil: Profile;
    public partner:string;

    public constructor(private context:ContextService, private backend: BackendService, private router:Router) { 
            this.profil=new Profile("test","test","coffee","testdesc","oneline");
             
             this.partner="";
    }

    public ngOnInit(): void {
        this.loadCurrentUser();
    }

    public backToChat(){
        this.router.navigate(['/chat']);
    }

    public friendRemove(): void {
        let eingabe: boolean;
        eingabe = window.confirm("Do you want to remove" + this.partner + "as your friend?");
        if(eingabe) {
            this.backend.removeFriend(this.context.currentChatUsername).then((ok: boolean) => {
                if(ok) {
                    console.log("Friend removed.");
                    this.router.navigate(['friends']);
                } else {
                    console.log("Something went wrong.");
                }
            });
        }
        
    }

    public loadCurrentUser(): void {
        this.backend
        .loadUser(this.context.currentChatUsername)
        .then((user: any) => {
            
            this.profil.firstName = user.firstName ? user.firstName : this.context.currentChatUsername;
            this.profil.lastName = user.lastName ? user.lastName : '';
            this.profil.description = user.description ? user.description : 'Die Beschreibung von '+ this.profil.firstName + " ist noch nicht ausgefüllt";
            /*if(this.profil.description=""){
                this.profil.description="Die Beschreibung von "+ this.profil.firstName + " ist noch nicht ausgefüllt";
            }*/
            this.profil.coffeeOrTea = user.coffeeOrTea ? user.coffeeOrTea : 0 // statt "1"
            if(this.profil.coffeeOrTea=="1"){
                this.profil.coffeeOrTea="Coffee";
            }else if(this.profil.coffeeOrTea=="2"){
                this.profil.coffeeOrTea="Tea";
            }else{
                this.profil.coffeeOrTea="Neither nor";
            }
            this.profil.layout = user.layout ? user.layout : "1";
        })}
    }
    
    



