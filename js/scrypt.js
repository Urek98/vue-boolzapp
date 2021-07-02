Vue.config.devtools = true;
const app = new Vue(
    {
        el: '#app',
        data: {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
            ],
            chatIndex: 0,
            newMessage: '',
            searchItem: ''
        },
        methods: {

            // Milestone 2 
            // funzione per inserire colori dinamici ai messaggi
            checkStatus: function (status) {
                if (status === "sent") {
                    return 'green-message';
                } else {
                    return 'white-message';
                }
            },

            // funzione per visualizzare la corretta chat
            move: function (index) {
                this.chatIndex = index;
            },

            
            // Milestone 3
            // funzione che aggiunge nuovi messaggi e risponde
            addText: function () {
                this.contacts[this.chatIndex].messages.push({
                    date: this.getCurrentDateTime(),
                    text: this.newMessage,
                    status: 'sent'
                });
                this.newMessage = '';
                setTimeout(() => {
                    this.contacts[this.chatIndex].messages.push({
                        date: this.getCurrentDateTime(),
                        text: 'ok',
                        status: 'received'
                    });
                }, 2000)
            },

            // Milestone 4 
            // funzione per filtrare e cercare i contatti
            search: function () {
                return this.contacts.filter(item => {
                    return item.name.toLowerCase().includes(this.searchItem.toLowerCase());
                });
            },

            // funzione con data e ora
            getCurrentDateTime: function () {
                const dateTimeNow = dayjs();
                return dateTimeNow.format("DD/MM/YYYY HH:mm:ss");
            },
            
            // funzione solo con data
            getLastAccess: function () {
                const dateLastAccess = dayjs();
                return dateLastAccess.format("HH:mm");
            },
        },
    }
    );