// Cat constructor
function Cat(name){
	this.name = name;
}; 

Cat.prototype = {
	meow: function(){
		return "meow";
	}
}
