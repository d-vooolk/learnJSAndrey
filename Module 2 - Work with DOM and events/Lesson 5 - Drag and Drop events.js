/*
Drag'n'Drop с событиями мыши

Основы Drag'n'Drop

Drag'n'Drop (перетаскивание) - это техника взаимодействия с пользователем, позволяющая перемещать элементы на
веб-странице с помощью мыши.

В Drag'n'Drop взаимодействии обычно выделяются следующие компоненты:
- Исходный элемент (Drag Source): Элемент, который пользователь хочет переместить.
- Целевой элемент (Drop Target): Элемент, на который пользователь хочет поместить перетаскиваемый элемент.
- События Drag'n'Drop: События мыши, которые происходят в процессе перетаскивания.


Реализация Drag'n'Drop

Начало перетаскивания (dragstart)
*/
const dragSource = document.querySelector('.drag-source');

dragSource.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', 'Перетаскиваемый элемент');
});
/*


Обработка перетаскивания (drag)
*/
const dragSource = document.querySelector('.drag-source');

dragSource.addEventListener('drag', (event) => {
  // Дополнительные действия во время перетаскивания
});
/*


Окончание перетаскивания (dragend)
*/
const dragSource = document.querySelector('.drag-source');

dragSource.addEventListener('dragend', (event) => {
  // Действия после окончания перетаскивания
});
/*


События над целевым элементом (dragenter, dragover, drop)

*/
const dropTarget = document.querySelector('.drop-target');

dropTarget.addEventListener('dragenter', (event) => {
  event.preventDefault();
  // Дополнительные действия при наведении на целевой элемент
});

dropTarget.addEventListener('dragover', (event) => {
  event.preventDefault();
  // Дополнительные действия при перетаскивании над целевым элементом
});

dropTarget.addEventListener('drop', (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
  event.target.textContent = data;
});
/*

Полный список событий:

1. `dragstart`: Событие запускается при начале перетаскивания элемента. Обычно здесь задается
тип перетаскиваемых данных и другие дополнительные параметры.

2. `drag`: Событие, которое происходит во время перемещения элемента. Это может использоваться
для предоставления обратной связи пользователю во время перетаскивания.

3. `dragend`: Событие происходит после завершения перетаскивания элемента, независимо от того,
был ли элемент успешно перетащен или нет.

4. `dragenter`: Событие возникает, когда перетаскиваемый элемент входит в зону действия целевого
элемента (Drop Target). Это событие обычно используется для выделения целевого элемента.

5. `dragover`: Событие происходит, когда перетаскиваемый элемент находится над целевым элементом.
Здесь обычно отменяется стандартное поведение браузера, чтобы указать, что элемент может быть брошен.

6. `dragleave`: Событие возникает, когда перетаскиваемый элемент покидает зону действия целевого элемента.
Это может использоваться, чтобы снять выделение с целевого элемента.

7. `drop`: Событие, которое происходит, когда перетаскиваемый элемент брошен на целевой элемент.
Здесь обычно обрабатывается перетаскиваемые данные и выполняются соответствующие действия.


Практические советы

Отмена действия по умолчанию
Не забудьте отменить действия по умолчанию для событий dragenter и dragover, чтобы браузер понял,
что целевой элемент может принимать перетаскиваемые данные.

Обратная совместимость
Обратите внимание, что поддержка Drag'n'Drop может различаться в разных браузерах. Если важна обратная
совместимость, рассмотрите использование библиотек или полифиллов.








Практическое применение:

Пример 1: Простой перетаскиваемый элемент

В этом примере мы создадим элемент, который можно перетаскивать и бросать в другой элемент на странице.

<!DOCTYPE html>
<html>
<head>
  <style>
    .drag-source {
      width: 100px;
      height: 100px;
      background-color: lightblue;
      text-align: center;
      line-height: 100px;
      cursor: move;
    }

    .drop-target {
      width: 200px;
      height: 200px;
      background-color: lightgray;
      border: 2px dashed gray;
    }
  </style>
</head>
<body>
  <div class="drag-source" draggable="true">Перетащи меня</div>
  <div class="drop-target">Сюда можно бросить</div>

  <script>
    const dragSource = document.querySelector('.drag-source');
    const dropTarget = document.querySelector('.drop-target');

    dragSource.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', 'Перетаскиваемый элемент');
    });

    dropTarget.addEventListener('dragenter', (event) => {
      event.preventDefault();
      dropTarget.style.backgroundColor = 'lightgreen';
    });

    dropTarget.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    dropTarget.addEventListener('dragleave', () => {
      dropTarget.style.backgroundColor = 'lightgray';
    });

    dropTarget.addEventListener('drop', (event) => {
      event.preventDefault();
      const data = event.dataTransfer.getData('text/plain');
      dropTarget.textContent = data;
      dropTarget.style.backgroundColor = 'lightgray';
    });
  </script>
</body>
</html>


Пример 2: Перетаскивание элементов между списками

В этом примере мы создадим два списка, в которых можно перетаскивать элементы между ними.

<!DOCTYPE html>
<html>
<head>
  <style>
    ul {
      list-style-type: none;
      padding: 0;
      width: 200px;
      border: 2px solid gray;
      margin: 20px;
    }

    li {
      padding: 10px;
      background-color: lightgray;
      margin: 5px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <ul id="list1">
    <li draggable="true">Элемент 1</li>
    <li draggable="true">Элемент 2</li>
    <li draggable="true">Элемент 3</li>
  </ul>

  <ul id="list2">
    <li draggable="true">Элемент 4</li>
    <li draggable="true">Элемент 5</li>
    <li draggable="true">Элемент 6</li>
  </ul>

  <script>
    const lists = document.querySelectorAll('ul');

    lists.forEach((list) => {
      list.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.textContent);
      });

      list.addEventListener('dragenter', (event) => {
        event.preventDefault();
        event.target.style.backgroundColor = 'lightgreen';
      });

      list.addEventListener('dragover', (event) => {
        event.preventDefault();
      });

      list.addEventListener('dragleave', (event) => {
        event.target.style.backgroundColor = '';
      });

      list.addEventListener('drop', (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData('text/plain');
        event.target.style.backgroundColor = '';
        const newItem = document.createElement('li');
        newItem.textContent = data;
        event.target.appendChild(newItem);
      });
    });
  </script>
</body>
</html>


Пример 3: Перетаскивание изображений

В этом примере мы реализуем перетаскивание изображений из списка в область просмотра.

<!DOCTYPE html>
<html>
<head>
  <style>
    #image-list {
      list-style-type: none;
      padding: 0;
      width: 200px;
      border: 2px solid gray;
      margin: 20px;
    }

    #image-viewer {
      width: 300px;
      height: 300px;
      border: 2px solid gray;
      margin: 20px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }

    li {
      padding: 10px;
      background-color: lightgray;
      margin: 5px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <ul id="image-list">
    <li draggable="true" data-src="image1.jpg">Изображение 1</li>
    <li draggable="true" data-src="image2.jpg">Изображение 2</li>
    <li draggable="true" data-src="image3.jpg">Изображение 3</li>
  </ul>

  <div id="image-viewer"></div>

  <script>
    const imageList = document.getElementById('image-list');
    const imageViewer = document.getElementById('image-viewer');

    imageList.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', event.target.dataset.src);
    });

    imageViewer.addEventListener('dragenter', (event) => {
      event.preventDefault();
      imageViewer.style.backgroundColor = 'lightgreen';
    });

    imageViewer.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    imageViewer.addEventListener('dragleave', () => {
      imageViewer.style.backgroundColor = '';
    });

    imageViewer.addEventListener('drop', (event) => {
      event.preventDefault();
      const imageUrl = event.dataTransfer.getData('text/plain');
      imageViewer.style.backgroundColor = '';
      imageViewer.style.backgroundImage = `url(${imageUrl})`;
    });
  </script>
</body>
</html>

*/