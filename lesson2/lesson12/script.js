'use strict';

//Браузерные события

document.querySelector('#button').onclick = function(){
    alert('Привет');
};

/*
    Записать выше это все равно что написать
    onclick="alert('Привет');" в атрибуте элемента

    Т.к. свойство onclick может быть только оно у элемента, то
    нельза назначить больше одного такого события.

    Если вы хотите убрать обработчки, то можно написать так

    elem.onclick = null;


    Внутри функции на которую вешается событие, объект на который она применяется - 
    доступен через this.

    Например: кнопка на которую мы применили onclick доступна через this внутри функции

*/

document.querySelector('#button').onclick = function(){
    alert( this.getAttribute('value'));
};

/*
    Если вы хотите передать в событие функцию по имени, то нужно передавать ее имя.
    Если же вы передаете функцию в атрибут onclick, то передавать нужно запуск функции.

    У нас есть функция sayHello(){}
    elem.onclick = sayHello;

    <button onclick="sayHello()"...>

    Не используйте для назначения onclick setAttribute - это не сработает.

    Также важно писать onclick, а не например OnClick - Имя onclick регистрозависимое.

*/


/*
    Функция addEventListener

    elem.addEventListener(event, handler, [options])

    event - имя события.

    handler - ссылка на функцию-обработчик

    options - объект со свойствами:

    1) once - Если true, то после 1 обработки, обработчик будет удален.

    2) capture - фаза на которой должен сработать обработчик.

    3) passive - если true то указывает, что обработчик никогда 
                не вызовет preventDefault()

    
    Чтобы удалить eventListener, нужно запустить функцию

    elem.removeEventListener(event, handler, [options])
    Для удаления требуется также функция. Если вы забыли сохранить в переменной
    функцию переданную в hendler, то вы не сможете ее удалить.

    addEventListener позволяет добавить несколько обрабтчиков на одно событие одного
    элемента
*/

function handler1 (){
    console.log('Спасибо');
}

function handler2 (){
    console.log('Спасибо еще раз!');
}

let button2_link = document.querySelector('#button2');

button2_link.addEventListener('click', handler1);

button2_link.addEventListener('click', handler2);


/*
    Есть события которые можно назначить только через addEventListener

    Например onDOMContentLoaded
*/

document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM построен');
});


/*
    Объект события

    Когда мы объявляем функцию для события, то ей доступен объект события, который хранит в себе информацию о событии.

    Мы можем передать этот объект внутрь функции. 

    elem.onclick = function( event ){

    }

    event.type - тип события (в данном случае click)

    event.currentTarget - элемент на котором сработал обработчик (тоже самое что this)

    event.clientX \ event.clientY - координаты курсора в момент клика относительн окна.

*/

/*
    Всплытие и погружение

    Эффект всплытия - когда на элементие происходит событие, обработчик сначала сработает на нем, потом на его 
    родителе, затем выше ... и так далее, будет подниматься по цепочке предков.


    Почти все события всплывают. Например событие focus не всплывает. Есть еще ряд событий, но это скорее
    исключения.

    Самый глубокий элемент, который вызывает событие, называется целевым элементом. 
    Он доступен через event.target.


    Чтобы отличить ссылки на элементы, сущетсвует такая схема:

    this == event.currentTarget

    event.target - это изначальный элемент на котором сработало событие и он равен this, только при 1 
    срабатывании. А event.currentTarget это элемент событие которого выполняется в текущий момент (также как и this)



    Прекращение всплытия

    event.stopPropagation() - останавливает запуск всплытия событий.


 */

 document.querySelector('div i b').onclick = function(event){
    alert('Остановить события');
    event.stopPropagation();
 };

 /*
    Если вы хотите остановить выполнение всех событий, даже для текущего элемента, то есть функция

    event.stopImmidiatePropagation()

    Лучше не злоупотреблять приостановками событий.


    Погружение ("перехват") - на самом деле перед всплытием происходит фаза погружения и потом только всплытия.

    1) Фаза погружения - события сначала идут с верху в низ
    2) Фаза цели - Событие достигло целевого элемента.
    3) Фаза всплытия - события начинают всплывать.

    Чтобы включить режим погружения - можно передать свойство capture:true в addEventListener и это событие будет
    перехвачено при погружении.



    Делигирование событий

    Всплытие и перехват - позволяют реализовать один из самых важных приемов в разработке - делигирование.

    Смысл в том, что если у нас есть несколько элементов на которые нужно повесить одно и то же событие, которое
    выполняется похожим образом, то вместо того чтобы создавать кучу обработчиков, мы можем создать 1 обработчик
    для их предка.

  */



let selectedTd;

table.onclick = function(event) {
    let target = event.target;

    if(target.tagName != "TD") return;

    highlight(target);
};

function highlight(td){
    if(selectedTd) {
        selectedTd.style.backgroundColor = '';
    }

    selectedTd = td;

    selectedTd.style.backgroundColor = 'red';
}

