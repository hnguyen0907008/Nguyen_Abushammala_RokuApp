export default {
    name: "TheMovieThumb",
    props: ["movie"],

    data: function(){
        return{
            removeAformat: true,
            showBioData: false,
            currentMovieData: {},
            cover: this.movie.movie_cover,
            title: this.movie.movie_title,
            year: this.movie.movie_year,
            runtime: this.movie.movie_runtime,
            storyline: this.movie.movie_storyline,
            trailer: this.movie.movie_trailer
        }
    },
    //<div class="movie-thumb">s
    //<img :src='"images/" + movie.movie_cover' alt="media thumb">
    template:`
    <div class="info" @click="logClicked">
        <section class="bio-data" :class="{'show-bio' : showBioData}">
            <span class="close-lb" @click.prevent="showMovieData(movie)" :class="{'button-modifier' : removeAformat}">x</span>
            
            <div class="video-layout">
                <div class="video-details">
                    <h3>{{ movie.movie_title }}</h3>
                    <p>Released: {{ movie.movie_year }}</p>
                    <p>Runtime: {{ movie.movie_runtime }}</p>
                    <p>Storyline: {{ movie.movie_storyline }}</p>
                </div>
                <video controls>
                    <source :src="'movies/' + movie.movie_trailer" type="video/mp4">
                    <p>Sorry, your browser doesn't support the video.</p>
                </video>
            </div>
        </section> 

        <div class="movie-thumb">
            <a href="" @click.prevent="showMovieData(movie)" :class="{'button-modifier' : removeAformat}"><img :src="'images/' + movie.movie_cover" :alt='movie.movie_cover + "image"' id="thumbnail"></a>
        </div>    
    </div>
    `,

    methods: {
        logClicked(){
            console.log(`fired from inside the ${this.movie.movie_title} component`);
        },

        closeLB(target){
            console.log("hide the Data lightbox");
            this.$delete(this.movie, target);
        },

        showMovieData(target) {
            console.log('clicked to see movie details', target, target.name);
            this.showBioData = this.showBioData ? false : true
            this.currentMovieData = target;
        }
    }
}