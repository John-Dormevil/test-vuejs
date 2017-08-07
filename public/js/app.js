window.http = axios;



new Vue({
    el: '#app',

    mounted () {
        http.get('/skills').then(response => {this.skills = response.data});
    },
    data () {
        return {
            skills:  []
        }
    }
})  