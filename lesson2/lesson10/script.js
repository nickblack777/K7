'use strict';

// Изменение документа

/*
    1) document.createElement(tag) - принемает тег и создает элемент на основе этого тега

    2) document.createTextNode(text) - принимает текст и создает текстовый узел с содержанием этого текста

*/

let box = document.createElement('div'); // В переменной хранится узел <div></div>

let textNode = document.createTextNode('Привет, как дела?');


box.className = 'alert';

box.append(textNode);


document.body.append(box);

/*
    Функции вставки элементов

    node.append(nodes... или text) - добавляет узлы или строки в конец указанного
    node (внутрь)

    node.prepend(nodes... или text) - добавляет узлы или строки в начало указанного
    node (внутрь)

    node.before(nodes... или text) - добавляет узлы или строки до указанного
    node (снаружи)

    node.after(nodes... или text) - добавляет узлы или строки после указанного
    node (снаружи)

    node.replaceWith(nodes... или text) - заменяет node заданными узлами или строками

*/

let contentBox = document.querySelector('.content');

contentBox.append('AFTER');

contentBox.prepend('BEFORE');

contentBox.before('ДО Элемента');

contentBox.after('ПОСЛЕ Элемента');


document.querySelector('.replace').replaceWith('Заменено успешно!');


// node.insertAdjacentHTML/Text/Element

/*
    node.insertAdjacentHTML(where, html) - добавляет в node в указанное место where, 
    указанный html код

    Варианты where:

    beforebegin - вставит html код перед elem node (снаружи до элемента)
    afterbegin - вставит html код в начало elem node (внутри в начале элемента)
    beforeend - вставит html код в конце elem node (внутри перед закрывающем тегом)
    afterend - вставит html код после elem node (снаружи после эелемента)
*/


contentBox.insertAdjacentHTML('afterend', '<blockquote>Цитата</blockquote>');



// Удаление узлов

/*
    node.remove();
*/

setTimeout(function(){

    document.querySelector('.alert').remove();

}, 2000);

/*
    Если обратиться к узлу и через любую функцию вставки (append\prepend...) вставить 
    его в другое место, то со старого он удалится. Поэтому в этих случаях
    не нужно его предварительно удалять.
*/


// Клонирование узлов - cloneNode


/*
    elem.cloneNode(true/false)

    Если передать true, создаст клон элемента со всеми свойствами, атрибутами и вложенными
    элементами.

    Если передать false, создаст элемент со всеми свойствами, атрибутами, но без
    вложенных эелемнтов.


*/

let blockquoteClone = document.querySelector('blockquote').cloneNode(true);

blockquoteClone.innerHTML = 'Другая цитата';

contentBox.prepend(blockquoteClone);

// document.importNode(externalNode, deep)

/*
    Клонирует элемент и возвращает ссылку на него. 

    externalNode - узел который нужно склонировать

    deep - true/false - работае как в cloneNode
*/



/*
    Устаревшие функции вставки

    1) parentElem.appendChild(node) - вставка node в конец дочерних элементов

    2) parentElem.insertBefore(node, nextSibling) - вставляет node перед
    nextSibling внутри parentElem

    3) parentElem.replaceChild(node, oldChild) - заменяет oldChild на node среди
    дочерних элементов parentElem

    4) parentElem.removeChild(node) - удаляет node из parentElem

*/  




// Стили и классы

document.querySelector('.content').style.fontSize = '22px';

/*
    Если у элемента есть динамические данные (например координаты, плавающая ширина...)
    то используют прямое обращение через .style.
    Если элемент имеет статически не изменяемые стили, то их принят прописывать в 
    css, а элементу задавать класс.
*/


// className и classList

/*
    className - это свойство элемента, которое в текстовом формате хранит строку 
    со всеми его классами.

    Если мы обратимся к свойству className и запишем туда имя класса, то все что было
    в этом свойстве заменится на новую строку.

    Для того чтобы добавлять или удалять нужные классы не затрагивая остальные, нужно
    использовать classList.

    classList - это спец. объект (перебираемый) со специальными методами, которые позволяют 
    добавлять\удалять\переключать\проверять классы

    classList можно перебрать через for...of..., остальных фукций обхектов у него нет.


    Функции для работы с классами:

    1) elem.classList.add(class_name) - добавлление класса элементу
    2) elem.classList.remove(class_name) - удаление класса эелемента
    3) elem.classList.toggle(class_name) - добавляет класс, если его нет и удаляет если он есть.
    4) elem.classList.contains(class_name) - проверяет наличика класса у элемента и возвращает true\false

    

*/


// Сброс стилей

/*
    Если нужно сбросить или обнулить какой-то стиль, то модно обратиться к свойству style.* и передать пустую строку.

    style.cssText - хранит все свойства стилей в виде строки. Если нужно записать несколько стилей, то можно
    записать их в это свойство в виде строки.
*/

document.querySelector('.message').style.cssText = "background: red; padding: 20px; border: 1px solid #000;";


/*
    Есть аналог этой же записи:

    elem.setAttribute('style', 'color: red;.....');


    Важно следить за единицами измерения при назначении их свойствам.

*/

// Вычисленные стили - computedStyle

/*

    Если вы хотите получить css-параметры элемента, записанные не через style, а прописанные через css, то
    нужно использовать getComputedStyle, т.к. стили не доступны и не видны из файла css.


    getComputedStyle(element, [pseudo])

    getComputedStyle(elem, '::after')


    Все свойства хранятся в подробной форме. Например marginTop\marginLeft\marginBottom\marginRight...


    
*/

console.log( document.querySelector('.message').style.marginTop ); // пусто

let messageCssStyles = getComputedStyle( document.querySelector('.message') );

console.log( messageCssStyles.marginTop ); // 30px




