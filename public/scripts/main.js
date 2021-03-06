import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import TheMovieThumb from './modules/TheMovieThumbnailComponent.js';

(()=> {
    const vm = new Vue({
        data: {
            allMovies: []
        },

        created: function() {
            fetch('/movies')
                .then(res => res.json())
                .then(data => {
                    //show data in sql table
                    console.table(data);
                    this.allMovies = data;
            })
            .catch(err => console.error(err));
        },

        methods: {

        },

        components: {
            moviethumb: TheMovieThumb
        }
    }).$mount("#app");
})();