import { Component } from '@angular/core';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']

})
export class TodoComponent {
    msg = 'This is require field.';
    itemList: any = [];
    addItem(inputItem) {
        if (inputItem.status !== 'INVALID') {
            const todo = new Todo();
            todo.id = this.getId();
            todo.name = inputItem.value;
            this.itemList.push(todo);
        }
        console.log(inputItem);
    }

    removeItem(item) {
        this.itemList = this.itemList.filter(i => i.id !== item);
    }

    getId() {
        return Math.floor(1000 + Math.random() * 9000);
    }
}
export class Todo {
    id: number;
    name: string;
}
