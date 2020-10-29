import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
// tslint:disable-next-line: no-input-rename
@Input('task') task: Task;
  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  removeTask(task: Task){

    const response = confirm('Esta seguro de eliminar la tarea??');

    if (response) {
      this.dataService.removeTask(task);
    }


  }

}
