var Promise	= require('bluebird');
var request	= require('../connection/request.js');
var config	= require('../config.js');
var parser	= require('../parser.js');
var _		= require('lodash');

//Messages
exports.methods	= function(params) {
	return {
		getList: function(userID) {
			var path	= '/'+config.protocol+'/people/'+userID+'/messages';
			var method	= 'GET';
			request(path, method, null);
		},
		getDetails: function(userID) {
			var path	= '/'+config.protocol+'/messages/'+userID;
			var method	= 'GET';
			request(path, method, null);
		},

		addItem: function(userID) {
			var path	= '/'+config.protocol+'/messages/'+userID;
			var method	= 'GET';
			request(path, method, null);
		},
	}
};