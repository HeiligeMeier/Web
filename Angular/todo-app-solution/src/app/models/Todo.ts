export class Todo {
    
    public description: string;
    public responsible: string;
    public due: Date;
    public done: boolean;
    
    public constructor(description: string, responsible: string, due: Date, done: boolean) {
        this.description = description;
        this.responsible = responsible;
        this.due = due;
        this.done = done;
    }
    
}