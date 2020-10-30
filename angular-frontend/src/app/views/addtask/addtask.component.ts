import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {

  userId: string;
  descr: '';
  selected: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
  }

  onKeyUp(event: any) {
    this.descr = event.target.value;
  }

  radioChange(event: any) {
    this.selected = (event.value === 'true') ? true : false
  }

  confirm() {
    this.taskService.createTask(this.descr, this.selected, this.userId).subscribe(() => {
      this.router.navigate(['/tasks', { userId: this.userId }]);
    })
  }

  cancel() {
    this.router.navigate(['/tasks', { userId: this.userId }]);
  }
}
