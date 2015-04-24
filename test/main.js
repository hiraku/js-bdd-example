/* global require */

require.config({
	baseUrl: "../scripts",
	paths: {
		chai: "../test/vendor/chai/chai",
		sinon: "../test/vendor/sinon-1.14.1",
		jquery: "../vendor/jquery-2.1.3.min"
	}
});

define("mocha", function(){
	window.mocha.setup("bdd");
	return window.mocha;
});

define("expect", ["chai"], function(chai){
	return chai.expect;
});

require(["mocha"], function(mocha){
	mocha.run();
});
