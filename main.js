var app = new Vue({
    el: '#root',
    data: {
        // done: '',
        inputTodo: '',
        todoList: [
            {
                title: 'leggere',
                done: '',
                modifica: 'nascondi'
            },
            {
                title: 'mangiare',
                done: 'finito',
                modifica: 'nascondi'
            },
            {
                title: 'dormire',
                done: '',
                modifica: 'nascondi'
            }
        ]
    },
    methods : {
        aggiungi: function() {
            if(this.inputTodo != '') {
                let ogg = {
                    title: this.inputTodo,
                    done: '',
                    modifica: 'nascondi'
                }
            this.todoList.push(ogg);
            this.inputTodo = '';
            }
        },
        fatto: function(todo) {
            let i = this.todoList.indexOf(todo);
            this.todoList[i].done = 'finito';
        },
        cancella: function(todo) {
            let i = this.todoList.indexOf(todo);
            this.todoList.splice(i, 1);
        },
        edit: function(todo) {
            let i = this.todoList.indexOf(todo);
            this.todoList[i].modifica = 'mostra';
        },
        endEdit: function(todo) {
            let i = this.todoList.indexOf(todo);
            this.todoList[i].modifica = 'nascondi';
        }
    }
});