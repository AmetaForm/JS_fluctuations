(function() {
    // Конструктор для объекта Portal
    var Portal = function() {};

    Portal.prototype = {
        // Метод, который вызывается при входе в объект
        enterEntity: function(id) {
            var entityName = Entities.getEntityProperties(id, ["name"]).name; // Получаем имя объекта
            print("Hello, World");
            }));
        }
    };

    // Возвращаем экземпляр объекта Portal
    return new Portal();
})();
