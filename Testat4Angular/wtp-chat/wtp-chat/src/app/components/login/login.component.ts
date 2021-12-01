import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public username: string = '';
    public password: string = '';
    public usernamevalid: boolean = false;
    public passwordvalid: boolean = false;

    constructor(backend: BackendService, http: HttpClient, router: Router) {
    }

    public ngOnInit(): void {
    }

    /*
    this.backendService.loadFriends()
    .then(() => {
        for (let f of friends) {
            ... Friends bearbeiten
        }
    });
    */
    /*
    public login(): void {
        if(this.password == '')
            this.password = '';
            this.backend.login(this.username, this.password)
            .then(() => {
                if(ok) {
                    console.log();
                    this.router.navigate(['/friends']);
                } else {
                    this.usernamevalid = false;
                    this.passwordvalid = false;
                }
            });
    }
    */
   /*
    public usernamecheck(): void {
        for (let i = 0; i < accounts.length(); i++)
        if (usernamelogin.value == accounts[i]) {
            this.usernamevalid = true;
        }
    }
    */

   /*
    public passwordcheck(): void {
        if () {
            this.passwordvalid = true;
        }
    }
    */

    public buttoncheck(): boolean {
        /*
        if() {
            return true;
        }
        return false;
    */
    return true;
    }

}