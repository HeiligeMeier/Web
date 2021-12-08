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

    public componentName = "friends";
    public inputUsername: string = "";
    public currentUser: string = "";
    public friendsArray: Array<Friend> = [];
    public requestList: Array<Friend> = [];
    public addedDeclined: Boolean = false;
    public um: Map<String, number> = new Map<string, number>();

    // Konstruktor
    public constructor(private backend: BackendService, private interval: IntervalService, private context: ContextService) {
      
    }

    public ngOnInit(): void {
        this.loadCurrentUser();
        this.interval.setInterval(this.componentName, () => {
            this.getUnreadMessages();
        });
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

    // AcceptButtonHandler
    public acceptFriend() {
        console.log("Test");
        this.backend.acceptFriendRequest(this.currentUser)
            .then((ok: Boolean) => {
                if (ok) {
                    for (let i = 0; i < this.requestList.length; i++){
                        let list = new Friend(this.requestList[i].username, this.requestList[i].status, this.requestList[i].unreadMessages);
                        this.friendsArray.push(list);
                        this.requestList.splice(this.requestList.length-1, 1);
                    }
                    /* let list = new Friend(this.friendRequestUser, "accepted", 0);
                    this.friendsArray.push(list);
                    this.addedDeclined = true; 
                    */
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
        // eventuell
        this.backend.dismissFriendRequest(this.currentUser)
            .then((ok: Boolean) => {
                if (ok) {
                    for (let i = 0; i < this.requestList.length; i++){
                        this.requestList.splice(this.requestList.length-1, 1);
                    }
                    // this.addedDeclined = true;
                    console.log("Declined Friend!");
                } else {
                    // this.addedDeclined = true;
                    console.log("Friend Decline went wrong!");
                }
            });
    }

    // AddFriendButtonHandler
    public addFriendButton() {
        this.backend.userExists(this.inputUsername)
            .then((ok: Boolean) => {
                if (ok) {
                    console.log("User exists!");
                    
                    this.backend.friendRequest(this.inputUsername)
                        .then((ok: Boolean) => {
                            if (ok) {
                                console.log("Added Friend somehow!");
                            } else {
                                console.log("Adding Prozess Failed!");
                            } 
                        });
                    
                } else {
                    console.log("User does not exist!");
                }
            });
    }
  
    // fuer chat
    public chat(username: string) {
        this.context.currentChatUsername = username;
    }
}

