define(["jquery"], function($){
	function Message(confUrl){
	}

	Message.prototype.get = function(){
		var deferred = $.Deferred();
		deferred.resolve();

		return deferred.promise();
	};

	Message.prototype.put = function(element){
	};

	return Message;
});
