(function() {
    var intervalID;  // ID to keep track of the interval

    // Function that gets called when the script is loaded
    this.preload = function(entityID) {
        // Set an interval that logs a message every second
        intervalID = Script.setInterval(function() {
            console.log("Message logged every second");
        }, 1000); // 1000 milliseconds = 1 second
    };

    // Function that gets called when the script is unloaded
    this.unload = function(entityID) {
        // Clear the interval when the script is unloaded
        if (intervalID) {
            Script.clearInterval(intervalID);
        }
    };
})();

