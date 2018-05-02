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


	var timing = 300;
	Time.setTimeout(
		function (elapsedTime) { 
		  Diagnostics.log('Timing 1.'); 
		  path_ctrl.child("p1").hidden = false; 	
		  Time.setTimeout(
				function (elapsedTime) { 
				Diagnostics.log('Timing 2.'); 
				path_ctrl.child("p2").hidden = false; 	
				Time.setTimeout(
					function (elapsedTime) { 
					Diagnostics.log('Timing 3.'); 
					path_ctrl.child("p3").hidden = false; 	
					Time.setTimeout(
						function (elapsedTime) { 
						Diagnostics.log('Timing 4.'); 
						path_ctrl.child("p4").hidden = false; 	
						Time.setTimeout(
							function (elapsedTime) { 
							Diagnostics.log('Timing 5.'); 
							path_ctrl.child("p5").hidden = false; 	
							Time.setTimeout(
								function (elapsedTime) { 
								Diagnostics.log('Timing 6.'); 
								path_ctrl.child("p6").hidden = false; 	
								Time.setTimeout(
									function (elapsedTime) { 
									Diagnostics.log('Timing 7.'); 
									path_ctrl.child("p7").hidden = false; 
									Time.setTimeout(
										function (elapsedTime) { 
										Diagnostics.log('Timing 8.'); 
										path_ctrl.child("p8").hidden = false; 	
										Time.setTimeout(
											function (elapsedTime) { 
											Diagnostics.log('Timing 9.'); 
											path_ctrl.child("p9").hidden = false; 	
											Time.setTimeout(
												function (elapsedTime) { 
												Diagnostics.log('Timing 10.'); 
												path_ctrl.child("p10").hidden = false; 	
												Time.setTimeout(
													function (elapsedTime) { 
													Diagnostics.log('Timing 11.'); 
													path_ctrl.child("p11").hidden = false; 	
													Time.setTimeout(
														function (elapsedTime) { 
														Diagnostics.log('Timing 12.'); 
														path_ctrl.child("p12").hidden = false; 	
														Time.setTimeout(
															function (elapsedTime) { 
															Diagnostics.log('Timing 13.'); 
															path_ctrl.child("p13").hidden = false; 	
															Time.setTimeout(
																function (elapsedTime) { 
																Diagnostics.log('Timing 14.'); 
																path_ctrl.child("p14").hidden = false; 	
															}, timing);
														}, timing);
													}, timing);
												}, timing);
											}, timing);
										}, timing);
									}, timing);
								}, timing);
							}, timing);
						}, timing);
					}, timing);
				}, timing);
			}, timing);
		}, timing);
		
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
