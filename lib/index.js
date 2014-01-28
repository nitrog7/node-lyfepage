'use strict';

//var Hash			= require('hashish');
//var querystring 	= require('querystring');
var config			= require('./config.js');
var LyfeError		= require('./errors/LyfeError.js');

//Objects
var Authenticate	= require('./objects/Authenticate.js');
var People			= require('./objects/People.js');
var Pages			= require('./objects/Pages.js');
var Groups			= require('./objects/Groups.js');
var Messages		= require('./objects/Messages.js');


var LyfePage = exports.api = function(req, res, data) {
	data			= data || {};

	this.params		= {};
	this.params.key	= data.key || '';

	return {
		//Objects
		//authenticate = Authenticate.methods(this.params);
		people:	People.methods(this.params)
		//LyfePage.prototype.pages		= Pages.methods(this.params);
		//LyfePage.prototype.groups		= Groups.methods(this.params);
		//LyfePage.prototype.messages		= Messages.methods(this.params);
	}
}

//Get current client version
LyfePage.prototype.version		= config.version;
