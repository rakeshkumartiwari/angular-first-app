import { Component } from '@angular/core';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']

})
export class TodoComponent {
    inputItem: string;
    msg: string;
    itemList = [];
    addItem(item) {
        // if (item.value !== '') {
        this.itemList.push(item);
        this.inputItem = '';
        // this.msg = ' ';
        // } else {
        // this.msg = 'Please enter some value.';
        // return;
        // }

    }

    removeItem(item) {
        // tslint:disable-next-line:prefer-const
        let index = this.itemList.indexOf(item);
        this.itemList.splice(index, 1);
    }
}
