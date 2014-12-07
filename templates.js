/*var templates = ["slider3.html", "tab-group.html", "takeda-references.html", "thumbs1.html", "thumbs2.html", "thumbs3.html", "thumbs4.html", "vertical-accordion.html", "vertical-flip.html", "vertical-slider.html", "video-popup.html", "accordion.html", "animated-flip.html", "animation.html", "animation-popup.html", "bar-graph-horizontal.html", "bar-graph-revert.html", "bar-graph-vertical.html", "carousel.html", "carousel2.html", "carousel3.html", "carousel4.html", "clicker.html", "close-outside-popup.html", "cobalt.html", "coverflow.html", "coverflow2.html", "design-slide.html", "docs-architecture.html", "docs-cli.html", "docs-content.html", "docs-tools.html", "draganddrop-save-state.html", "draggable.html", "draggable2.html", "dynamic-slide.html", "goto-with-animation.html", "goto-with-no-animation.html", "horizontal-flip.html", "instruction-slide.html", "interactive-pie-chart.html", "line-graph.html", "open-pdf.html", "paintTool.html", "pie-chart-with-one-handler.html", "pie-graph.html", "reel.html", "references-and-design.html", "references-slide.html", "round-slider.html", "scroller.html", "scroller-indicators.html", "send-mail.html", "simple-popup.html", "slidePopup.html", "slider.html"],
	fs = require('fs'),
	path = require('path'),
	start = Date.now(),

function readFile(path){
	return new Promise(function(resolve, reject){
		fs.readFile(path, function(err, data){
			err ? reject(err) : resolve(data);
		});
	});
}

var promises = templates.map(function(template){
	return readFile(path.join('./templates', template));
});

Promise.all(promises).then(function(arr){
	console.log(Date.now() - start);
}, function(err){
	console.log(err);
});*/

var Promise = require('es6-promise').Promise;

