export default {
    name: "TheLoginCompnent",

    template:
        `
    <section>
        <h2>
            This is the login component
        </h2>

        <input type="text" placeholder="username" v-model="username">
        <input type="password" placeholder="password" v-model="password">

        <input @click="storeCreds" type="submit" value="save">
    </section>
    `,

    data: function() {
        return {
            username: "",
            password: ""
        }
    },

    methods: {
        //type stuffs into login form => store data
        storeCreds() {
            window.localStorage.setItem("creds", JSON.stringify({
                //type on form, it will overwritten
                name: this.username, 
                pword: this.password, 
                userId: "1224"
            }));

            window.localStorage.setItem("progress", JSON.stringify({
                tutname: "Use React",
                vidsession: 1
            }));
        }
    }
}