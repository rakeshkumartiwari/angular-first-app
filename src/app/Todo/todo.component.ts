import { Component } from '@angular/core';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html'

})
export class TodoComponent {

    msg: string;
    itemList = [];
    addItem(item) {
        // if (item.value !== '') {
        this.itemList.push(item.value);
        // this.msg = ' ';
        // } else {
        // this.msg = 'Please enter some value.';
        // return;
        // }

    }

    removeItem(item) {
        // tslint:disable-next-line:prefer-const
        let index = this.itemList.indexOf(item.value);
        this.itemList.splice(index - 1, 1);
    }
}
