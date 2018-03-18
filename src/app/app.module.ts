import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './Todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'todo',
          component: TodoComponent
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
