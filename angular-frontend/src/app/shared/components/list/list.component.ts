import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/shared/models/User.model'
import { DialogComponent } from '../dialog/dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  @Input() users: User;
  @Output() myEvent = new EventEmitter();
  
  constructor(
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  deleteUser(user): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: { id: user.id, name: user.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.confirm) {
        this.myEvent.emit({ id: result.id })
      }
    });
  }

  goToTasks(id): void {
    this.router.navigate(['/tasks', { userId: id }]);
  }
}
