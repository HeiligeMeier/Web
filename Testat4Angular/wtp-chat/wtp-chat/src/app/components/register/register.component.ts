import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    public username: string;
    public usernameOK: boolean
    public password: string;
    public passwordOK: boolean;
    public confirm: string;
    public confirmOK: boolean;
    public isUsed: boolean;
    public message: string;

    public constructor(private router: Router, private backend: BackendService) { 
        this.username="";
        this.password="";
        this.confirm="";
        this.usernameOK=false;
        this.passwordOK=false;
        this.confirmOK=false;
        this.isUsed=false;
        this.message="";
    }

    public ngOnInit(): void {
    }

    public test(): void {
        console.log('test');
    }

    public abbrechen(): void {
        this.router.navigate(['login'])
    }

    public keyup(): void {
        this.message = '';
    }

    public keys(form: any): Array<Object> {
        return Object.keys(form.controls);
    }

    public register(): void {
        this.backend.register(this.username, this.password).then((ok: boolean) => {
            if(ok) {
                console.log("register successful!");
                this.router.navigate(['friends']);
            } else {
                console.log("register failed!")
            }
        });
    }

    public validateUsername(): void {
        if(this.username.length < 3) {
            this.usernameOK = false
        } else {
            this.usernameOK = true;
        }
        this.validateIsUsed();
    }

    public validatePassword(): void {
        if(this.password.length < 8) {
            this.passwordOK = false;
        } else {
            this.passwordOK = true;
        }
    }

    public validateConfirm(): void {
        if(this.confirm != this.password) {
            this.confirmOK = false;
        } else {
            this.confirmOK = true;
        }
    }

    public validateIsUsed(): void {
        this.backend.userExists(this.username).then((exists: boolean) => {
            if(exists) {
                this.isUsed=true;
                console.log("User exists");
            } else {
                this.isUsed=false;
                console.log("User does not exist");
            }
        });
    }

}
