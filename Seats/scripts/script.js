//
// Available modules include (this is not a complete list):
// var Scene = require('Scene');
// var Textures = require('Textures');
// var Materials = require('Materials');
// var FaceTracking = require('FaceTracking');
// var Animation = require('Animation');
// var Reactive = require('Reactive');
//
// Example script
//

// Loading required modules
const Scene = require('Scene');
const Reactive = require('Reactive');
const TouchGestures = require('TouchGestures');
const Diagnostics = require("Diagnostics");
const Time = require('Time');
// var FaceTracking = require('FaceTracking');
//
// Binding an object's property to a value provided by the face tracker
// Scene.root.child('object0').transform.rotationY = FaceTracking.face(0).transform.rotationX;
//
// If you want to log objects, use the Diagnostics module.
// var Diagnostics = require('Diagnostics');
// Diagnostics.log(Scene.root);

var room_ctrl = Scene.root.find('room')
var planeTracker = Scene.root.find('planeTracker0');

TouchGestures.onPan(planeTracker).subscribe(function(gesture) {
	planeTracker.trackPoint(gesture.location, gesture.state);
});

TouchGestures.onPinch().subscribe(function(gesture) {
	
	var lastScaleX = room_ctrl.transform.scaleX.lastValue;
	room_ctrl.transform.scaleX = Reactive.mul(lastScaleX, gesture.scale);

	var lastScaleY = room_ctrl.transform.scaleY.lastValue;
	room_ctrl.transform.scaleY = Reactive.mul(lastScaleY, gesture.scale);

	var lastScaleZ = room_ctrl.transform.scaleZ.lastValue;
	room_ctrl.transform.scaleZ = Reactive.mul(lastScaleZ, gesture.scale);
});

TouchGestures.onRotate(room_ctrl).subscribe(function(gesture) {
  var lastRotationY = room_ctrl.transform.rotationY.lastValue;
  room_ctrl.transform.rotationY = Reactive.add(lastRotationY, Reactive.mul(-1, gesture.rotation));
});
