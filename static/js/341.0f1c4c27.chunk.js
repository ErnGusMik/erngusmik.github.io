!function(){var a;onmessage=function(e){clearInterval(a),"START"===e.data.message?a=setInterval((function(){postMessage("TICK")}),e.data.interval):"START TIMEOUT"===e.data.message?(console.log("START TIMEOUT"),a=setInterval((function(){postMessage("TICK TIMEOUT")}),e.data.interval)):"START 24S"===e.data.message&&(a=setInterval((function(){postMessage("TICK 24S")}),e.data.interval))}}();
//# sourceMappingURL=341.0f1c4c27.chunk.js.map