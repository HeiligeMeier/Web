import { HttpClient } from '@angular/common/http';
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
    public friendsArray: Array<Friend> = [];
    public currentUser: string ="";
    public friendName: Friend | undefined;
    public friendrequest: boolean = false;
    public erg: Boolean = false;
    public unknownUser: boolean = true;
    public addNewFriend: string = "";

    public constructor(private http: HttpClient, private router: Router, private backend: BackendService) {
    }

    public ngOnInit(): void {
        this.loadCurrentUser();
    }

    public loadCurrentUser(): void {
        let usedUser = this.backend.loadCurrentUser();
        usedUser.then((value: User | null) => {
            if (value != null) {
                this.currentUser = value.username + "'s Friend";
            } else{
                this.currentUser = "Unknown´s Friends";
            }
            this.getFriendlist();
        });
    }
  
    public getFriendlist(): void {     
        this.backend.loadFriends()
        .then((value: Array<Friend>) =>
        {
          if(value != null) {  
            console.log(value);

            let karen = new Friend("karen", "accepted", 0);
            this.friendsArray.push(karen);



            // Friendlist soll mit Daten befüllt werden
            for(let i = 0; i < value.length; i++) {                
                let flist = new Friend(value[i].username, value[i].status, value[i].unreadMessages);
                this.friendsArray.push(flist);
            }   
        //    this.getUnreadMessages();
        //   console.log(this.um);        
          }

          else {
              console.log("User has no friends");
          }
        }
        );        
    }

    // Friend gibt unreadmessages aus,
    public friendlist(): void  {
        this.backend.loadFriends()
        .then(() => {
               
        });
    }
    
    // Buttonhandler von add friendlist
    public onSubmit(): void {
        /*
        if (this.userExists()) {
        } else {
            alert("User does not exist!");
        }
        */
    }

    // Überprüft ob Nutzer existiert
    public userExists(): Boolean {
        this.backend.userExists(this.addNewFriend)
        .then((ok: Boolean) => {
            if (ok) {
                this.erg = true;
                this.unknownUser = true;
            }
            this.erg = false;
            this.unknownUser = false;
        });
        return this.erg;
    }

    /*  Serveraufrufe
    loadCurrentUser()
    userExists(username: string) ?????
    loadFriends()
    friendRequest(username: string)
    acceptFriendRequest(username: string)
    dismissFriendRequest(username: string)
    unreadMessageCounts()
    */
}
