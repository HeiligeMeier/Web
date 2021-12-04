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
                        // Message?
    public constructor(private backend: BackendService, private router: Router) {
        this.username = "";
        this.password = "";
        this.usernamevalid = true;
        this.passwordvalid = true;
    }

    public ngOnInit(): void {
    }

    public loginButton(): void {
            this.backend.login(this.username, this.password)
            .then((ok: boolean) => {
                if(ok) {
                    console.log("Login Successful!");
                    this.router.navigate(['/friends']);
                } else {
                    this.passwordvalid = false;
                    this.usernamevalid = false;
                    console.log("Daten nicht korrekt!")
                }
            });
    }

}