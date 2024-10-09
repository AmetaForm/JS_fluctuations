(function() {
    // Конструктор для объекта Portal
    var Portal = function() {};

    Portal.prototype = {
        // Метод, который вызывается при входе в объект
        enterEntity: function(id) {
            print("Entity added");
        }
    };

    // Возвращаем экземпляр объекта Portal
    return new Portal();
});
