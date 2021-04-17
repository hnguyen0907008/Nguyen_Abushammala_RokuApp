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
    //<img :src='"images/" + movie.movie_cover' alt="media thumb">
    template:`
        <div class="movie-thumb">
            <img :src="'images/' + movie.movie_cover" :alt='movie.movie_cover + "image"' id="thumbnail"></a>
        </div>    
    `,

    methods: {
        
    }
}