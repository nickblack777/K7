'use strict';

// События мыши

/*
    Различают 2 типа событий
    1) Простые
    2) Комплексные

    Комплексные события - это выполнение нескольких простых подряд.

    Простые события
    1) mousedown\mouseup - нажата\отпущена кнопка мыши над элементом

    2) mouseover\mouseout - появление\уход курсора мыши с элемента

    3) mousemove - движение мыши над элементом.

    4) contextmenu - вызов контекстного меню (это не событие мыши - его может вызвать
        и коавиша на клавиатуре)

    
    Комплексные события

    1) click - вызывается при mousedown, а затем mouseup над одним и тем же элементом.

    2) dblclick - вызывается двойным кликом по элементу

    
*/

button.ondblclick = function(event){
    alert( event.which );
};

/*
    Получение информации о кнопке

    Номер кнопки хранится в объекте event в параметре which

    1 - левая кнопка мыши
    2 - средняя (колесо) мыши
    3 - правая кнопка мыши



    Также в объекте even хранится информация о нажатых клавишах-модификаторах.
    Shift - shiftKey
    alt - altKey (или Opt для MAC)
    ctrl - ctrlKey
    meta - metaKey (Cmd для MAC)



*/


button2.onclick = function(event){
    if(event.shiftKey){
        alert('Shift click');
    }
};


/*
    Координаты clientX\Y pageX\Y

    Также в объекте event хранится информация о том в каких координатах сработало событие.

    1) Относительно окна (область видимости) - cleintX и clientY

    2) Относительно документа (координаты внутри элемента) - pageX \ pageY

*/

/*
box.onmousemove = function(event){
    this.innerHTML = 'clientX: ' + event.clientX + ' clientY: ' + event.clientY + ' pageX: ' + event.pageX 
    + ' pageY: ' + event.pageY;
};
*/

/*
    Отключение выделения


*/

/*
box.ondblclick = function(event){
    alert('Клик');
};

box.onmousedown = function(event){
    return true;
};
*/

box.oncopy = function(event){
    return false;
};



/*
    Движение мыши - mouseover \ mouseout \ mouseenter \ mouseleave

    mouseover\mouseout события уникальные - они дополнительно содержат в объекте event свойства:
    1) target -  это элемент на который курсор перешел
    2) relatedTarget - это элемент с которого курсор ушел

    Но для события mouseout все наоборот.

    mouseover - происходит когда курсор оказывается над элементом.
    mouseout - происходит когда курсор уходит с элемента


    Если у вас имеется какая-вложенность элементов или абсолютно спозицианированных элементов, то события будут
    срабаывать на самый глубоко вложенный элемент при наведении.



    События mouseenter \ mouseleave - они работают также как mouseover\mouseout, но в отличие от них
    они не хранят откуда перешел курсор и также они не всплывают.

    Внутренние элементы являются составными частями родителя и не перекрывают события наведения или ухода 
    курсора (кроме случая когда у них самих есть такие событие)
*/



/*
    Клавиатура - keydown \ keyup

    При срабатывании  нажатий в объект event попадает 2 свойства

    1) event.key - это символ нажатый на клавиатуре
    2) event.code - код клавиши

    При проверке event.code важно соблюдать регистр. KeyG - правильный вариант \ keyG - не правильный.

    Заглавные и прописные буквы имеют один и тот же код - в этом случае нужно отслеживать была ли нажата 
    клавиша Shift.


    При долгом нажатии на клавишу срабатывает автоповтор. И в этом случае в объект event попадает 
    свойстово event.repeat=true


    В браузере как и в других программах на различные сочетания клавиш(на отдельные клавиши) прописаны 
    действия по умолчанию. Например pgUp pgDwn - перемотка страницы.
    И если мы хотим отключить или переназначить действия по умоланию, то нужно использовать - 
    event.preventDefault()

    Но этот подход не работает на сочетания клавиш, которые работают на уровне операционной системы.
    Например - Alt + F4

    
*/

