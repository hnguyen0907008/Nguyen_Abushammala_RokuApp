import UserComponent from './TheUserComponent.js';

export default {
    name: "AllUsers",

	template: `
    <div class="container-fluid p-0 h-100">
        <div class="row m-0 h-100">
            <div class="w-75 mx-auto">
                <label class="h2 font-weight-bold text-center text-success w-100 mb-5">Choose a Profile</label>
                <div class="row text-center justify-content-center">
                    <user v-for="(user, index) in userList" :liveuser="user" :key="index"></user>
                </div>
            </div>
        </div>
    </div>
	`,

	created: function() {
        // get all users fron DB
        fetch(`/getusers`)
            .then(res => res.json())
            .then(data => this.userList = data)
        .catch(err => console.error(err));
	},

	data() {
	  return (
          {	message: `Who's Using Roku?`, userList: [] }
      )
	},

	components: {
		user: UserComponent
	}
}