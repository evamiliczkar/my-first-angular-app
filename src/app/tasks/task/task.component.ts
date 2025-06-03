import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model'; // Assuming you have a Task model defined in task.model.ts


@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input() task?: Task;
  @Output() emitTaskId = new EventEmitter<string>();


  onCompleteTask(){
    if (this.task){
      this.emitTaskId.emit(this.task.id);
    }
  }
}
