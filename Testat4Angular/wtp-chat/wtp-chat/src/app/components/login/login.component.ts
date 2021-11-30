import { Component, OnInit } from '@angular/core';

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

    public constructor() {
    }

    public ngOnInit(): void {
    }
    // accounts ist ein Array für registrierte Nutzer
    /*
    public usernamecheck(): void {
        for (let i = 0; i < accounts.length(); i++)
        if (usernamelogin.value == accounts[i]) {
            this.usernamevalid = true;
        }
    }

    public passwordcheck(): void {
        if () {
            this.passwordvalid = true;
        }
    }

    public buttoncheck(): boolean {
        if() {
            return true;
        }
        return false;
    }

    */
}