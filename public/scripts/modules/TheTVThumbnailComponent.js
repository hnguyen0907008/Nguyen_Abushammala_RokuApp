export default {
    name: "TheTVThumb",
    props: ["tv"],
    
    data: function(){
        return{
            removeAformat: true,
            showBioData: false,
            currentTVData: {},
            cover: this.tv.tv_cover,
            title: this.tv.tv_title,
            year: this.tv.tv_year,
            runtime: this.tv.tv_runtime,
            storyline: this.tv.tv_storyline,
            trailer: this.tv.tv_trailer
        }
    },

    template:`
    <div @click="logClicked">
        <section class="bio-data" :class="{'show-bio' : showBioData}">
            <span class="close-lb" @click.prevent="showTVData(tv)" :class="{'button-modifier' : removeAformat}">x</span>
            
            <div class="video-layout">
                <div class="video-details">
                    <h3>{{ tv.tv_title }}</h3>
                    <p>Released: {{ tv.tv_year }}</p>
                    <p>Runtime: {{ tv.tv_runtime }}</p>
                    <p>Storyline: {{ tv.tv_storyline }}</p>
                </div>
                <video controls>
                    <source :src="'tvshows/' + tv.tv_trailer" type="video/mp4">
                    <p>Sorry, your browser doesn't support the video.</p>
                </video>
            </div>
        </section> 

        <div class="movie-thumb">
            <a href="" @click.prevent="showTVData(tv)" :class="{'button-modifier' : removeAformat}"><img :src="'images/' + tv.tv_cover" :alt='tv.tv_cover + "image"' id="thumbnail"></a>
        </div>    
    </div>
    `,

    methods: {
        logClicked(){
            console.log(`fired from inside the ${this.tv.tv_title} component`);
        },

        closeLB(target){
            console.log("hide the Data lightbox");
            this.$delete(this.tv, target);
        },

        showTVData(target) {
            console.log('clicked to see movie details', target, target.name);
            this.showBioData = this.showBioData ? false : true
            this.currentTVData = target;
        }
    }
}