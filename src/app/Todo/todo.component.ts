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
        this.itemList.push(
            {
                'name': this.inputItem,
                'id': this.getId()
            });
        this.inputItem = '';
        console.log(this.itemList);
    }

    removeItem(item) {
       this.itemList = this.itemList.filter(i => i.id !== item);
    }

    getId() {
        return Math.floor(1000 + Math.random() * 9000);
    }
}
