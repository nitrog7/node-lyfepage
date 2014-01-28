var LyfeError = exports.error = function(code, message) {
	this.code		= 0;
	this.message	= message;

	Error.captureStackTrace(this, LyfeError);
}

LyfeError.prototype				= Object.create(Error.prototype);
LyfeError.prototype.constructor	= LyfeError;