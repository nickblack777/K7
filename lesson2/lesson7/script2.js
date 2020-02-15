'use strict';

// Браузерное окружение

// BOM - Browser Object Model

/*
    Объект navigator - хранит данные о браузере и операционной системе.

*/

console.log( navigator.userAgent );

console.log( navigator.platform );

/*
    Объект location - в нем хранится текущий url. также мы можем с помощью location
    перенаправить нашу страницу по новому адресу.
*/

console.log( location.href );

//if( confirm('Перенправить в гугл?') ){
//    location.href = 'https://google.com.ua';
//}

console.log( history );

/*
    window.history.back() - вернуться назад на 1 страницу

    window.history.forward() - вперед на 1 страницу
*/

// DOM (Document Object Model)

document.body.style.background = 'red';

setTimeout(() => document.body.style.background = '', 1000);


// DOM-дерево

/*
    Т.к. дом дерево это объектная модель документа, каждый HTML-тег это объект.

    Вложенные теги являются "детьми" родительского элемента и тоже являются объектами.


    1) Текстовые узлы присутствуют у всех тегов, но внутри head и html они игнорируются.
    Также пробелы и и переводы строк перед head игнорируются.

    2) Если мы записываем что-либо после закрывающего тега </body>, браузер автоматически
    перенесет это внутрь body (так требует спецификация html)

    


 */
