import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  taskId: any;
  task: any;

  constructor(private route: ActivatedRoute, private tasksService: TasksService, private router:Router, private title:Title) {
    this.title.setTitle('Task Details');
  }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.task = this.tasksService.tasks[this.taskId];
  }

  updateTask(){
    this.tasksService.updateTask(this.taskId, this.task);
    this.router.navigate(['/']);
  }

  deleteTask(){
    this.tasksService.deleteTask(this.taskId);
    this.router.navigate(['/']);
  }
}
