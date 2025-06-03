import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from './dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true}) name!: string;
  @Input({ required: true}) userId!:string;
  tasks = DUMMY_TASKS;

get selectedUserTasks(){
console.log('Selected user ID:', this.userId);
  return this.tasks.filter(task => task.userId === this.userId);

}

removeTask(taskId:string) {
  console.log('Removing task with ID:', taskId);
  this.tasks = this.tasks.filter(task => task.id !== taskId);
  console.log('Updated tasks:', this.tasks);
}
}
