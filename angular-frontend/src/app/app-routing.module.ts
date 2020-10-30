import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtaskComponent } from './views/addtask/addtask.component';
import { AdduserComponent } from './views/adduser/adduser.component';
import { TasksComponent } from './views/tasks/tasks.component';
import { UsersComponent } from './views/users/users.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'adduser', component: AdduserComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'addtask', component: AddtaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
