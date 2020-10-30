import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/shared/services/task.service';
import { Task } from 'src/app/shared/models/Task.model'
import { MatDialog } from '@angular/material/dialog';
import { StatedialogComponent } from 'src/app/shared/components/statedialog/statedialog.component';
import { DeletedialogComponent } from 'src/app/shared/components/deletedialog/deletedialog.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  userId: string;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
    this.taskService.getTasks(this.userId).subscribe(data => {
      this.tasks = data
    });
  }

  goToAddtask(): void {
    this.router.navigate(['/addtask', { userId: this.userId }]);
  }

  changeState(id, descr, state) {
    const dialogRef = this.dialog.open(StatedialogComponent, {
      width: '300px',
      data: { task_id: id, descr: descr, state: state }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.confirm) {
        this.taskService.changeState(result.task_id, result.state, this.userId).subscribe((res) => {
          this.ngOnInit()
        })
      }
    });
  }

  excludeTask(id, descr) {
    const dialogRef = this.dialog.open(DeletedialogComponent, {
      width: '300px',
      data: { task_id: id, user_id: this.userId, descr: descr }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.confirm) {
        this.taskService.deleteTask(result.task_id, this.userId).subscribe((res) => {
          this.ngOnInit()
        })
      }
    });
  }

}
