import { Component } from '@angular/core';
import  { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS }  from './dummy-users';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  users = DUMMY_USERS; 
  selectedUserId: string | null = null;

  onSelectUser(id:string){
    console.log('Selected user ID:', id);
    this.selectedUserId = id;
    // Here you can handle the selected user ID, e.g., navigate to a user detail page
    
  }

  get getNameById():string{
    var selectedUser = this.users.find(user => user.id === this.selectedUserId);
    return selectedUser ? selectedUser.name : "No users selected";
  }

}
