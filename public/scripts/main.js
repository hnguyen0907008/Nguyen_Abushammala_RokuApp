import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js';
import TheMovieThumb from './modules/TheMovieThumbnailComponent.js';
import TheTVThumb from './modules/TheTVThumbnailComponent.js';
import TheMusicThumb from './modules/TheMusicThumbnailComponent.js';
import AllUsers from './modules/TheAllUsersComponent.js'

//import LoginPage from "./modules/TheLoginComponent.js";
//import HomePage from "./modules/HomePageComponent.js";

(()=> {
    const vm = new Vue({    
        data: {
            allMovies: [],
            allTVs: [],
            allMusics: [],
            userList: []
        },

        created: function() {
            fetch('/movies')
                .then(res => res.json())
                .then(data => {
                    //show data in sql table
                    console.table(data);
                    this.allMovies = data;
            })
            .catch(err => console.error(err)),

            fetch('/tvs')
                .then(res => res.json())
                .then(data => {
                    console.table(data);
                    this.allTVs = data;
            })
            .catch(err => console.error(err)),

            fetch('/audios')
                .then(res => res.json())
                .then(data => {
                    console.table(data);
                    this.allMusics = data;
            })
            .catch(err => console.error(err))
        }, //end created

        methods: {

        },

        components: {
            moviethumb: TheMovieThumb,
            tvthumb: TheTVThumb,
            musicthumb: TheMusicThumb,
            allusersview: AllUsers
        }
    }).$mount("#app");
})();