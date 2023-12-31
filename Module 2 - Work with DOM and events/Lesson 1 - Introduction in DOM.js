/*
Введение в DOM в JavaScript

DOM (Document Object Model) представляет собой структуру веб-страницы или документа, которую браузер создает
при загрузке веб-страницы. DOM представляет каждый элемент веб-страницы в виде объекта, который можно манипулировать
с помощью JavaScript.





Подключение JavaScript к веб-странице
Для начала работы с DOM необходимо подключить JavaScript-файл к вашей веб-странице.
Вы можете сделать это, добавив следующий тег <script> внутри тега <head> или перед закрывающим тегом </body>:
*/

/*
<!DOCTYPE html>
<html>
<head>
  <title>Моя веб-страница</title>
  <script src="script.js"></script>
</head>
<body>
  <!-- Содержимое вашей веб-страницы -->
</body>
</html>
*/




/*
Выбор элементов DOM

С помощью JavaScript можно выбирать элементы DOM и работать с ними. Для этого используются различные
методы выбора элементов. Вот некоторые из них:
*/
let element = document.getElementById("myElementId"); //выбирает элемент по его уникальному идентификатору (id)

elements = document.getElementsByClassName("myClassName"); // выбирает все элементы с определенным классом

elements = document.getElementsByTagName("div"); // выбирает все элементы с определенным тегом

element = document.querySelector("#myElementId .myClassName"); // выбирает первый элемент, соответствующий указанному селектору CSS

elements = document.querySelectorAll("div.myClassName"); // выбирает все элементы, соответствующие указанному селектору CSS




/*
Изменение содержимого элементов DOM

После выбора элементов вы можете изменять их содержимое. Вот некоторые из основных способов
изменения содержимого элементов:
*/

element.innerHTML = "<p>Новый текст</p>"; // устанавливает или получает HTML-содержимое элемента

element.textContent = "Новый текст"; // устанавливает или получает текстовое содержимое элемента

element.setAttribute("class", "newClassName"); // устанавливает атрибут элемента




/*
Обработка событий

DOM позволяет реагировать на различные события, такие как клики, наведение курсора и другие.
Для обработки событий используются обработчики событий. Вот пример обработчика события клика на элементе:
*/

element.addEventListener("click", function() {
  // Действия при клике
});



/*
Изменение стилей элементов

Вы можете изменять стили элементов DOM с помощью JavaScript. Вот некоторые из способов изменения стилей:
*/

element.style.color = "red"; // устанавливает или получает значение определенного свойства стиля элемента

element.classList.add("newClass"); // позволяет добавлять классы элемента.
element.classList.remove("oldClass"); // позволяет удалять классы элемента.
element.classList.toggle("active"); // позволяет переключать классы элемента.
