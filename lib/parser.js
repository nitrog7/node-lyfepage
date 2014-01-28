var _	= require('lodash');

exports.parseJSONData = function(obj) {
	var json	= JSON.stringify(obj);
	return json;
}

exports.parseUserData = function(obj, key) {
	var id	= '';

	if(_.isObject(userID)) {
		id	= _.isUndefined(obj['@id']) ? '' : obj['@id'];
	} else {
		id	= _.isNull(obj) || _.isUndefined(obj) ? '' : obj;
	}

	var data	= {
		'@id':id,
		'@key':key
	};

	return data;
}