(function() {
    // Функция, которая будет вызвана при клике на объект
    function onClicked(entityID, event) {
        // Проверяем, что клик был произведен левой кнопкой мыши
        if (event.isLeftButton) {
            print("Object with ID " + entityID + " was clicked");
        }
    }

    // Подключаем функцию к событию "clickDownOnEntity"
    this.clickDownOnEntity = onClicked;

    // Освобождаем обработчики событий, когда скрипт отключается
    this.unload = function() {
        this.clickDownOnEntity = null;
    };
});