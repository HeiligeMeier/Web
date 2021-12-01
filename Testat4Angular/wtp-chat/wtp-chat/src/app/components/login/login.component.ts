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
    public username: string;
    public password: string;
    public usernamevalid: boolean;
    public passwordvalid: boolean;
    public pwpristine: boolean;
    public usernamepristine: boolean;

    public constructor(private backend: BackendService, private http: HttpClient, private router: Router) {
        this.username = "";
        this.password = "";
        this.usernamevalid = false;
        this.passwordvalid = false;
        this.usernamepristine = true;
        this.pwpristine = true;
    }

    public ngOnInit(): void {
    }

    
    public login(): void {
        if(this.password == '') {
            this.password = '';
        }
            this.backend.login(this.username, this.password)
            .then((ok: boolean) => {
                if(ok) {
                    console.log("Test");
                    this.router.navigate(['/friends']);
                } else {
                    this.usernamevalid = false;
                    this.passwordvalid = false;
                }
            });
    }


    public usernamecheck(): void {
        this.usernamepristine = false;
        /*  if () {
            this.usernamevalid = true;
        }
        */
    }
    
    public passwordcheck(): void {
       this.pwpristine = false;
       /* if () {
           this.passwordvalid = true;
       }
        */
    }

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