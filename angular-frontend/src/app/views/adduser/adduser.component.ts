import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  name = '';

  constructor(
    public userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onKeyUp(event: any) {
    this.name = event.target.value;
  }

  confirm () {
    this.userService.createUser(this.name).subscribe(() => {
      this.router.navigate(['/']);
    })
  }
}
