function Cat(name){
	this.name = name;
}

// cd /Users/wesmaldonado/workspace/tdd-javascript/example-app
// run via: screwserver spec/javascripts/screw-unit/ public/javascripts/ ./public/
Screw.Unit(function(){
 
	describe("Cat", function() {
		var cat;
	  before(function() {
	    cat = new Cat("fluffy");
	  });
  
		it(" should have the right name for fluffy", function(){
			expect(cat.name).to(equal, "fluffy");
			
		});

    it(" should have a name", function(){
       expect("fluffy").to(equal, new Cat("fluffy").name);
    });

	});
	
	describe("dom manipulation", function(){
		it("should let you use jQuery to manipulate the dom ", function(){
			expect(jQuery('<span>foo</span>').text()).to(equal, "bar");
		});
	});
});

