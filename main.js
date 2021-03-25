var app = new Vue({
    el: '#root',
    data: {
        // done: '',
        inputTodo: '',
        todoList: [
            {
                title: 'leggere',
                done: 'daFare',
                modifica: 'nascondi'
            },
            {
                title: 'mangiare',
                done: 'finito',
                modifica: 'nascondi'
            },
            {
                title: 'dormire',
                done: 'daFare',
                modifica: 'nascondi'
            }
        ]
    },
    //computed fa il calcolo del data, lo modifica e ritorna il valore ricalcolato
    computed: {
        todoFiniti: function () {
            let todoFiniti = this.todoList.filter((todo) => todo.done == 'finito');

            return todoFiniti;
        },
        todoSospesi: function () {
            let todoSospesi = this.todoList.filter((todo) => todo.done == 'daFare');

            return todoSospesi;
        }
    },
    methods: {
        aggiungi: function() {
            if(this.inputTodo != '') {
                let ogg = {
                    title: this.inputTodo,
                    done: 'daFare',
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