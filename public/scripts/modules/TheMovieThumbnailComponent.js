export default {
    name: "TheMovieThumb",
    props: ["movie"],
    //movies_cover = get movie img thumbnail from database
    template:`
    <div class="movie-thumb">
        <img :src='"images/" + movie.video_cover' alt="media thumb">
    </div>
    `
}