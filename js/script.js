const {createApp} = Vue;

createApp(
    {
        data() {
            return {
                todosList: [
                    'MI SVEGLIO',
                    'FACCIO COLAZIONE',
                    'SEGUO LA LEZIONE',
                    'FACCIO ESERCIZIO DEL GIORNO ASSEGNATO',
                    'VADO IN PALESTRA',
                    'CENO',
                    'FINISCO ESERCIZIO ASSEGNATO',
                    'VADO A DORMIRE',
                ]
            };
        }
    }
).mount('#app');