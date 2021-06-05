export class Todo {

    id: number;
    title: string;
    description: string;
    isDone?: boolean;

    constructor(data = {}) {
        Object.assign(this, data);
    }
}
