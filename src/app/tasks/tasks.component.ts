import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})


export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  showNewTaskDialog = false;


  constructor(private tasksService: TasksService) {
    console.log('TasksComponent initialized for user:', this.tasksService);

  }

  onCloseAddTask() {
    this.showNewTaskDialog = !this.showNewTaskDialog;
  }

  get selectedUserTasks() {
    console.log('Fetching tasks for user:', this.userId);

    return this.tasksService.getUserTasks(this.userId);

  }

  removeTask(taskId: string) {
    this.tasksService.removeTask(taskId);
  }


}
