import ItemView from './itemView.mjs';

export default class ItemListView {
    constructor(ctr) {
        const self = this;
        this.controller = ctr;
        this.todos = [];
        this.$textArea = $('#textArea');
        this.$submitBtn = $('#createBtn');
        this.$listWrapper = $('#todoList');

        self.$submitBtn.click(function (e) {
            e.preventDefault();
            self.controller.addItem(self.$textArea.val());
            self.$textArea.val('');
        });
    }


    addItem(task) {
        const item = new ItemView(this.controller, task);
        this.todos.push(item);
        this.$listWrapper.append(item.getDom());
    }

    addItems(items) {
        for (const item of items) {
            this.addItem(item);
        }
    }
}
