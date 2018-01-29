import { Component } from '@angular/core'
import {AuthService} from './auth.service';
import {ToastyModule} from 'ng2-toasty';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';



@Component({
    selector: 'nav',
    template: `
    <mat-toolbar color = "primary">
      
      <button mat-button routerLink = "/">MessageBoard</button>
      <button mat-button routerLink = "/messages">Messages</button>
      <span style = "flex: 1 1 auto"></span>
      <button *ngIf="!auth.isAuthenticated" mat-button routerLink = "/register">Register</button>
      <button *ngIf = "auth.isAuthenticated" mat-button routerLink = "/register">Welcome {{auth.name}}</button>
      <button *ngIf="auth.isAuthenticated" mat-button (click) = "auth.logout()" >Logout</button> 
      <input id="cin" name="cin" type="file" (change)="fileChangeEvent($event)" placeholder="Upload a file..." multiple/>
 
       <button type="button" class="btn btn-success btn-s" (click)="upload()">
    <i class="glyphicon glyphicon-open-file"></i>&nbsp;Upload
     </button>              
    </mat-toolbar>
    <ng2-toasty></ng2-toasty>

    `
})
export class NavComponent {
  filesToUpload: Array<File> = [];

  constructor(private auth: AuthService,private toastyService:ToastyService, private toastyConfig: ToastyConfig) {
    this.toastyConfig.theme = 'material';

  }
  
  upload() {

    this.toastyService.default('Files uploades succeesfully ');
  //   var toastOptions:ToastOptions = {
  //     title: "File upload",
  //     msg: "Succeess",
  //     showClose: true,
  //     timeout: 5000,
  //     theme: 'default',
      
  // };
  //this.toastyService.success(toastOptions);


    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);

    for(let i =0; i < files.length; i++){
        formData.append("uploads[]", files[i], files[i]['name']);
    }
    console.log('form data variable :   '+ formData.toString());

    // formData.append("uploads[]", files[0], files[0]['name']);
    //this.address.documents = files.toString();

        //this.http.post('http://localhost:3003/upload', formData)
       // .map(files => files.json())
        //.subscribe(files => console.log('files', files))
}

fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.product.photo = fileInput.target.files[0]['name'];
}
  
  }

  
  