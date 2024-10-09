(function () {
    var Portal = function() {};


    Portal.prototype = {
        enterEntity: function (id) {
            var properties = Entities.getEntityProperties(id, ["userData"]);
            var userData;

            try {
                userData = JSON.parse(properties.userData);
            } catch (e) {
                console.error("Error parsing userData: ", e);
            }

            if (userData) {
                if (userData.destination) {
                    var destination = userData.destination;

                    if (userData.destination.indexOf("bookmark:") > -1) {
                        var bookmarkName = userData.destination.replace("bookmark:", "");
                        destination = LocationBookmarks.getAddress(bookmarkName);
                    }
                    
                    Window.location = destination;
                } else {
                    console.log("Please specify `destination` inside this entity's `userData`!");
                    return;
                }
            } else {
                console.log("Please specify this entity's `userData`! See README.md for instructions.");
                return;
            }
        }
    };

    
    return new Portal();
});
