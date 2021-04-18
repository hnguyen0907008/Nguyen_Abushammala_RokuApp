export default {
    name: "UserComponent",

    props: ['liveuser'],


    template: `
    <div class=" cursor-pointer">
        <a href="/looking"><img class="rounded-circle" :src="'images/' + liveuser.user_avatar"></a>
        <label class="text-white d-block mt-2 h5"> Current User </label>
    </div>
    
    `,

    created: function() {
        // check if there's an avatar, if not, set temporary avatar
        if(this.liveuser.user_avatar == null){
            this.liveuser.user_avatar = "temp_avatar.jpg";
        }
    },

    methods: {

    }
}