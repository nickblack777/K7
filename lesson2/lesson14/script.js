'use strict';

// Колбэки

/*
    Колбеки - это механизм запуска одной функции, при завершении или загрузке другой функции(другого кода)
*/  

function loadScript(src, callback){
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`));

    document.head.append(script);
}


loadScript('func1.js', function(error, script){
    if(error){
        console.log(error);
    }else{
        logMessage(); 
    }
});


// Промисы

/*
    let promise = new Promise(function(resolve, reject){
        Это функция-исполнитель (executor)
        'певец'
    })

    resolve(value) - это колбэк-функция и она выполняется, если работа завершилась успешно, с результатом value
    reject(error) - это колбэк-функция и она выполнится, если работа завершилась ошибкой, error - это объект ошибки

    Результатом промиса обязательно будет либо resolve, либо reject.

    В начале запускается функция-исполнитель и в итоге запускает (в зависимости от результата) либо resolve, либо 
    reject.

    
    У объекта promise, есть внутренние свойства: 
    1) state (состояние) - в начале оно равняется 'pending'(ожидание), потом меняется на 
    'resolved' (выполнено успешно) при вызове resolve, либо на 'rejected' (выполнено с ошибкой) если
    вызван reject.

    2) result (результат) - вначале он равен undefined, далее он меняется на value при вызове resolve(value),
    либо на error при вызове reject(error)
*/


let promise = new Promise(function(resolve, reject){
    // Эта функция выполнится автоматически при вызове new Promise

    setTimeout(() => resolve('done'), 2000);
});


console.log(promise);

setTimeout(() => console.log(promise), 3000);



// Потребители - then, catch, finally

/*

    Объект Promise - это связующее звено между функциями-потребителями("фанаты") и функциями-исполнителями("певцы").

    then - функция принимает 2 параметра:
    1) функция, которая выполнится если промис успешный
    2) функция, которая выполнится, если промис с ошибкой

    promise.then(
        function(result) {  // Успешное выполнение   },
        function(error) { // обработка ошибки }
    );

    Если мы хотим обработать, только успешное выполнение, то можно передать только 1 функцию.
*/


promise.then(
    result => console.log(result),
    error => console.log(error)
);


/*
    Если мы хотим обработать только ошибку, то 1 параметром можно передать null. Но для этого случая, есть
    другое обращение promise.catch(f).

    Т.е. .catch(f) это тоже самое что .then(null, f)



    .finally(f) - выполнится при любом результате.
    Функции внутри finally не доступны никакие данны и ей не известно как завершился промис.

    Также по завершеню finally передает эстафету выполнения дальше.

    promise.then(f, f).finally(f).catch(f);
*/



function loadScriptP(src) {
    return new Promise(
        function(resolve, reject){
            let script = document.createElement('script');
            script.src = src;

            script.onload = () => resolve(script);
            script.onerror = () => reject(new Error('ошибка загрузки скрипта'));

            document.head.append(script);
        }
    );
}


let promise2 = loadScriptP('func2.js');


promise2.then(
    script => console.log(`${script.src} загружен!`),
    error => console.log(`Ошибка - ${error}`)
);


promise2.then(
    script => console.log('Обработаем еще что-то')
);


