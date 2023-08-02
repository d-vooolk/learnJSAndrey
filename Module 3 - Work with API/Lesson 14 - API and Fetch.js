/*
// ================================================================================= //
                                        API
// ================================================================================= //


API (Application Programming Interface) представляет собой набор методов и правил, по которым различные программы
могут взаимодействовать друг с другом. Веб-API позволяют веб-приложениям обмениваться данными с серверами через интернет.

*/
// Пример API URL
const apiUrl = 'https://api.example.com/data';

/*
Fetch - это современный способ выполнения сетевых запросов в браузере.
Он использует промисы для обработки асинхронных операций.

*/
// Основной синтаксис Fetch
fetch(apiUrl) // Шаг 1: Отправка GET-запроса по указанному URL (apiUrl)
    .then(response => { // Шаг 2: Обработка ответа от сервера
        if (!response.ok) { // Проверяем, успешен ли ответ (статус код 200-299)
            throw new Error('Network response was not ok'); // В случае неудачи, выбрасываем ошибку
        }
        return response.json(); // Преобразование ответа в JSON и передача дальше
    })
    .then(data => { // Шаг 3: Обработка JSON-данных
        console.log(data); // Вывод полученных данных в консоль
    })
    .catch(error => { // Шаг 4: Обработка ошибок (если что-то пошло не так)
        console.error('Fetch Error:', error); // Вывод ошибки в консоль
    });


/*
Теперь разберем каждый шаг подробнее:

Шаг 1: Отправка GET-запроса
fetch(apiUrl) - Этот вызов отправляет GET-запрос по-указанному URL (apiUrl).
Fetch возвращает промис, который будет разрешен, когда ответ от сервера будет получен.

Шаг 2: Обработка ответа от сервера
.then(response => { ... }) - Мы используем метод .then для цепочки действий после
получения ответа от сервера. Переменная response содержит объект ответа от сервера.

if (!response.ok) - Здесь мы проверяем, успешен ли ответ сервера. Свойство .ok объекта
response равно true, если статус ответа находится в диапазоне 200-299 (успешный ответ).

throw new Error('Network response was not ok') - Если ответ не успешен,
мы выбрасываем ошибку. Это приведет к переходу к блоку catch.

return response.json() - Если ответ успешен, мы вызываем метод .json()
для объекта response, который асинхронно читает тело ответа как JSON.
Этот метод также возвращает промис, содержащий распарсенные JSON-данные.

Шаг 3: Обработка JSON-данных
.then(data => { ... }) - Мы снова используем .then, чтобы обработать
распарсенные JSON-данные, которые были возвращены из предыдущего .then.

console.log(data) - Здесь мы просто выводим полученные JSON-данные в
консоль браузера для демонстрации. В реальном приложении вы бы, вероятно,
использовали эти данные для дальнейших операций или отображения на веб-странице.

Шаг 4: Обработка ошибок
.catch(error => { ... }) - Если в любом из предыдущих шагов произойдет ошибка
(например, сетевая проблема или ошибка разбора JSON), управление перейдет в этот блок.

console.error('Fetch Error:', error) - В этом блоке мы просто выводим сообщение об
ошибке в консоль браузера. В реальном приложении вы, возможно, предпримете другие действия
для обработки ошибок, например, отображение сообщения об ошибке на веб-странице.

В итоге этот код выполняет следующие шаги: отправляет GET-запрос к указанному API URL,
проверяет успешность ответа, парсит JSON-данные из ответа и выводит их в консоль.
Если что-то идет не так, выводится сообщение об ошибке.


Полученные данные могут быть отображены на веб-странице с использованием DOM-методов.

// Пример разметки HTML для отображения данных
<div id="data-container">
  <!-- Данные будут отображены здесь -->
</div>

*/
// Обновление контейнера с данными
const dataContainer = document.getElementById('data-container');

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Очистка контейнера
    dataContainer.innerHTML = '';

    // Создание элементов для отображения данных
    data.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.textContent = item.name; // Предположим, что данные содержат поле "name"
      dataContainer.appendChild(itemElement);
    });
  })
  .catch(error => {
    console.error('Fetch Error:', error);
  });
/*



// ================================================================================= //
                        Отправка данных на сервер
// ================================================================================= //

1. Определение URL API
*/
const exampleApiUrl = 'https://api.example.com/data';
/*
В этой части кода мы определяем URL API, по которому будет отправлен запрос на сервер.
Вам нужно заменить `'https://api.example.com/data'` на реальный URL вашего API.

2. Подготовка данных для отправки:
*/
const dataToSend = {
  name: 'John',
  age: 30,
  email: 'john@example.com'
};
/*
Мы создаем объект `dataToSend`, который содержит данные, которые мы хотим отправить на сервер.
В данном случае, это объект с полями `name`, `age` и `email`, представляющими имя, возраст
и адрес электронной почты.

3. Настройка объекта запроса:
*/
const requestOptions = {
  method: 'POST', // Метод запроса (POST для отправки данных)
  headers: {
    'Content-Type': 'application/json' // Тип содержимого - JSON
  },
  body: JSON.stringify(dataToSend) // Преобразование объекта в JSON-строку
};
/*
Здесь мы создаем объект `requestOptions`, который содержит настройки запроса.

- `method: 'POST'` указывает, что мы хотим отправить данные на сервер с помощью метода POST.
- `headers` задает заголовки запроса. Здесь мы устанавливаем заголовок `'Content-Type'` в
`'application/json'`, чтобы сервер понимал, что мы отправляем данные в формате JSON.
- `body` содержит данные для отправки, преобразованные в JSON-строку с помощью `JSON.stringify(dataToSend)`.

4. Отправка запроса на сервер:
*/
fetch(exampleApiUrl, requestOptions)
  .then(response => {
    // ... (обработка ответа)
      console.log(response);
  })
  .catch(error => {
    // ... (обработка ошибки)
      console.error(error);
  });
/*
Здесь мы используем метод `fetch` для отправки запроса на сервер с указанными
параметрами `apiUrl` (URL API) и `requestOptions` (настройки запроса).

- `.then(response => { ... })` обрабатывает ответ от сервера. Если ответ успешен
(статус код в диапазоне 200-299), мы переходим к следующему `.then`. В случае
ошибки выбрасывается исключение, и управление передается блоку `.catch`.

- `.catch(error => { ... })` обрабатывает ошибки, которые могли возникнуть при
отправке запроса или обработке ответа.

Оба блока `.then` и `.catch` содержат простые действия: вывод данных в консоль
(`console.log`) или вывод ошибки (`console.error`). В реальной ситуации вы, скорее всего,
выполните другие действия с данными или ошибками, например, обновление интерфейса пользователя
или обработка ошибок на сервере.
*/