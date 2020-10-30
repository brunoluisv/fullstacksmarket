import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './views/users/users.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './shared/components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ListComponent } from './shared/components/list/list.component'; 
import { MatListModule } from '@angular/material/list'; 
import { MatDividerModule } from '@angular/material/divider'; 
import { HttpClientModule } from '@angular/common/http';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AdduserComponent } from './views/adduser/adduser.component';
import { MatInputModule } from '@angular/material/input';
import { TasksComponent } from './views/tasks/tasks.component'
import { MatCardModule } from '@angular/material/card';
import { AddtaskComponent } from './views/addtask/addtask.component';
import { MatRadioModule } from '@angular/material/radio';
import { StatedialogComponent } from './shared/components/statedialog/statedialog.component';
import { DeletedialogComponent } from './shared/components/deletedialog/deletedialog.component'; 

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    ListComponent,
    DialogComponent,
    AdduserComponent,
    TasksComponent,
    AddtaskComponent,
    StatedialogComponent,
    DeletedialogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
