import { Component } from '@angular/core';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html'

})
export class TodoComponent {
    msg: string;
    list = [];
    showMsg(title: HTMLInputElement) {
        if (title.value !== '') {
            this.list.push(title.value);
            title.value = null;
            this.msg = ' ';
        } else {
            this.msg = 'Please enter some value.';
            return;
        }

    }
}
