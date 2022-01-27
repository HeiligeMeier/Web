import { Component } from '@angular/core';
import { Todo } from '../models/Todo';

import * as moment from 'moment';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent {
    
    public todos: Array<Todo>;
    public description: string;
    public responsible: string;
    public due: string;

    public constructor() {
        this.todos = [];
        this.description = '';
        this.responsible = '';
        this.due = '2021-12-01';
    }

    public getOpenTodos(): Array<Todo> {
        return this.todos.filter(todo => !todo.done);
    }

    public getClosedTodos(): Array<Todo> {
        let result: Array<Todo> = new Array<Todo>();

        for (let i = 0; i < this.todos.length; ++i) {
            if (this.todos[i].done) {
                result.push(this.todos[i]);
            }
        }
        console.log(`${JSON.stringify(result)}`);

        return result;
    }

    public deleteTodo(index: number): void {
        this.todos.splice(index, 1);
    }

    public addTodo(): void {
        const todo = new Todo(this.description, this.responsible, new Date(this.due), false);
        this.todos.push(todo);
    }
    
}