import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import TheMovieThumb from './modules/TheMovieThumbnailComponent.js';
import TheMovDetail from './modules/MovieDetails.js';


(()=> {
    const vm = new Vue({
        routes: [
            {
                path: '/parentsmovie/:id',
                name: 'MovieDetail',
                component: TheMovDetail
            }
        ],

        data: {
            allMovies: [],
            allTV: [],
            allMusic: []
        },

        created: function() {
            fetch('/moviesparent')
                .then(res => res.json())
                .then(data => {
                    //show data in sql table
                    console.table(data);
                    this.allMovies = data;
            })
            .catch(err => console.error(err)),

            fetch('/tvsparent')
                .then(res => res.json())
                .then(data => {
                    //show data in sql table
                    console.table(data);
                    this.allTV = data;
            })
            .catch(err => console.error(err)),

            fetch('/musicsparent')
                .then(res => res.json())
                .then(data => {
                    //show data in sql table
                    console.table(data);
                    this.allMusic = data;
            })
            .catch(err => console.error(err))
        },

        methods: {

        },

        components: {
            moviethumb: TheMovieThumb
        }
    }).$mount("#app");
})();