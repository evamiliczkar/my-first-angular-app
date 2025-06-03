import { Component, Input } from '@angular/core';
import { type Task } from './task.model';
import {  DatePipe } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
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
