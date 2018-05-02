const Scene = require('Scene');
const Reactive = require('Reactive');
const TouchGestures = require('TouchGestures');
const Diagnostics = require("Diagnostics");
const Time = require('Time');
const Animation = require('Animation');

var mug_ctrl = Scene.root.find('plane_collection')
var planeTracker = Scene.root.find('planeTracker0');



var path_ctrl = Scene.root.find('path_ctrl');

var planeTracker = Scene.root.find('planeTracker0');
var planeCol = planeTracker.find('plane_collection');

TouchGestures.onTap().subscribe(function(gesture) {
	//   planeTracker.trackPoint(gesture.location);

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



// });

Time.setTimeout( function(e){
	Diagnostics.log("7777");
	StartAni();
}, 100);


// TouchGestures.onTap().subscribe(function(gesture) {
//   planeTracker.trackPoint(gesture.location);


// });

function StartAni(){

	Diagnostics.log("3");

	// var secTopParent = planeCol.find("Yellow")


	var yellow = mug_ctrl.find("Yellow")
	var green = mug_ctrl.find("Green")
	var lBlue = mug_ctrl.find("LightBlue")
	var purple = mug_ctrl.find("Purple")

	var yellow_c = yellow.find("defaultobject")
	var green_c = green.find("defaultobject")
	var lBlue_c = lBlue.find("defaultobject")
	var purple_c = purple.find("defaultobject")


	var sampler = Animation.samplers.linear( 0.0, 2.0)
	var driver = Animation.timeDriver({durationMilliseconds: 750}) ;

	yellow_c.transform.scaleY = Animation.animate(driver, sampler);
	green_c.transform.scaleY = Animation.animate(driver, sampler);
	lBlue_c.transform.scaleY = Animation.animate(driver, sampler);
	purple_c.transform.scaleY = Animation.animate(driver, sampler);

	driver.start();

	Diagnostics.log("2");


}

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
