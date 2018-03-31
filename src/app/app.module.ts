import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './Todo/todo.component';
import { ContactFormComponent } from './contact-form/contact-form-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form-component';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ContactFormComponent,
    ReactiveFormComponent
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
        },
        {
          path: 'reactiveForm',
          component: ReactiveFormComponent
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
