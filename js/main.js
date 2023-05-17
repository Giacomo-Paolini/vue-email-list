const { createApp } = Vue

createApp({
    data() {
        return {
            emailArray: []
        }
    },
    methods: {
        generateEmailArray() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                this.emailArray.push(response.data.response)
            })
        },
        cloneEmail() {
            for (let i = 0; i < 10; i++) {
                this.generateEmailArray();
            }
        }
    },
    mounted() {
        this.cloneEmail()
    }
}).mount('#app')