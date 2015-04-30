define(["jquery"], function($){
	function Message(confUrl){
		this.confUrl = confUrl;
	}

	Message.prototype.get = function(){
		var deferred = $.Deferred();
		var self = this;

		$.get(this.confUrl).done(function(data){
			self.text = data.message;
			deferred.resolve(self.text);
		});

		return deferred.promise();
	};

	Message.prototype.put = function(element){
		element.text(this.text);
	};

	return Message;
});
