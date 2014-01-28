var Promise		= require('bluebird');
var request		= require('../connection/request.js');
var config		= require('../config.js');
var parser		= require('../parser.js');
var LyfeError	= require('../errors/LyfeError.js');
var _			= require('lodash');

//People
exports.methods	= function(params) {
	console.log(params)
	return {
		getList: function() {
			var path	= '/'+config.protocol+'/people';
			var method	= 'GET';
			return request.api(path, method);
		},
		getDetailsByID: function(userID) {
			var path	= '/'+config.protocol+'/people/'+userID;
			var method	= 'GET';
			return request.api(path, method);
		},
		getDetailsByName: function(username) {
			var path	= '/'+config.protocol+'/people/'+username+'/username';
			var method	= 'GET';
			return request.api(path, method);
		},
		getFollowers: function(userID) {
			var path	= '/'+config.protocol+'/people/'+userID+'/followers';
			var method	= 'GET';
			return request.api(path, method);
		},
		getFollowing: function(userID) {
			var path	= '/'+config.protocol+'/people/'+userID+'/following';
			var method	= 'GET';
			return request.api(path, method);
		},
		getFriends: function(userID) {
			var path	= '/'+config.protocol+'/people/'+userID+'/friends';
			var method	= 'GET';
			return request.api(path, method);
		},
		getTags: function(userID) {
			var path	= '/'+config.protocol+'/people/'+userID+'/tags';
			var method	= 'GET';
			return request.api(path, method);
		},
		getLocations: function(userID) {
			var path	= '/'+config.protocol+'/people/'+userID+'/locations';
			var method	= 'GET';
			return request.api(path, method);
		},

		addItem: function(obj) {
			var data	= parser.parseUserData(obj);

			if(data['username'] === '') {
				return Promise.reject(new LyfeError.error(100, 'Username is required.'));
			}
			if(data['password'] === '' || data['confirm'] === '') {
				return Promise.reject(new LyfeError.error(100, 'Password and confirmation are required.'));
			}
			if(data['email'] === '') {
				return Promise.reject(new LyfeError.error(100, 'Email is required.'));
			}

			var path	= '/'+config.protocol+'/people';
			var method	= 'POST';
			var json	= parser.parseJSONData(data);

			return request.api(path, method, json);
		},

		updateItem: function(obj, key) {
			key			= key || params.key;
			var data	= parser.parseUserData(obj, key);

			if(data['@id'] === '') {
				return Promise.reject(new LyfeError.error(100, 'User ID is required.'));
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
				return Promise.reject(new LyfeError.error(100, 'User ID is required.'));
			}

			var path	= '/'+config.protocol+'/people/'+data['@userID'];
			var method	= 'DELETE';
			var json	= parser.parseJSONData(data);

			return request.api(path, method, json);
		}
	}
};