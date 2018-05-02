const Scene = require('Scene');
const Reactive = require('Reactive');
const TouchGestures = require('TouchGestures');
const Diagnostics = require("Diagnostics");
const Time = require('Time');


var mug_ctrl = Scene.root.find('plane_collection')
var planeTracker = Scene.root.find('planeTracker0');



var path_ctrl = Scene.root.find('path_ctrl')
var planeTracker = Scene.root.find('planeTracker0');


TouchGestures.onTap().subscribe(function(gesture) {


		for (var i = 1; i < 15; i++)
		{
			
			var cancelableTimer = Time.setTimeout(
				function (elapsedTime) { 

					Diagnostics.log("Hi");
			
					path_ctrl.child("p"+i).hidden = false; 	

					Time.clearTimeout(cancelableTimer);
			}, 1300);
			
			
		}

		

		for( var i = 1; i < 3; i++ )
		{
		Time.setTimeout(
			function (elapsedTime) { 
			  Diagnostics.log('You should see this message in the console.'); 
			}, 1300);
		}

});

// TouchGestures.onTap().subscribe(function(gesture) {
//   planeTracker.trackPoint(gesture.location);
    

// });

TouchGestures.onPan(planeTracker).subscribe(function(gesture) {

	planeTracker.trackPoint(gesture.location, gesture.state);
});

TouchGestures.onPinch().subscribe(function(gesture) {
	
	var lastScaleX = mug_ctrl.transform.scaleX.lastValue;
	mug_ctrl.transform.scaleX = Reactive.mul(lastScaleX, gesture.scale);

	var lastScaleY = mug_ctrl.transform.scaleY.lastValue;
	mug_ctrl.transform.scaleY = Reactive.mul(lastScaleY, gesture.scale);

	var lastScaleZ = mug_ctrl.transform.scaleZ.lastValue;
	mug_ctrl.transform.scaleZ = Reactive.mul(lastScaleZ, gesture.scale);
});

TouchGestures.onRotate(mug_ctrl).subscribe(function(gesture) {
  var lastRotationY = mug_ctrl.transform.rotationY.lastValue;
  mug_ctrl.transform.rotationY = Reactive.add(lastRotationY, Reactive.mul(-1, gesture.rotation));
});
