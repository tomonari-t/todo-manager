export default class ItemView {
    constructor(ctr, task) {
        const self = this;
        self.controller = ctr;
        self.id = task.id;
        self.content = task.content;
        self.done = task.done;
        self.$dom = self._createItem();
        self._render();

        self.$dom.find('.itemEditBtn').click(async function (e) {
            const modifiedContent = prompt('write text', self.content);
            const modifiedTask = await self.controller.modifyItem(self.id, modifiedContent, self.done);
            self.content = modifiedTask.content;
            self._render();
        });

        self.$dom.find('.itemDeleteBtn').click(async function () {
            await self.controller.deleteItem(self.id);
            self.remove();
        });

        const $checkBox = self.$dom.find('.itemCheckBox');
        $checkBox.click(async function () {
            const isDone = $checkBox.prop('checked');
            const modifiedTask = await self.controller.modifyItem(self.id, self.content, isDone);
            self.done = modifiedTask.done;
            self._render();
        });
    }

    getDom() {
        return this.$dom;
    }

    remove() {
        this.$dom.remove();
    }

    _createItem() {
        return $(`
<li class="todo-list__item" data-id="">
    <input class="itemCheckBox" type="checkbox">
    <span class="itemTitle"></span>
    <input class="itemEditBtn" type="button" value="edit">
    <input class="itemDeleteBtn"type="button" value="delete">
</li>
`);
    }

    _render() {
        this._modifyContent();
        if (this.done) {
            this._checkItem();
        } else {
            this._unCheckItem();
        }
    }

    _modifyContent() {
        this.$dom.find('.itemTitle').text(this.content);
    }

    _checkItem() {
        this.$dom.find('.itemCheckBox').css('text-decoration', 'line-through');
    }

    _unCheckItem() {
        this.$dom.find('.itemCheckBox').css('text-decoration', 'none');
    }
}
