import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
/* router: Router in constructor: (klappt nicht)
  public abbrechen(): void {
    this.router.navigate(['/login']);
  }
*/
}
