import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Friend } from 'src/app/models/Friend';
import { User } from 'src/app/models/User';
import { BackendService } from 'src/app/services/backend.service';

@Component({
    selector: 'app-friends',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
    public friends: Friend[] = [];
    public addList: User[] = [];
    public currentUser: string ="";
    public friendrequest: boolean = false;
    public erg: Boolean = false;
    public unknownUser: boolean = true;
    // addNewFriend input value
    public addNewFriend: string = "";

    public constructor(private router: Router, private backend: BackendService) {
    }

    public ngOnInit(): void {
    }

    public loadCurrentUser(): void {
        this.backend.loadCurrentUser();
    }
  
    public userExists(): Boolean {
        this.backend.userExists(this.addNewFriend)
        .then((ok: Boolean) => {
            if (ok) {
                this.erg = true;
            }
            this.erg = false;
        });
        return this.erg;
    }
    public onSubmit(): void {
        /*
        if (this.userExists() == true) {
            var option = document.createElement('li');
            let value = "Friend request from " + this.addNewFriend;
            option.value = value;
            this.addList.appendchild()
        } else {
            this.unknownUser = false;
        }

        */
    }
}
