'use strict';

/* Автоисправление 

    Браузер автоматически пытается закрыть теги или исправить ваш код, но чаще всего 
    это будет не верно.


    Другие типы узлов

    Комментарии - они являются тоже ДОМ узлами на ряду с тегами и текстом. 

    Существует 12 типов узлов, но в основном мы пользуемся только 4:
    1) document - входная точка в DOM
    2) узлы-элементы (теги) - основые узлы
    3) текстовые узлы - содержат текст
    4) комментарии - иногда в них можно хранить, то что не будет видно в html, но
        можно использовать в js

    
*/

/*
    Навигация по DOM элементам

    parentNode - родительский узел.

    previousSibling -  предыдущий сестринский узел
    nextSibling - следующий сестринский узел

    childNodes - дочерние узлы (возвращает коллекцию, которая содержит список всех детей
        включая текстовые узлы)
    firstChiild - первый дочерний узел
    lastChild - послдений очерний узел
*/

let childOfDiv = document.body.childNodes;

console.log( childOfDiv );


/*
        DOM - коллекция

        Элементы, которые мы получаем похожи на массив, но на самом деле это урезанные
        коллекции, которые пддерживают только функцию перебора.

        Для перебора мы используем for...of

        Методы массивов работать с такими коллекциями не будут!
*/

for (let node of childOfDiv){
    console.log(node);
}


/*
    1) DOM-коллекции только для чтения! Нельзя обратиться к узлу и поменять его
    содержимое таким спомсобом:

    childNodes[1] = '123'

    2) Нельзя использовать цикл for...in для перебора.

*/

/*
    Соседи и родители

    body является 'следующим' или 'правым' соседом для head

    head является 'предыдущим' или 'левым' соседом для body

    html является родителем для head и body

*/

/*
    Навигация только по элементам

    В ситуации, когда нам нужно обращаться только к элементами (исключая текст\комментарии)
    нужно использовать теже команды, только с приставой Element

    parentElement
    previousElementSibling
    nextElementSibling
    children
    firstElementChild
    lastElementChild
*/

let bodyChildrens = document.body.children;

console.log(bodyChildrens);


/* getElementById или просто id */

let h1title = document.getElementById('mainTitle');

console.log( h1title );

console.log( mainTitle ); // так лучше не обращаться

/* let mainTitle = '123';

console.log( mainTitle ); */


/* elem.querySelectorAll(css) - вернет все элемементы внутри elem, которые удовлетворяют селетор переданный как css

    Также в селекторе css поддерживаются и псевдоэлементы\псевдоселекторы
*/


let lastLi = document.querySelectorAll('.list li:last-child');


console.log( lastLi );

for (let elem of lastLi){
    console.log( elem.innerHTML );
}

/*
    elem.innerHTML - функция которая возвращает содержимое элемента в формате HTML


    elem.querySelector(css) - вренет только 1 элемент, которые удовлетворят селектор переданый как css.
    Это тоже самое если бы мы написали elem.querySelectorAll(css)[0]

    Преимущество querySelector - он быстрее и его нужно использовать когда вы точно уверены, что такой элемент
    либо один, либо вам нужен только первый элемент из возможных.
*/

/*
    Метод matches
    Он ничего не возвращает, а толко проверяет есть ли элемент, который удовлетворяет селектор.

    Этот метод удобен если нам нужно найти особый элемент среди списка элементов при переборе.

*/


if( h1title.matches('#mainTitle') ){
    console.log('Все верно - заголовок имеет id mainTitle');
}


/*
    Метод elem.closest(css) - ищет ближайшего предка, который удовлетворяет переданный селектор

*/

let elemList = document.querySelector('.list'); // Получаем элемент с классом .list

let elemListParent = elemList.closest('.box'); // Получаем родилетя .list с классом .box



/*
    Методы получения элементов, которые устарели:

    elem.getElementsByTagName(tag) - получить все элементы с указанным тегом.

    elem.getElementsByClassName(className) - получить все элементы с указанным классом

    document.getElementsByName(name) - получить все элементы с укзанным атрибутом name

*/


/*
    Отличие querySelector от старых функция - он возвращает не живую коллекцию.

    Живая коллекция - это коллекция, которая изменяется с ходом изменений в коде. Т.е. если мы получили например
    список элементов и потом удалили(изменили) один из них, то в живой коллекции будет все с изменениями, а в не живой
    сохранится состояние на момент получения элементов.

*/


let table1 = document.querySelector('.table tbody'); //

console.log(table1);

let i = 0;

for( let tr of table1.querySelectorAll('tr') ){

    let tdOfTr = tr.querySelectorAll('td')[i];

    tdOfTr.style.backgroundColor = 'red';

    i++;
}