/*
MutationObserver: наблюдатель за изменениями

Основы MutationObserver

MutationObserver - это интерфейс JavaScript, который позволяет отслеживать изменения в структуре DOM.
Он предоставляет способ реагировать на добавление, удаление или модификацию элементов на веб-странице.

MutationObserver полезен в случаях, когда вам нужно динамически реагировать на изменения в DOM,
например, когда содержимое элементов меняется или добавляются новые элементы.

MutationObserver следит за определенными элементами или наборами элементов в DOM.
Когда происходит изменение, который вы хотите отслеживать, MutationObserver вызывает
функцию обратного вызова (callback), которую вы предоставили.





Примеры использования

Пример наблюдения за изменениями в элементе

*/
// Выбираем целевой элемент, за которым будем следить
const targetElement = document.getElementById('target');

// Создаем экземпляр MutationObserver
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    console.log('Изменение произошло:', mutation);
  });
});

// Настраиваем параметры наблюдения
const config = { attributes: true, childList: true, subtree: true };

// Начинаем наблюдение
observer.observe(targetElement, config);
/*
```

Пример прекращения наблюдения

*/
// Прекращаем наблюдение
observer.disconnect();
/*
```

Практические советы

Избегайте избыточных действий в callback
Помните, что callback MutationObserver вызывается при каждом изменении. Избегайте выполнять длительные операции внутри callback, чтобы избежать замедления страницы.

Наблюдайте только за необходимыми изменениями
Настройте параметры наблюдения так, чтобы MutationObserver следил только за теми изменениями, которые вас интересуют. Это поможет улучшить производительность.

Примеры:

Реагирование на добавление нового элемента
<!DOCTYPE html>
<html>
<head>
  <style>
    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      padding: 5px;
      background-color: lightgray;
      margin: 5px;
    }
  </style>
</head>
<body>
  <ul id="dynamic-list">
    <li>Элемент 1</li>
    <li>Элемент 2</li>
  </ul>
  <button id="add-button">Добавить элемент</button>

  <script>
    const list = document.getElementById('dynamic-list');
    const addButton = document.getElementById('add-button');

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          const addedElement = mutation.addedNodes[0];
          console.log(`Добавлен элемент: ${addedElement.textContent}`);
        }
      });
    });

    const config = { childList: true };

    observer.observe(list, config);

    addButton.addEventListener('click', () => {
      const newItem = document.createElement('li');
      newItem.textContent = `Элемент ${list.children.length + 1}`;
      list.appendChild(newItem);
    });
  </script>
</body>
</html>










Обнаружение изменений в контенте

<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      border: 1px solid gray;
      padding: 10px;
      margin: 20px;
    }
  </style>
</head>
<body>
  <div id="content-container">Нажми кнопку, чтобы изменить содержимое</div>
  <input type="text" id="content-input" placeholder="Введите новое содержимое">
  <button id="change-button">Изменить содержимое</button>

  <script>
    const contentContainer = document.getElementById('content-container');
    const contentInput = document.getElementById('content-input');
    const changeButton = document.getElementById('change-button');

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'characterData') {
          console.log(`Измененное содержимое: ${mutation.target.textContent}`);
        }
      });
    });

    const config = { characterData: true, subtree: true };

    observer.observe(contentContainer, config);

    changeButton.addEventListener('click', () => {
      const newText = contentInput.value;
      const textNode = contentContainer.firstChild;
      textNode.textContent = newText;
    });
  </script>
</body>
</html>



*/
