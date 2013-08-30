
var snarks = function(){


	this.paper = Raphael("seats", 1040,200);
	this._scale = 4.2;
	this._point = function(x,y){
		return '' + _scale * x + ',' + _scale * y + ' ';
	};

	this.pig = function(){
		var set = paper.set();
		var mouthpart = paper.path('M ' + _point(3,1+8) + ' L ' + _point(7,1+8) + _point(7,3.5+8) + _point(4,3.5+8) + _point(2.5,2.5+8) + 'z');
		mouthpart.attr({fill:"black"});

		var mouthopen = false;
		this.talk = function(){
			if(mouthopen){
				mouthpart.animate({transform: "T" + _point(0,0) + "r0," + _point(9,3)}, 100, "back-out");
				console.log("r0," + _point(9,0));
			}else{
				mouthpart.animate({transform: "T" + _point(0.3,1.2) + "r-35," + _point(9,3)}, 80, "back-in");
			}
			mouthopen = !mouthopen;

		};

		var body = paper.image("img/pig/pig_zombietorso.png",20,70,101,94);
		var head = paper.image("img/pig/pig_head.png",10,0,126,84);

		set.push(mouthpart,body,head);


		
		return this;
	};
	
	return this;

};


// var paper = Raphael("seats", 1040,240);
// //var mouth = paper.path("M 2,2 10,2 9,5 c 0,0 -4,0 -5,-0.4 -1,-0.8 -2.5,-1.4 -2.5,-1.4 z");

// var _scale = 4.2
// var _point = function(x,y){
// 	return '' + _scale * x + ',' + _scale * y + ' ';
// };
// var mouthpath = 'M ' + _point(2,1) + ' L ' + _point(7,1) +_point(7,3.5) + _point(4,3.5) + _point(2.5,2.5) + 'z';
// console.log(mouthpath);
// var mouth = paper.path(mouthpath);
// mouth.attr({fill:"black"});

// var mouthopen = false
// mouth.click(function(){
// 	if(mouthopen){
// 		this.animate({transform: "T" + _point(0,0) + "r0," + _point(9,3)}, 100, "back-out");
// 		console.log("r0," + _point(9,0));
// 	}else{
// 		this.animate({transform: "T" + _point(0.3,1.2) + "r-35," + _point(9,3)}, 80, "back-in");
// 	}
// 	mouthopen = !mouthopen;
	
// });
	  


