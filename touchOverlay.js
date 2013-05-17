/*jslint browser: true, devel: true */

// Variables
var el;

// Event Handlers
function touchhandler(e) {
    "use strict";
    event.preventDefault();
    var ctx = el.getContext("2d");
    ctx.fillStyle = "rgba(0, 0, 200, 0.2)";
    ctx.strokeStyle = "#33B5E5";
    ctx.setLineWidth(1);
    
    ctx.beginPath();
    for (var i = 0; i < e.changedTouches.length; i++) {
        var x = e.changedTouches[i].pageX,
            y = e.changedTouches[i].pageY;
        
        // Touch Point
        ctx.arc(x, y, 30, 0, Math.PI*2, true);
        
        // Cross-hairs
        ctx.moveTo(x, 0);
        ctx.lineTo(x, y - 30);
        ctx.moveTo(x, y + 30);
        ctx.lineTo(x, window.innerHeight);
        ctx.moveTo(0, y);
        ctx.lineTo(x - 30, y);
        ctx.moveTo(x + 30, y);
        ctx.lineTo(window.innerWidth, y);
    }
    ctx.closePath();
    
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
    ctx.stroke();
    ctx.fill();
}

function resizeCanvas(e) {
    "use strict";
    el.width = window.innerWidth;
    el.height = window.innerHeight;
}

// Register Event Handlers
document.body.onload = function () {
    "use strict";
    el = document.getElementsByTagName('canvas')[0];
    el.addEventListener('touchstart', touchhandler, false);
    el.addEventListener('touchmove', touchhandler, false);
    el.addEventListener('touchend', touchhandler, false);
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
};