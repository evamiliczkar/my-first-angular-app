import { DUMMY_TASKS } from './dummy-tasks';
import { Injectable }  from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TasksService{
    private tasks = DUMMY_TASKS;

    constructor(){
        const tasks = localStorage.getItem('tasks');
        if (tasks) {
            this.tasks = JSON.parse(tasks)
        } 
    }

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId)
    }

    addTask( title: string, summary: string, dueDate: string, userId: string ) {
        const taskId = new Date().getTime().toString();
        // Generate a unique ID for the new task
        this.tasks.unshift({
            id: taskId,
            title: title ?? '',
            summary: summary ?? '',
            dueDate: dueDate ?? '',
            userId: userId
        });
        this.saveTasksToLocalStorage();
    }

    removeTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasksToLocalStorage();
    }

    private saveTasksToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }


}