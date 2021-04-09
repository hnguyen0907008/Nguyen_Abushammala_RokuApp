export default {
    name: "TheMusicThumb",
    props: ["audio"],
    
    data: function(){
        return{
            removeAformat: true,
            showBioData: false,
            currentAudioData: {},
            title: this.audio.title,
            cover: this.audio.cover,
            year: this.audio.year,
            artist: this.audio.artist,
        }
    },

    template:`
    <div @click="logClicked" class="info">
        <section class="bio-data" :class="{'show-bio' : showBioData}">
            <span class="close-lb" @click.prevent="showAudioData(audio)" :class="{'button-modifier' : removeAformat}">x</span>
            
            <div class="video-layout">
                <div class="video-details">
                    <h3>{{ audio.title }} - {{ audio.artist }}</h3>
                    <p>Released: {{ audio.year }}</p>
                </div>

                <audio controls :src="'audio/' + audio.audio_src" type="mp3">
                    Your browser does not support the audio element.
                </audio>
            </div>
        </section> 

        <div class="album-cover">
            <a href="" @click.prevent="showAudioData(audio)" :class="{'button-modifier' : removeAformat}"><img :src="'images/' + audio.cover" :alt='audio.cover + "cover"'></a>
        </div>    
    </div>
    `,

    methods: {
        logClicked(){
            console.log(`fired from inside the ${this.audio.title} component`);
        },

        closeLB(target){
            console.log("hide the Data lightbox");
            this.$delete(this.audio, target);
        },

        showAudioData(target) {
            console.log('clicked to see audio details', target, target.name);
            this.showBioData = this.showBioData ? false : true
            this.currentAudioData = target;
        }
    }
}