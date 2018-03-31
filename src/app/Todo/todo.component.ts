import { Component } from '@angular/core';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']

})
export class TodoComponent {
    inputItem: string;
    msg: string;
    itemList: any = [];
    addItem() {
        const todo = new Todo();
        todo.id = this.getId();
        todo.name = this.inputItem;
        this.itemList.push(todo);
        this.inputItem = '';
       // console.log(this.itemList);
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
