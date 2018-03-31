import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'reactive-form',
    templateUrl: './reactive-form-component.html',
    styleUrls: ['./reactive-form-component.css']

})

export class ReactiveFormComponent {
    rForm: FormGroup;
    post: any;
    description: string;
    name: string;
    titleAlert = 'This field is required.';

    constructor(private fb: FormBuilder) {
        this.rForm = fb.group({
            'name': [null, Validators.required],
            'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
            'validate': ''
        });

    }
    addPost(post) {
        this.description = post.description;
        this.name = post.name;
    }

    // ngOnInit() {
    //     this.rForm.get('validate').valueChanges.subscribe(
    //         (validate) => {
    //             if (validate === '1') {

    //             }
    //         }
    //     );
    // }
}
