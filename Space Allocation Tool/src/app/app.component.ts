import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-prj';
  showLogin= true;

  constructor(private appService : AppService) { }
  userIdEntered(userId: any){
    this.showLogin=false;
    console.log(userId);
    this.appService.userId=userId;
  }

  loggedOut(){
    this.showLogin=true;
  }
}
