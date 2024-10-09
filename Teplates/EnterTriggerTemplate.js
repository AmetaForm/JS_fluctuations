(function () {
    var EnterTrigger = function() {};

    EnterTrigger.prototype = {
    
        enterEntity: function (id) {
            print("Player entered the entity with ID: " + id);
        },

        leaveEntity: function (id) {
            print("Player left the entity with ID: " + id);
        }
    };
    return new EnterTrigger();
});
