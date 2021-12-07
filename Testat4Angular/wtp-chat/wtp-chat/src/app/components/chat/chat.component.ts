import { Component, OnDestroy, OnInit } from '@angular/core';
import { AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'src/app/models/Message';
import { User } from 'src/app/models/User';
import { BackendService } from 'src/app/services/backend.service';
import { ContextService } from 'src/app/services/context.service';
import { IntervalService } from 'src/app/services/interval.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit, AfterViewChecked, OnDestroy {
    // DIV für Nachrichten (s. Template) als Kind-Element für Aufrufe (s. scrollToBottom()) nutzen
    @ViewChild('messagesDiv') private myScrollContainer: ElementRef;

    public user: string;
    public partner: string;
    public message: string;
    public msglist: Message[];
    public isTwolined: boolean;
    public compname: string;
    
    
    public constructor(private backend: BackendService, private router: Router, private interval: IntervalService, private context: ContextService) { 
        this.myScrollContainer = new ElementRef(null);
        this.user="";
        this.partner="";
        this.message="";
        this.msglist =[];
        this.isTwolined=false;
        this.compname = "chat"
    }

    public ngAfterViewChecked() {        
        this.scrollToBottom();        
    } 

    /**
     * Setzt in der Nachrichtenliste die Scrollposition ("scrollTop") auf die DIV-Größe ("scrollHeight"). Dies bewirkt ein 
     * Scrollen ans Ende.
     */
    private scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch(err) { 
        }                 
    }

    public ngOnInit(): void {
        this.scrollToBottom();
        this.setUser();
        this.setPartner();
        this.interval.setInterval(this.compname, () => {
            this.loadMsg();
        });

    }

    public ngOnDestroy(): void {
        this.interval.clearIntervals();
    }

    public setUser(): void {
        this.backend.loadCurrentUser().then((val: User | null) => {
            if(val==null) {
                this.user="";
                console.log("Not signed in.");
            } else {
                this.user = val.username;
                console.log(this.user);
            }
        });
    }

    public setPartner(): void {
        this.partner = this.context.currentChatUsername
    }

    public loadMsg(): void {
        this.backend.listMessages(this.partner).then((msgarray: Message[]) => {
            for(let i = 0; i < msgarray.length; i++) {
                this.msglist[i] = msgarray[i];
            }
        });
    }

    public sendMsg(): void {
        this.backend.sendMessage(this.user, this.message).then((ok: boolean) => {
            if(ok) {
                console.log("Message sent.");
            } else {
                console.log("Something went wrong.");
            }
        });
    }

    public goBack(): void {
        this.router.navigate(['friends']);
    }

    public toProfile(): void {
        this.router.navigate(['profile']);
    }

    public friendRemove(): void {
        let eingabe: boolean;
        eingabe = window.confirm("Do you want to remove " + this.partner + "as your friend?");
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

    public twolined(): void {
        if(this.context.currentChatLayout == "onelined") {
            this.isTwolined = false;
        } else if (this.context.currentChatLayout == "twolined") {
            this.isTwolined = true;
        } else {
            console.log("Couldn't load setting")
        }
    }

}
