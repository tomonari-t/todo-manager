const HEADER = {
    "Content-Type": "application/json"
};

export default class Model {
    constructor() {}

    async getAllTask() {
        const res = await fetch('/todos/', {
            method: 'GET',
            header: HEADER
        });
        const json = await res.json();
        return json;
    }

    async createTask(content) {
        const task = {
            content: content
        };
        const res = await fetch('/todos/', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: HEADER
        });
        const json = await res.json();
        return json;
    }

    async modifyTask(id, content, done) {
        const task = {
            content: content,
            done: done
        };
        const res = await fetch(`/todos/${id}`, {
            method: 'PUT',
            body: JSON.stringify(task),
            headers: HEADER
        });
        const json = await res.json();
        return json;
    }

    async deleteTask(id) {
        const res = await fetch(`/todos/${id}`, {
            method: 'DELETE',
            headers: HEADER
        });
    }
}
