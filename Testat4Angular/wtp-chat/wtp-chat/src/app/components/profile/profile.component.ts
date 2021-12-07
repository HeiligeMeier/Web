import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { userInfo } from 'os';
import { Profile } from 'src/app/models/Profile';
import { BackendService } from 'src/app/services/backend.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    profil: Profile;
    public partner:string;

    public constructor(private backend: BackendService, private router:Router) { 
            this.profil=new Profile("test","test","coffee","testdesc","oneline");
             
             this.partner="";
    }

    public ngOnInit(): void {
    }

    public backToChat(){
        this.router.navigate(['/chat']);
    }

    public friendRemove(): void {
        let eingabe: boolean;
        eingabe = window.confirm("Do you want to remove" + this.partner + "as your friend?");
        if(eingabe) {
            this.backend.removeFriend(this.partner).then((ok: boolean) => {
                if(ok) {
                    console.log("Friend removed.");
                    this.router.navigate(['friends']);
                } else {
                    console.log("Something went wrong.");
                }
            });
        }
        
    }


}
