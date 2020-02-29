'use strict';

// Размеры и прокрутка элементов

console.log( document.body.querySelector('.box').offsetTop );

/*
    offsetParent - содержит предка элемента (узел родителя)

    offsetLeft\offsetTop - содержит расстояние от верхнего края рожителя(Top), и 
    крайнего левого края родителя (Left)

    offsetParent будет равен null, если элемент скрыт; есл обратиться к html\body;
    для элементов, которые имеют свойство position:fixed
*/

console.log( document.body.querySelector('.box').offsetParent );

/*
    offsetWidth - содержит всю внешнюю ширину элемента, включая отступы, скролл, рамки.
    offsetHeight - содержит высоту....

    offsetWidth\Height равен 0, если элемент или его родитель скрыты; если элемент создан,
    но еще не вставлен в документ.

    function isHidden(elem){
        return !elem.offsetHeight && !elem.offsetWidth;
    }

*/

console.log( document.body.querySelector('.box').offsetWidth );

/*
    clientTop - расстояние, которое занимает верхний бордер
    clientLeft - расстояние, которое занимает левый бордер

    Но есть исключение - если используется арабский язык, то clientLeft это будет
    правый бордер, в эту ширину войдет еще и ширина скролла.
    Поэтому эти параметр принятно называть расстоянием, от внутреннего контента
    до внешнего содержимого.


    clientWidth\Height - ширина\высота содержимого элемента в сумме со отступами(padding)

*/

console.log( document.body.querySelector('.box').clientWidth );

/*
    scrollWidth\Height - включает в себя ширину\высоту всего содежимого
    включая, то что скрыто за скроллом и отступы(padding).
*/

console.log( document.body.querySelector('.box').scrollHeight );

//document.body.querySelector('.box').style.height = `${document.body.querySelector('.box').scrollHeight}px`;

/*
    scrollLeft\scrollTop - хранит значение прокрученного расстояния слева\сверху.
    scrollLeft - работает для горизонтального скролла и значение рассчитывается от ширины прокрученной области 
    контента.
    scrollTop - работае для вертикального сколла...


    Если вам нужно рассчитать какие-то показалтели размера элемента или его прокрутки, то используйте только
    описанные вые свойства, а не css-свойства, т.к. они могут хранить ошибочные для js значения.
*/



/* Размеры и прокрутка окна */

/*
    Для получения реальной ширины\высоты окна можно воспользоваться свойствами clientWidth\clientHeight из
    document.documentElement
    
    Есть также 2 параметра получения ширины\высоты window.innerWidth\innerHeight, но они содержат ширину
    скролла и это все всегда удобно для рассчетов.
 */

 console.log( document.documentElement.clientHeight );


 /*
    Полная высота документа
 */

 let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
 );

 console.log( scrollHeight );


 /*
    Получение текущей прокрутки документа

    window.pageYOffset - расстояние прокрученное по оси Y
    window.pageXOffset - расстояние прокрученное по оси X
 */

setTimeout(function(){
    console.log( window.pageYOffset );
}, 2000);


/*
    Прокрутка - scrollTo \ scrollBy \ scrollIntoView

    Важно - чтобы сработала прокрутка нужно, чтобы документ полность прогрузился (посттроилась DOM структура).

    1) Прокручивать страницу можно изменяя свойство document.documentElement.scrollTop\scrollLeft. Но для прокрутки
    есть уже готовые функции. Также этот метод не работает в старых WebKit браузерах (там работает
        document.body.scrollTop)

    2) window.scrollBy(x, y) - прокручивает страницу относительно ее текущего положения.

    3) window.scrollTo(pageX, pageY) - прокручивает страницу по абсолютным координатам.


*/

setTimeout(function(){
    document.documentElement.scrollTop = 900;

   // window.scrollBy(0, 2000);
}, 2000);


/* 
    elem.scrollIntoView(top)
    Если top = true - то страница будет прокручена так, чтобы элемент оказался вверху.
    Если top = false - то страница будет прокручена так, чтобы элемент оказался внизу.

*/
setTimeout(function(){
    document.body.querySelector('.box3').scrollIntoView({block: "center", behavior: "smooth"});
}, 3000);


/* Запрет прокрутки

    document.body.style.overflow = 'hidden';

*/


/*
    Получение координат относительно окна - getBoundingClientRect

    Если вам нужно получить координаты элемента относительно окна, то можно воспользоваться
    elem.getBoundingClientRect()

    Возвращает объект с координатами размещения элемента.

    x\y - координаты начала прямоугольника относительно окна.
    width\height - ширина и высота проямоугольника
    top\bottom - Y координаты верхней\нижней границы прямогуольника
    left\right - X координата левой\правой границы прямоугольника
*/

let xy_box2 = document.body.querySelector('.box2').getBoundingClientRect();

console.log(xy_box2);


/*

    elementFromPoint(x, y) - получает элемент, который находится по указанным координатам с самым глубоким уровнем
    вложенности.

    Если указать координаты за пределами документа, то верент null.


 */


 console.log( document.elementFromPoint(200, 200) );

 