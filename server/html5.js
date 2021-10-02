(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"html5_atlas_1", frames: [[0,724,128,128],[130,724,128,128],[260,724,128,128],[390,724,128,128],[482,0,128,128],[482,130,128,128],[482,260,128,128],[482,390,128,128],[520,520,128,128],[520,650,128,128],[520,780,128,128],[0,854,128,128],[130,854,128,128],[260,854,128,128],[390,854,128,128],[612,0,128,128],[612,130,80,64],[0,0,480,360],[0,362,480,360],[482,520,24,25],[612,196,72,60]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.explosion_01 = function() {
	this.initialize(ss["html5_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.explosion_02 = function() {
	this.initialize(ss["html5_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.explosion_03 = function() {
	this.initialize(ss["html5_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.explosion_04 = function() {
	this.initialize(ss["html5_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.explosion_05 = function() {
	this.initialize(ss["html5_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.explosion_06 = function() {
	this.initialize(ss["html5_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.explosion_07 = function() {
	this.initialize(ss["html5_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.explosion_08 = function() {
	this.initialize(ss["html5_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.explosion_09 = function() {
	this.initialize(ss["html5_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.explosion_10 = function() {
	this.initialize(ss["html5_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.explosion_11 = function() {
	this.initialize(ss["html5_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.explosion_12 = function() {
	this.initialize(ss["html5_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.explosion_13 = function() {
	this.initialize(ss["html5_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.explosion_14 = function() {
	this.initialize(ss["html5_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.explosion_15 = function() {
	this.initialize(ss["html5_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.explosion_16 = function() {
	this.initialize(ss["html5_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.敵人的飛機 = function() {
	this.initialize(ss["html5_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.宇宙1 = function() {
	this.initialize(ss["html5_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.宇宙2 = function() {
	this.initialize(ss["html5_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.自己的子彈 = function() {
	this.initialize(ss["html5_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.自己的飛機 = function() {
	this.initialize(ss["html5_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.自己的飛機_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.自己的飛機();
	this.instance.setTransform(-36,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.自己的飛機_1, new cjs.Rectangle(-36,-30,72,60), null);


(lib.bullet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.自己的子彈();
	this.instance.setTransform(-12,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bullet, new cjs.Rectangle(-12,-12.5,24,25), null);


(lib.plane2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.敵人的飛機();
	this.instance.setTransform(-40,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.plane2, new cjs.Rectangle(-40,-32,80,64), null);


(lib.explo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.explosion_01();
	this.instance.setTransform(-64,-64);

	this.instance_1 = new lib.explosion_02();
	this.instance_1.setTransform(-64,-64);

	this.instance_2 = new lib.explosion_03();
	this.instance_2.setTransform(-64,-64);

	this.instance_3 = new lib.explosion_04();
	this.instance_3.setTransform(-64,-64);

	this.instance_4 = new lib.explosion_05();
	this.instance_4.setTransform(-64,-64);

	this.instance_5 = new lib.explosion_06();
	this.instance_5.setTransform(-64,-64);

	this.instance_6 = new lib.explosion_07();
	this.instance_6.setTransform(-64,-64);

	this.instance_7 = new lib.explosion_08();
	this.instance_7.setTransform(-64,-64);

	this.instance_8 = new lib.explosion_09();
	this.instance_8.setTransform(-64,-64);

	this.instance_9 = new lib.explosion_10();
	this.instance_9.setTransform(-64,-64);

	this.instance_10 = new lib.explosion_11();
	this.instance_10.setTransform(-64,-64);

	this.instance_11 = new lib.explosion_12();
	this.instance_11.setTransform(-64,-64);

	this.instance_12 = new lib.explosion_13();
	this.instance_12.setTransform(-64,-64);

	this.instance_13 = new lib.explosion_14();
	this.instance_13.setTransform(-64,-64);

	this.instance_14 = new lib.explosion_15();
	this.instance_14.setTransform(-64,-64);

	this.instance_15 = new lib.explosion_16();
	this.instance_15.setTransform(-64,-64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-64,128,128);


(lib.宇宙1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.宇宙1();
	this.instance.setTransform(-240,-180);

	this.instance_1 = new lib.宇宙2();
	this.instance_1.setTransform(-240,-180);

	this.plane_mc = new lib.自己的飛機_1();
	this.plane_mc.name = "plane_mc";
	this.plane_mc.setTransform(0,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.plane_mc},{t:this.instance_1}]},14).to({state:[{t:this.instance},{t:this.plane_mc},{t:this.instance_1}]},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-180,480,360);


// stage content:
(lib.html5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.score_txt = new cjs.Text("888", "30px 'Arial'", "#FFFF00");
	this.score_txt.name = "score_txt";
	this.score_txt.lineHeight = 36;
	this.score_txt.lineWidth = 65;
	this.score_txt.parent = this;
	this.score_txt.setTransform(413,324.75);

	this.plane_mc = new lib.自己的飛機_1();
	this.plane_mc.name = "plane_mc";
	this.plane_mc.setTransform(248.75,330);

	this.instance = new lib.宇宙1_1();
	this.instance.setTransform(240,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.plane_mc},{t:this.score_txt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(240,180,240,181);
// library properties:
lib.properties = {
	id: '72A7FD7535E89B4B8C7F4806F480577C',
	width: 480,
	height: 360,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/html5_atlas_1.png?1606460422065", id:"html5_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['72A7FD7535E89B4B8C7F4806F480577C'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;