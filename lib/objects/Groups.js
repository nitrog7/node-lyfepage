var request		= require('../connection/request.js');
var config		= require('../config.js');
var LyfeError	= require('../errors/LyfeError.js');

//Groups
exports.methods	= {
	getList: function() {
		var path	= '/'+config.protocol+'/groups';
		var method	= 'GET';
		return request.api(path, method);
	},

	getDetails: function(groupID) {
		var path	= '/'+config.protocol+'/groups/'+groupID;
		var method	= 'GET';
		return request.api(path, method);
	},

	getFollowers: function(groupID) {
		var path	= '/'+config.protocol+'/groups/'+groupID+'/followers';
		var method	= 'GET';
		return request.api(path, method);
	},

	getTags: function(groupID) {
		var path	= '/'+config.protocol+'/groups/'+groupID+'/tags';
		var method	= 'GET';
		return request.api(path, method);
	},

	getLocations: function(groupID) {
		var path	= '/'+config.protocol+'/groups/'+groupID+'/locations';
		var method	= 'GET';
		return request.api(path, method);
	},

	addItem: function(obj) {
		var data	= parser.parseUserData(obj);

		if(data['name'] === '') {
			return Promise.reject(new LyfeError.error(100, 'Group name is required.'));
		}

		var path	= '/'+config.protocol+'/groups';
		var method	= 'POST';
		var json	= parser.parseJSONData(data);

		return request.api(path, method, json);
	},

	updateItem: function(obj, key) {
		key			= key || params.key;
		var data	= parser.parseUserData(obj, key);

		if(data['@id'] === '') {
			return Promise.reject(new LyfeError.error(100, 'Group ID is required.'));
		}

		var path	= '/'+config.protocol+'/people/'+data['@userID'];
		var method	= 'PUT';
		var json	= parser.parseJSONData(data);

		return request.api(path, method, json);
	},

	delItem: function(obj, key) {
		key			= key || params.key;
		var data	= parser.parseUserData(obj, key);

		if(data['@id'] === '') {
			return Promise.reject(new LyfeError.error(100, 'Group ID is required.'));
		}

		var path	= '/'+config.protocol+'/groups/'+data['@id'];
		var method	= 'DELETE';
		var json	= parser.parseJSONData(data);

		return request.api(path, method, json);
	}
};