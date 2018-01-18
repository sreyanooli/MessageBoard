import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatInputModule,MatSnackBarModule, MatToolbarModule, MatFormFieldModule, MatFormField} from '@angular/material';
import {WebService} from './web.service';
import {NavComponent} from './nav.component';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { HttpModule } from '@angular/http';
import {NewMessageComponent} from './new-message.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HomeComponent} from './home.component'
import { RegisterComponent } from './register.component';
import {AuthService} from './auth.service'

var routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'messages',
  component: MessagesComponent
},
{
  path: 'messages/:name',
  component: MessagesComponent
}
,
{
  path: 'register',
  component: RegisterComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    HttpModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [WebService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
