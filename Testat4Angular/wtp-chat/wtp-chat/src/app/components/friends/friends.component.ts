import { Component, ComponentFactoryResolver, OnInit, ɵɵpureFunction1 } from '@angular/core';
// import { Router } from '@angular/router';
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

    public inputUsername: string = "";
    public currentUser: string = "";
    public user: User = new User;
    public friendsArray: Array<Friend> = [];
    public friendList: Array<Friend> = [];
    public requestList: Array<Friend> = [];
    public um: Map<String, number> = new Map<string, number>();

    // Konstruktor
    public constructor(private backend: BackendService, private interval: IntervalService, private context: ContextService) {
        this.user.username = this.currentUser;
    }

    public ngOnInit(): void {
        this.loadCurrentUser();
        this.createInterval();
    }

    private createInterval(): void {
        this.interval.setInterval("FriendsComponent", () => {
            this.loadFriendlist();
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
                this.loadFriendlist();
            });
    }

    // Receive Friendlist from Server
    public loadFriendlist(): void {
        this.backend.loadFriends()
            .then((friends: Array<Friend>) => {
                if (friends.length != 0) {
                    this.friendList = friends;
                    let a = 0;
                    let b = 0;
                    for (let i = a + b; i < friends.length; i++) {
                        if (friends[i].status == "accepted") {
                            // flackert, weil auf 0 initialisiert wird
                            if (friends[i].unreadMessages == 0 || friends[i].unreadMessages == undefined) {                                
                                friends[i].unreadMessages = 0;
                            }
                            this.friendsArray[a] = friends[i];
                            this.user.friends[a] = friends[i].username;
                            a++;
                        } else if (friends[i].status == "requested") {
                            this.requestList[b] = friends[i];
                            this.user.friends[b] = friends[i].username;
                            b++;
                        }
                    }
                    this.unreadMessages();
                }
            });
        console.log("Reloading!");
    }

    
    public unreadMessages(): void {
        this.backend.unreadMessageCounts()
            .then((map: Map<String, number>) => {
                this.friendsArray.forEach(friend => {
                    let number = map.get(friend.username);
                    if (number == 0) {
                        // console.log("Number equals 0!");
                    } else if (number != 0 && number != undefined) {
                        friend.unreadMessages = number;
                        // console.log("Number not 0!");
                    } else if (number == undefined) {
                        friend.unreadMessages = 0;
                    }
                });
            });
    }

    // AcceptButtonHandler
    public acceptFriend(friend: Friend) {
        this.backend.acceptFriendRequest(friend.username)
            .then((ok: Boolean) => {
                if (ok) {

                    friend = new Friend(friend.username, "accepted", 0);
                    console.log("added!");
                    // this.user.requests.pop();
                    this.requestList.pop();
                    this.friendsArray.push(friend);
                }
            });
    }

    // DismissButtonHandler
    public declineFriend(friend: Friend) {
        this.backend.dismissFriendRequest(friend.username)
            .then((ok: Boolean) => {
                if (ok) {
                    console.log("declined!");
                    // this.user.requests.pop();
                    this.requestList.pop();
                }
            });
    }

    // AddFriendButtonHandler
    public addFriendButton() {
        this.backend.userExists(this.inputUsername)
            .then((ok: Boolean) => {
                if (ok) {
                    // Falls Nein, wird dieser geaddet
                        this.backend.friendRequest(this.inputUsername)
                            .then((ok: Boolean) => {
                                if (ok) {
                                    console.log("Added Friend somehow!");
                                } else {
                                    console.log("Adding Prozess Failed!");
                                }
                            });
                    }
            });
    }

    // fuer chat
    public chat(username: string) {
        this.context.currentChatUsername = username;
    }
}
