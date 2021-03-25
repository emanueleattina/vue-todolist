var app = new Vue({
    el: '#root',
    data: {
        inputTodo: '',
        todoList: []
    },
    methods : {
        aggiungi: function() {
            if(this.inputTodo != '') {
                let ogg = {
                    title: this.inputTodo,
                }
            this.todoList.push(ogg);
            this.inputTodo = '';
            }
        }
    }
});