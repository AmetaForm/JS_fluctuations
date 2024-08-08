(function() {
    var intervalID;

    // Функция, вызываемая при загрузке скрипта на объект
    this.preload = function(entityID) {
        // Установка интервала для вывода сообщения каждую секунду
        intervalID = Script.setInterval(function() {
            console.log("Сообщение выводится каждую секунду");
        }, 1000); // 1000 миллисекунд = 1 секунда
    };

    // Функция, вызываемая при удалении скрипта или объекта
    this.unload = function(entityID) {
        // Очистка интервала при удалении скрипта
        if (intervalID) {
            Script.clearInterval(intervalID);
        }
    };
})();
