var remote = require('remote');
var git = remote.require('./lib/git.js');

var Vue = require("vue");
new Vue({
	el: "main",
	data: {
		message: ""
	},
	methods: {
		status: function(){
			var self = this;
			git(function(res){
				self.message = res;
			});
		}
	}
})
