// Login-Signin
new Vue({
    el: "#app",
    data:{
        type:"password",
    },
    methods:{
        displayPassword:function(){
            if(this.type == "password")
                this.type = "text";
            else
                this.type = "password";
        }
    }
});

// header
new Vue({
    el: '#mainNav',
    data: {
        disp: "none",
    },
    methods:{
        display_header: function(){
            if(this.disp == "none"){
                this.disp = "block";
            }else{
                this.disp = "none"
            }
        },
    }
});