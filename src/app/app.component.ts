import { Component } from '@angular/core';
import  { NgFor, NgIf } from '@angular/common';
import  { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS }  from './dummy-users';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  users = DUMMY_USERS; 
  selectedUserId?: string;

  onSelectUser(id:string){
    this.selectedUserId = id;
    console.log('Selected User ID:', this.selectedUserId);
    
    // Here you can handle the selected user ID, e.g., navigate to a user detail page
    
  }

  get getNameById():string{
    var selectedUser = this.users.find(user => user.id === this.selectedUserId);
    return selectedUser ? selectedUser.name : '';
  }

  get getUserById(){
        var selectedUser = this.users.find(user => user.id === this.selectedUserId);
    return selectedUser ? selectedUser : null;
  }

}
