'use strict';

document.cookie = "username=John";
// Запишется cookie с именем username и значением John и будет работать на всех страницах
// по пути www.domen.com/lesson3/.....

console.log( document.cookie );

// encodeURIComponent(переменная) - перекодирует данные для хранения в cookie

let name = 'my name'; // пробел не может храниться куки
let value = 'John Smith'; // пробел не может храниться куки

document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
// перекодируем имя и значение для хранения в куки (пробел заменится на спецсимвол %20)

console.log( document.cookie );

// decodeURIComponent(переменная) - преобразует назад спецсимволы( например %20) в пробелы


// Чтобы создать куки для всего домена нужно указать парметр path=/

document.cookie = "username=Nick; path=/";


/*
    domain=site.com - указаниые на каком домене будет работать куки. По умолчанию домен на котором запущен код 
    записи куки
    Например domain=test.site.com - будет работать только на этом домене
            domain=.site.com - будет работать на домене и на всех поддоменах

*/

let date = new Date(Date.now() + 86400e3); // Создадим текущую дату + 1день
date = date.toUTCString(); // Преобразуем дату к нужному формату

document.cookie = "username=Nick; path=/; expires=" + date; 

console.log( "username=Nick; path=/; expires=" + date );


// max-age=3600 - передаем время в сек. куки будет храниться 1 час


// Функции для работы с cookie

// getCookie(name)

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

console.log( getCookie('username') );


/*  LocalStorage - это аналог cookie, только хранить можно уже не 4 кб, а до 2мб
    LocalStorage - хранит данные даже после перезагрузки браузера.
    SessionStorage - хранит данные при перезагрузке страницы. При перезагрузке браузера данные удалятся.

    Доступ к этим хранилищам имеет только js, на него не могут влиять HTTP заголовки. 
    Также хранилище привязывает только к текущему домену+протоколу+порту
*/

// Запись в localStorage

localStorage.setItem('user name', 1000); // значение преобразовывется к тексту

localStorage.admin = 'привет';

console.log( localStorage.getItem('user name') );

console.log( localStorage.user );

console.log( localStorage );

delete localStorage.user;















