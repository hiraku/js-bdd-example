require.config({
	paths: {
		jquery: "../vendor/jquery-2.1.3.min"
	}
});

require(["jquery", "message"], function($, Message){
	var message = new Message("conf.json");
	message.get().done(function(text){
		$(".message").text(text);
	});
});
