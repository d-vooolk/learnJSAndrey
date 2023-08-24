/*
Работа с формами в DOM javascript
*/

/*
Каждая форма на веб-странице представлена объектом HTMLFormElement в DOM

Получить доступ к форме мы можем через уже знакомые:
*/

// Получение формы по идентификатору
const formById = document.getElementById('myForm');

// Получение формы с использованием селектора
const formBySelector = document.querySelector('form');



/*
Объект `HTMLFormElement` представляет форму в DOM и предоставляет ряд свойств и методов для работы с формой.
Вот некоторые основные свойства и методы объекта `HTMLFormElement`:

Свойства:

1. `action`: Возвращает или устанавливает URL-адрес, куда будет отправлена форма при её отправке.
2. `method`: Возвращает или устанавливает метод, который будет использоваться при отправке формы
    (например, `"GET"` или `"POST"`).
3. `elements`: Возвращает коллекцию элементов формы, которые являются потомками данной формы.
4. `length`: Возвращает количество элементов формы.
5. `name`: Возвращает или устанавливает имя формы.
6. `enctype`: Возвращает или устанавливает тип кодирования данных, которые будут отправлены с
    формой (например, `"application/x-www-form-urlencoded"` или `"multipart/form-data"`).
7. `target`: Возвращает или устанавливает имя, или целевое окно/фрейм, в котором будет открыт результат отправки формы.

Методы:

1. `submit()`: Отправляет форму на сервер.
2. `reset()`: Сбрасывает значения всех элементов формы в их исходное состояние.
3. `checkValidity()`: Проверяет валидность всех элементов формы и возвращает `true`,
    если форма является валидной, и `false` в противном случае.
4. `reportValidity()`: Проверяет валидность всех элементов формы и отображает соответствующие
    сообщения об ошибках, если они есть.
5. `requestSubmit(submitter)`: Отправляет форму на сервер, симулируя клик по указанной
    кнопке или элементу формы (submitter).



<form id="myForm" action="/submit" method="post" enctype="multipart/form-data">
  <label for="name">Имя:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="message">Сообщение:</label>
  <textarea id="message" name="message" required></textarea>

  <input type="submit" value="Отправить">
  <input type="reset" value="Сбросить">
</form>


Проверка валидности формы

<form id="myForm">
  <label for="name">Имя:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="message">Сообщение:</label>
  <textarea id="message" name="message" required></textarea>

  <input type="submit" value="Отправить">
  <input type="reset" value="Сбросить">
</form>

*/

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы для демонстрации проверки валидности

    if (form.checkValidity()) {
        // Если форма валидна, выполнить отправку формы
        // Вместо этого кода вы можете выполнить дополнительные действия, например, отправить данные на сервер
        console.log('Форма валидна. Отправка формы...');
    } else {
        // Если форма невалидна, отобразить сообщения об ошибках
        form.reportValidity();
    }
});

form.addEventListener('reset', function() {
    // Сбросить сообщения об ошибках при сбросе формы
    form.classList.remove('invalid');
});




// ================================================================================ //




/*
Доступ к элементам формы

Для доступа к элементам формы с помощью `form.elements`, вы можете использовать различные методы.

1. Получение элемента по его индексу:
*/
const form = document.getElementById('myForm');
const element = form.elements[0]; // Получение первого элемента формы

/*
2. Получение элемента по его имени:
*/
const form = document.getElementById('myForm');
const element = form.elements['myInput']; // Получение элемента с именем 'myInput'

/*
3. Получение всех элементов формы в виде коллекции:
*/
const form = document.getElementById('myForm');
const elements = form.elements; // Получение всех элементов формы в виде коллекции

for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  // Ваш код для работы с элементом формы
}

/*
4. Использование методов `namedItem()` или `item()` для доступа к элементам по имени или индексу:
*/
const form = document.getElementById('myForm');
const element1 = form.elements.namedItem('myInput'); // Получение элемента по имени
const element2 = form.elements.item(1); // Получение элемента по индексу

/*
Обратите внимание, что `form.elements` возвращает коллекцию HTML-элементов, которая может быть использована
как массив или перебрана с помощью цикла. Вы можете обращаться к элементам по индексу или имени
в зависимости от ваших потребностей.
*/





// ================================================================================ //




/*
Некоторые API для работы с формой:

Доступ к форме
*/

// Получение формы по идентификатору
const form = document.getElementById('myForm');

// Получение формы с использованием селектора
const form = document.querySelector('form');


/*
Получение значения поля ввода:
*/

// Получение значения текстового поля
const inputText = document.getElementById('myInput').value;

// Получение значения флажка
const checkboxValue = document.getElementById('myCheckbox').checked;

// Получение выбранного значения радиокнопки
const radioValue = document.querySelector('input[name="myRadio"]:checked').value;

// Получение выбранного значения выпадающего списка
const selectValue = document.getElementById('mySelect').value;


/*
Изменение значения поля ввода:
*/

// Установка значения текстового поля
document.getElementById('myInput').value = 'Новое значение';

// Установка значения флажка
document.getElementById('myCheckbox').checked = true;

// Установка выбранного значения радиокнопки
document.querySelector('input[value="option2"]').checked = true;

// Установка выбранного значения выпадающего списка
document.getElementById('mySelect').value = 'option2';



/*
Отправка формы:
*/

// Отправка формы программно
document.getElementById('myForm').submit();



/*
Обработка событий формы:
*/

// Назначение обработчика события отправки формы
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращение отправки формы по умолчанию
    // Ваш код обработки события отправки формы
});

// Назначение обработчика события сброса формы
document.getElementById('myForm').addEventListener('reset', function(event) {
    // Ваш код обработки события сброса формы
});

// Назначение обработчика события изменения значения поля ввода
document.getElementById('myInput').addEventListener('change', function(event) {
    // Ваш код обработки события изменения значения поля ввода
});

// Назначение обработчика события ввода в поле ввода
document.getElementById('myInput').addEventListener('input', function(event) {
    // Ваш код обработки события ввода в поле ввода
});

// Назначение обработчика события фокуса на поле ввода
document.getElementById('myInput').addEventListener('focus', function(event) {
    // Ваш код обработки события фокуса на поле ввода
});

// Назначение обработчика события потери фокуса полем ввода
document.getElementById('myInput').addEventListener('blur', function(event) {
    // Ваш код обработки события потери фокуса полем ввода
});




// ================================================================================ //






/*
Основные свойства и методы объектов элементов формы

1. `value`: Свойство `value` используется для получения или установки значения элемента формы.
Например, для текстового поля (`<input type="text">`) это будет содержимое текстового поля,
а для выпадающего списка (`<select>`) - значение выбранного элемента.

Пример использования:
*/
const inputField = document.getElementById('myInput');
const value = inputField.value; // Получение значения текстового поля
inputField.value = 'Новое значение'; // Установка значения текстового поля




/*
2. `checked`: Свойство `checked` используется для флажков (`<input type="checkbox">`)
и радиокнопок (`<input type="radio">`) для проверки и установки состояния выбранности.

Пример использования:
*/
const checkbox = document.getElementById('myCheckbox');
const isChecked = checkbox.checked; // Получение состояния выбранности флажка
checkbox.checked = true; // Установка состояния выбранности флажка




/*
3. `selectedIndex`: Свойство `selectedIndex` используется для получения или установки индекса
выбранного элемента в выпадающем списке (`<select>`).

Пример использования:
*/
const selectElement = document.getElementById('mySelect');
const selectedIndex = selectElement.selectedIndex; // Получение индекса выбранного элемента
selectElement.selectedIndex = 2; // Установка индекса выбранного элемента




/*
4. `disabled`: Свойство `disabled` используется для установки или снятия блокировки
элемента формы. Когда элемент блокирован (`disabled = true`), он становится неактивным
и пользователь не может с ним взаимодействовать.

Пример использования:
*/
const inputField = document.getElementById('myInput');
inputField.disabled = true; // Блокировка текстового поля




/*
5. `focus()`: Метод `focus()` используется для установки фокуса на элемент формы, то есть делает его активным для ввода данных пользователем.

Пример использования:
*/
const inputField = document.getElementById('myInput');
inputField.focus(); // Установка фокуса на текстовое поле




/*
6. `blur()`: Метод `blur()` используется для снятия фокуса с элемента формы, то есть снимает активность с элемента.

Пример использования:
*/
const inputField = document.getElementById('myInput');
inputField.blur(); // Снятие фокуса с текстового поля





























