import { Component, EventEmitter, Output, inject, Input } from '@angular/core';

import { TasksService } from '../tasks.service';




@Component({
  selector: 'app-new-task',
 standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',

})

export class NewTaskComponent {
  @Input({ required: true }) userId!: string
  @Output() close = new EventEmitter<void>();
 // @Output() emitNewTask = new EventEmitter<Task>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TasksService);

  onCancelTask() {
    this.close.emit();
  }

  onCreateTask() {
    this.tasksService.addTask(
      this.enteredTitle,
      this.enteredSummary,
      this.enteredDate,
      this.userId);
    this.enteredTitle = '';
    this.enteredSummary = '';
    this.enteredDate = '';
    // Reset the form fields after emitting the new task
      this.close.emit();
  }

}
