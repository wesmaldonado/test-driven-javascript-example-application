require('/specs/spec_helper');
require('/implementations/cat');

var CatSpec = {
	// example of setting up reusable before each
  'before each': function() {
		Cat.prototype.meow = function(){ return "blah"; }
	
	//console.log("before each was called");
  },

  // this is a subclass for your class.
  // subclass of the describe context
  describe: function(context, definition) {
    definition['before each'] = this['before each'];
    describe("Cat" + context, definition);
  }
};

CatSpec.describe(' my favorite cat', {
	' should have a name': function(){
		var cat = new Cat('fluffy');
		value_of(cat.name).should_be('fluffy');
	}
});


CatSpec.describe(' when meowing', {
    'should roar': function(){
	  	var fluffy = new Cat('fluffy');
    	value_of(fluffy.meow()).should_be("roar");
    }
});


