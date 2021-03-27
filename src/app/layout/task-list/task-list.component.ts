import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  currentTime: any;

  constructor() { }

  ngOnInit() {

    // this.getAllTask()
  }
  // getAllTask() {
  //   this.taskService.getAllTask().subscribe((res => {
  //     console.log(res);

  //   }))
  // }

}
