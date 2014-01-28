var request	= require('../connection/request.js');
var config	= require('../config.js');
var parser	= require('../parser.js');

//Authenticate
exports.methods	= {
	login: function(username, password) {
		var self	= this;

		var json	= parser.parseJSONData({
			username:username,
			password:password
		});

		var path	= '/'+config.protocol+'/authenticate';
		var method	= 'POST';

		return request(path, method, json);
	},

	logout: function(userID) {
		var path	= '/'+config.protocol+'/authenticate/'+userID;
		var method	= 'DELETE';

		return request(path, method);
	},

	open: function(key) {
		var path	= '/'+config.protocol+'/authenticate/'+userID;
		var method	= 'GET';

		return request(path, method);
	},

	connect: function(id, secret) {
		var path	= '/'+config.protocol+'/authenticate/'+id+'/app';
		var method	= 'GET';

		var json	= parser.parseJSONData({
			secret:secret
		});

		return request(path, method, json);
	}
};