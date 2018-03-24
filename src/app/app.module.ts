import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './Todo/todo.component';
import { ContactFormComponent } from './contact-form/contact-form-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {
          path: 'todo',
          component: TodoComponent
        },
        {
          path: 'contactForm',
          component: ContactFormComponent
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
