var https	= require( 'https' );
var Promise	= require('bluebird');
var config	= require('../config.js');

exports.api	= function(path, method, json) {
	return new Promise(function(resolve, reject) {
		var results		= '';
		var opts		= JSON.parse(JSON.stringify(config.params));
		opts.path		= path;
		opts.method		= method;
		opts.headers	= {'Content-Length':Buffer.byteLength(json, 'utf8')};

		var req	= https.request(opts, function(res) {
			res.on('data', function(chunk) {
				results += chunk;
			});

			res.on('end', function() {
				resolve(JSON.parse(results));
			});
		});

		req.on('error', function(error) {
			reject(error);
		});

		req.write(json);
		req.end();
	});
}