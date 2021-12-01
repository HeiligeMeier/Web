import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { BackendService } from 'src/app/services/backend.service';

@Component({
    selector: 'app-friends',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
    public friends: Array<User> = [];
    public username: string;

    public constructor(private router: Router, private backend: BackendService) {
        this.username ="";
    }

    public ngOnInit(): void {
    }

    public loadCurrentUser(): void {
        this.backend.loadCurrentUser();
    }
}
