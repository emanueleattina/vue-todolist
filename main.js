var app = new Vue({
    el: '#root',
    data: {
        inputTodo: '',
        todoList: [
            {
                title: 'leggere',
                fatto: ''
            }
        ]
    },
    methods : {
        aggiungi: function() {
            if(this.inputTodo != '') {
                let ogg = {
                    title: this.inputTodo,
                    fatto: ''
                }
            this.todoList.push(ogg);
            this.inputTodo = '';
            }
        },
        fatto: function() {
            this.fatto = 'barrato';
        }
    }
});