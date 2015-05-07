var $ = require('jquery');
//var bootstrap =require('bootstrap');
var ol = require('openlayers')

var AnchorControl = function (opt_options) {
	var options = opt_options || {};
	//anchor button
	var button = document.createElement('button');
	button.innerHTML = 'A';
	button.className='anchor-btn';
	var this_ = this;
	var handleMenu = function (e) {
		$('#anchorDrawer').drawer('toggle');
	};
	button.addEventListener('click', handleMenu, false);
	button.addEventListener('touchstart', handleMenu, false);
	var element = document.createElement('div');
	element.className = 'anchor-btn ol-unselectable ol-control';
	element.appendChild(button);
	ol.control.Control.call(this, {
		element: element,
		target: options.target
	});
	
};
ol.inherits(AnchorControl, ol.control.Control);

var ChartControl = function (opt_options) {
	var options = opt_options || {};
	//charts
	var chartButton = document.createElement('button');
	chartButton.innerHTML = 'C';
	chartButton.className='chart-btn';
	//var this_ = this;
	var chartHandleMenu = function (e) {
		$('#chartDrawer').drawer('toggle');
	};
	chartButton.addEventListener('click', chartHandleMenu, false);
	chartButton.addEventListener('touchstart', chartHandleMenu, false);
	var chartElement = document.createElement('div');
	chartElement.className = 'chart-btn ol-unselectable ol-control';
	chartElement.appendChild(chartButton);
	ol.control.Control.call(this, {
		element: chartElement,
		target: options.target
	});

};
ol.inherits(ChartControl, ol.control.Control);

//draw points
var DrawControl = function (opt_options) {
	var options = opt_options || {};
	//charts
	var drawButton = document.createElement('button');
	drawButton.innerHTML = 'D';
	drawButton.className='draw-btn';
	//var this_ = this;
	var drawHandleMenu = function (e) {
		$('#drawDrawer').drawer('toggle');
	};
	drawButton.addEventListener('click', drawHandleMenu, false);
	drawButton.addEventListener('touchstart', drawHandleMenu, false);
	var drawElement = document.createElement('div');
	drawElement.className = 'draw-btn ol-unselectable ol-control';
	drawElement.appendChild(drawButton);
	ol.control.Control.call(this, {
		element: drawElement,
		target: options.target
	});

};
ol.inherits(DrawControl, ol.control.Control);

module.exports={
	AnchorControl: AnchorControl,
    ChartControl: ChartControl,
	DrawControl: DrawControl
}