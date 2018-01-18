import { Component } from '@angular/core'
import {AuthService} from './auth.service';


@Component({
    selector: 'nav',
    template: `
    <mat-toolbar color = "primary">
      
      <button mat-button routerLink = "/">MessageBoard</button>
      <button mat-button routerLink = "/messages">Messages</button>
      <span style = "flex"></span>
      <button *ngIf="!auth.isAuthenticated" mat-button routerLink = "/register">Register</button>
      <button *ngIf = "auth.isAuthenticated" mat-button routerLink = "/register">Welcome {{auth.name}}</button>
      <button *ngIf="auth.isAuthenticated" md-button (onClick) = "auth.logout()" >Logout</button>                           
    </mat-toolbar>
    `
})
export class NavComponent {
  constructor(private auth: AuthService) {}

  
  }

  
  