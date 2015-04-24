define(["expect", "sinon", "jquery", "message"], function(expect, sinon, $, Message){
	describe("Message", function(){
		var message;

		beforeEach(function(){
			var d = $.Deferred();
			sinon.stub($, "ajax").returns(d.promise());
			d.resolve({message: "Dummy message"});

			message = new Message("../conf.json");
		});

		afterEach(function(){
			$.ajax.restore();
		});

		it("get", function(done){
			message.get().done(function(text){
				expect(text).to.equal("Dummy message");
				expect(message.text).to.equal("Dummy message");

				done();
			});
		});

		it("put", function(){
			var e = $("<span></span>");
			message.text = "foo";
			message.put(e);

			expect(e.text()).to.eq("foo");
		});
	});
});
