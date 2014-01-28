var request	= require('../connection/request.js');
var config	= require('../config.js');

//Pages
exports.methods	= {
	list: function() {},
	details: function() {},

	getList: function(userID, callback) {
		var path	= '/'+this.protocol+'/pages/'+userID;
		var method	= 'GET';
		request(path, method, null, callback);
	},
};