import { Component, ComponentFactoryResolver, OnInit, ɵɵpureFunction1 } from '@angular/core';
import { Router } from '@angular/router';
import { Friend } from 'src/app/models/Friend';
import { User } from 'src/app/models/User';
import { BackendService } from 'src/app/services/backend.service';
import { ContextService } from 'src/app/services/context.service';
import { IntervalService } from 'src/app/services/interval.service';

@Component({
    selector: 'app-friends',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

    // Globale Attribute
    // friendRequestUser als User? 
    public friendRequestUser: string = "";
    public currentUser: string = "";
    public friendsArray: Array<Friend> = [];
    public requestList: Array<Friend> = [];
    public addedDeclined: Boolean = false;
    public um: Map<String, number> = new Map<string, number>();
    /*
    public TestAnfrage = new Friend("Timo", "", 0);
    public TestFreund = new Friend("Karen", "accepted", 1);
    public TestFreund1 = new Friend("Celina", "accepted", 4);
    public TestFreund2 = new Friend("Hans-Jürgen", "accepted", 8);
    */

    // Konstruktor
    public constructor(private backend: BackendService, private interval: IntervalService, private context: ContextService) {
        // Zur Darstellung
        /*
        this.requestList.push(this.TestAnfrage);
        this.friendsArray.push(this.TestFreund);
        this.friendsArray.push(this.TestFreund1);
        this.friendsArray.push(this.TestFreund2);
        */
    }

    public ngOnInit(): void {
        this.loadCurrentUser();
    }

    // loading the logged in User
    public loadCurrentUser(): void {
        this.backend.loadCurrentUser()
        .then((value: User | null) => {
            if (value != null) {
                this.currentUser = value.username + "'s Friend";
            } else {
                this.currentUser = "Someone's Friends";
            }
            this.getFriendlist();
        });
    }

    // Receive Friendlist from Server
    public getFriendlist(): void {
        this.backend.loadFriends()
            .then((value: Array<Friend>) => {
                if (value != null) {
                    console.log(JSON.stringify(value));
                    for (let i = 0; i < value.length; i++) {
                        let flist = new Friend(value[i].username, value[i].status, value[i].unreadMessages);
                        if (flist.status == "accepted") {
                            this.friendsArray.push(flist);
                        } else {
                            this.requestList.push(flist);
                        }
                    }
                    this.getUnreadMessages();
                }
            });
    }

    // Number of unread Messages
    public getUnreadMessages() {
        this.backend.unreadMessageCounts()
            .then((nameNumber: Map<String, number>) => {
                if (nameNumber != null) {
                    this.um = nameNumber;
                }
            });
    }

    // addedDeclined wieder auf false setzen wenn anfrage ankommt?
    // AcceptButtonHandler
    public acceptFriend() {
        console.log("Test");
        this.backend.acceptFriendRequest(this.friendRequestUser)
            .then((ok: Boolean) => {
                if (ok) {
                    let list = new Friend(this.friendRequestUser, "accepted", 0);
                    this.friendsArray.push(list);
                    this.addedDeclined = true;
                    console.log("Accepted Friend!");
                } else {
                    // this.addedDeclined = true;
                    console.log("Friend Accept went wrong!");
                }
            });
    }

    // DismissButtonHandler
    public declineFriend() {
        console.log("TestDecline");
        this.backend.dismissFriendRequest(this.friendRequestUser)
            .then((ok: Boolean) => {
                if (ok) {
                    this.addedDeclined = true;
                    console.log("Declined Friend!");
                } else {
                    // this.addedDeclined = true;
                    console.log("Friend Decline went wrong!");
                }
            });
    }

    // AddFriendButtonHandler
    public addFriendButton() {
        this.backend.userExists(this.friendRequestUser)
            .then((ok: Boolean) => {
                if (ok) {
                    console.log("User exists!");
                    /*
                    this.backend.friendRequest(this.friendAdder)
                        .then((ok: Boolean) => {
                            if (ok) {
                                console.log("Added Friend somehow!");
                            } else {
                                console.log("Adding Prozess Failed!");
                            } 
                        });
                    */
                } else {
                    console.log("User does not exist!");
                    // alert(this.friendAdder + " does not exist!");
                }
            });
    }
  
      //fuer chat
    public chat(username: string) {
        this.context.currentChatUsername = username;
    }

    
}

    /*
    // Intervalservice for continous function use 
    
    private createInterval(): void {
        this.interval.setInterval(Component, function(): void => {
            this.getFriendlist();
        });
    }
    */

