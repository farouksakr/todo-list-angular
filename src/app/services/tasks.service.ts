import { Task } from './../interfaces/task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks: Task[] = [];

  constructor() {
    let storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    } else {
      this.tasks = [];
    }
  }

  deleteTask(id: number) {
    this.tasks.splice(id, 1);
    this.stroreTasks();
  }

  saveTask(title: any, description: any) {
    this.tasks.push({
      title,
      description,
    });
    this.stroreTasks();
  }

  updateTask(id: number, item: any) {
    this.tasks[id] = item;
    this.stroreTasks();
  }

  // store to local storage
  stroreTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
