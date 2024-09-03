const {createApp} = Vue;

createApp(
    {
        data() {
            return {
                todosList: [
                    {
                        text: 'MI SVEGLIO',
                        done:true,
                    },
                    {
                        text: 'FACCIO COLAZIONE',
                        done:false,
                    },
                    {
                        text: 'SEGUO LA LEZIONE',
                        done:true,
                    },
                    {
                        text: 'FACCIO ESERCIZIO DEL GIORNO ASSEGNATO',
                        done:true,
                    },
                    {
                        text: 'VADO IN PALESTRA',
                        done:false,
                    },
                    {
                        text: 'CENO',
                        done:true,
                    },
                    {
                        text: 'FINISCO ESERCIZIO ASSEGNATO',
                        done:false,
                    },
                    {
                        text: 'VADO A DORMIRE',
                        done:true,
                    },
                ],
                newTodo:''
            };
        },
        methods: {
            addTodo() {
                const cleanTodo = this.newTodo.trim();

                if(cleanTodo != '') {
                    this.todosList.push({
                        text: cleanTodo,
                        done: true,
                    });
                    this.newTodo = '';
                }
            },
            removeTodo(i) {
                this.todosList.splice(i, 1);
            }
        }
    }
).mount('#app');