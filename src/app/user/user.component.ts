import { Component, Input, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true}) nationality!: string;
  @Output() select = new EventEmitter<string>();


  /**  
   * select = output <string> ();
   * with signals:
   * avatar = input.required <string> ();
   * name = input.required <string> ();
   * imagePath = computed(() => 'assets/users/' + this.avatar); 
   * */

  get imagePath(): string {
    return 'assets/users/' + this.avatar;
  }

  emitUserSelection() {
    console.log('User emitted:', this.id);
    this.select.emit(this.id)
  }
}
