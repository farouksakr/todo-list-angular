import { TasksService } from 'src/app/services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})

export class AddTaskComponent implements OnInit {
  constructor(public tasksService: TasksService, private router: Router, private title:Title) {
    this.title.setTitle('Add Task');
  }

  ngOnInit(): void {}

  saveTask(title: any, description: any) {
    if (title.value = " ") {
      alert('please add your task');
    } else {
      this.tasksService.saveTask(title.value, description.value);
      this.router.navigate(['/']);
    }
  }
}
