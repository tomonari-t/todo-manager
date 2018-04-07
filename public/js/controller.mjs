import Model from './model.mjs';
import {
    default as ItemListView,
} from './ItemListView.mjs';

export default class TodoController {
    constructor() {
        this.model = new Model();
        this.view = new ItemListView(this);
    }

    async init() {
        const tasks = await this.model.getAllTask();
        this.view.addItems(tasks.todos);
    }

    async addItem(title) {
        const task = await this.model.createTask(title);
        this.view.addItem(task);
    }

    async modifyItem(id, content, done) {
        const task = await this.model.modifyTask(id, content, done);
        console.log(task);
        return task
    }

    async deleteItem(id) {
        const json = await this.model.deleteTask(id);
    }
}
