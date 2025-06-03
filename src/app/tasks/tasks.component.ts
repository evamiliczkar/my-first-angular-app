import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
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
