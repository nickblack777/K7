'use strict';
/*
function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}

function getCookie(name_date) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name_date.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

function setCookie(name, value, options = {}) {

    options = {
      path: '/',
    };
  

    if (options.hasOwnProperty('expires') && options.expires.toUTCString) {
      options.expires = options.expires.toUTCString();
    }

  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
}


function dateDifference(){
    let cookie_visit_date = 0,
        current_date = Date.parse( new Date( Date.now() ) ),
        diff_date = 0;

    if( getCookie('visit_date') == undefined ){

        setCookie('visit_date', current_date);

        console.log('Вы зашли 1 раз. Обновите страницу');

    }else{

        cookie_visit_date = getCookie('visit_date');

        diff_date = current_date - cookie_visit_date;

        diff_date = diff_date / 1000 / 60;

        console.log( diff_date );

        setCookie('visit_date', current_date);
    }
}


dateDifference();

*/




// Классы

/*
  class MyClass {
    constructor() {....}
    method1() {...}
    method2() {...}
    method3() {...}
  }

*/

class User {

  constructor(name, age) {
    this.name = name,
    this.age = age
  }

  get name(){
    return this._name;
  }

  set name(value){
    if(value.length < 4){
      console.log('Имя слишком короткое');
      return;
    }
    this._name = value;
    
  }

  sayHi() {
    console.log( this.name + ' привет'  );
  }

}


let user1 = new User('Иван', 20);

user1.sayHi();


console.log( typeof User ); // function




