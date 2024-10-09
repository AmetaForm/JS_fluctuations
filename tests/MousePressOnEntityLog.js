(function() {
    // Конструктор для объекта Portal
    var Portal = function() {};

    Portal.prototype = {
        // Метод, который вызывается при входе в объект
        enterEntity: function(id) {
            var entityName = Entities.getEntityProperties(id, ["name"]).name; // Получаем имя объекта
            var message = "Вы вошли в зону объекта: " + entityName;
            
            // Отправляем сообщение в чат
            Messages.sendLocalMessage("hifi.chat", JSON.stringify({
                text: message,
                channel: "local"
            }));
        }
    };

    // Возвращаем экземпляр объекта Portal
    return new Portal();
})();
