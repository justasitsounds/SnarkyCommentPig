
var snarks = function(){


	this.paper = Raphael("seats", 1040,200);
	this._scale = 4.2;
	this._point = function(x,y){
		return '' + _scale * x + ',' + _scale * y + ' ';
	};

	this.randomInt = function(min, max) {
	  return Math.floor(Math.random() * (max - min + 1) + min);
	}

	this.twitchlimb = function(limb, setx,sety, rotatex, rotatey,callback){
			var cb = callback || function(){};
			var translatestring = "t" + setx + "," + sety;
			var rotateorigin = "" + rotatex + "," + rotatey;
			console.log("rotateorigin : " + rotateorigin);
			var rotate = function(dir){
				return "r" + 10 * dir + "," + rotateorigin;
			}
			var twitchin = function(){
				limb.animate({transform:translatestring + rotate(1)},randomInt(20,200),"<>",cb);	
			}
			limb.animate({transform:translatestring + rotate(-1)},randomInt(20,200),"<>",twitchin);	
		};

	this.pig = function(){
		var set = paper.set();
		var _mouthy = 8.8;
		var _mouthx = 0.1;
		var mouthpart = paper.path('M ' + _point(3+_mouthx,1+_mouthy) + ' L ' + _point(7+_mouthx,1+_mouthy) + _point(7+_mouthx,3.5+_mouthy) + _point(4+ _mouthx,3.5+_mouthy) + _point(2.5+ _mouthx,2.5+_mouthy) + 'z');
		mouthpart.attr({fill:"black"});

		var _pigx = 750
		var _pigy = 49;
		var mouthopen = false;
		
		this.closemouth = function(callback){
			mouthpart.animate({transform: "t" + (_pigx *1 + 3)+ "," + (_pigy*1 + 4) + "r0," + _point(9,3+_mouthy)}, randomInt(100,400), "back-out",callback);
		}
		this.openmouth = function(callback){
			var openanim = "t" + (_pigx*1 + 12) + "," + (_pigy*1 + 8) + "r-35," + _point(9,3+_mouthy);

			mouthpart.animate({transform: openanim}, randomInt(80,200), "back-in",callback);
		}
		this.talk = function(callback){
			if(mouthopen){
				closemouth(callback);
			}else{
				openmouth(callback)
			}
			mouthopen = !mouthopen;

		};

		this.yak = function(){

			this.talk(function(){talk(function(){talk(function(){talk()})});});
			
		};

		var body = paper.image("img/pig/pig_zombietorso.png",24,70,101,94);
		var head = paper.image("img/pig/pig_head.png",10,0,126,84);
		var lefthand = paper.image("img/pig/pig_lefthand.png",14,80,31,27);
		var righthand = paper.image("img/pig/pig_righthand.png",114,72,38,26);
		var tail = paper.image("img/pig/pig_tail.png",112,98,41,34);

		set.push(mouthpart,body,head,lefthand,righthand,tail);
		set.transform("t" + _pigx + "," + _pigy);
		//set.attr({"fill":"#999"});

		this.twitchtail = function(){
			twitchlimb(tail,_pigx,_pigy,110,96);
		}


		this.twitchhand = function(){
			twitchlimb(lefthand,_pigx,_pigy,(14+31), (80 + 27));
				
		}

		this.slowTwitch = function(){
			console.log('slowTwicth');
			var rand = randomInt(1,10);
			if(rand > 6){
				twitchtail();
				console.log('twitching tail');
			}
			if(rand > 4 && rand < 8){
				twitchhand();
				console.log('twitching hand');
			}
		}

		timeoutID = window.setInterval(this.slowTwitch, 800);

		
		return this;
	};
	
	this.sheep = function(){

		var set = paper.set();

		var _sheepx = 120;
		var _sheepy = 44;
		var mouthopen = false;

		var mouth = paper.image("img/sheep/sheep_jaw.png",108,42,31,19);
		var body = paper.image("img/sheep/sheep_body.png",0,52,135,145);
		var head = paper.image("img/sheep/sheep_head.png",30,10,111,60);
		var ear = paper.image("img/sheep/sheep_ear.png",21,1,36,33);

		set.push(mouth,body,head,ear);
		set.transform("t" + _sheepx + "," + _sheepy);

		this.yak = function(){
			twitchlimb(mouth,_sheepx,_sheepy,108,42,function(){
				twitchlimb(mouth,_sheepx,_sheepy,108,42);
			});
		}

		
		this.twitchear = function(){
			twitchlimb(ear,_sheepx,_sheepy,57,34);
		}

		this.slowTwitch = function(){
			var rand = randomInt(1,10);
			if(rand > 6){
				twitchear();
			}
		}

		timeoutID = window.setInterval(this.slowTwitch, 800);

		return this;
	}

	return this;

};




