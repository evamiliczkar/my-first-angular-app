import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './user.model';
// type User = {
//   id: string;
//   name: string;
//   avatar: string;}

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) selected: boolean = false;
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();


  /**  
   * select = output <string> ();
   * with signals:
   * avatar = input.required <string> ();
   * name = input.required <string> ();
   * imagePath = computed(() => 'assets/users/' + this.avatar); 
   * */

  get imagePath(): string {
    return 'assets/users/' + this.user.avatar;
  }

  emitUserSelection() {
    this.select.emit(this.user.id)
  }
}
