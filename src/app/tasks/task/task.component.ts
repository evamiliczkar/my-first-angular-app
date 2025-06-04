import { Component, Input } from '@angular/core';
import { type Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input() task?: Task;


  constructor(private tasksService: TasksService){}


  onCompleteTask(){
    if (this.task && this.task.id) {
      this.tasksService.removeTask(this.task.id);
    }
   

  }

}
