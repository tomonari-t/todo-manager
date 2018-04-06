import TodoController from './controller.mjs';


const init = async () => {
    const controll = new TodoController();
    // view init
    // controllerにViewとDI
    // new TodoController(view)
    controll.init();
};

init();
