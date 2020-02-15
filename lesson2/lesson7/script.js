'use strict';


// Обработка ошибок, try ... catch

/*
    try {
        код....
    } catch (err) {
        обработка ошибки...
    }

*/

try {

    console.log('Запустился код');

    params;

    console.log('Конец кода');
    
} catch(err) {

    alert('Возникла ошибка: ' + err);

}

/*
    try...catch отслеживает ошибки, возникшие только во время выполнения кода. И не 
    отслеживает синтасические ошибки.

    Также try...catch работае синхронно. Пока не выполнится try, catch не запустится(в случае ошибки).
    По отношеию ко всему коду или коду записанному в try, также работает синхронно. Например:
    Если в try присутствует код с использованием SetTimeout (т.е. что-то запланировано на будущее)
    такую ошибку try...catch не поймает.
    Чтобы поймать такую ошибку, нужно вызывать try...catch внутри setTimeout
*/


setTimeout(function(){
    try {
        lalala;
    } catch(err) {
        alert('Ошибка поймана!' + ' name: '+ err.name + ' message: ' + err.message + ' stack: ' + err.stack);
    }
}, 1000);


/*
    В объект error в случае ошибки попают такие параметры:
    1) name - Имя ошибки ( ReferenceError )
    2) message - текст о деталях ошибки
    3) stack - стек вызова (строка, содержащая информацию о последовательности, которая привела к ошибке)
 */


 /*
    В новых версиях js появилась возможность выводить catch без пеараметра err
    try{

    }catch{

    }

 */

 let json = "{ некорректный JSON }";

 try {

    let user = JSON.parse(json);
    console.log(user);

 } catch(e) {
     alert('Извините возникла ошибка - ' + e.name + ' ' + e.message);
 }


 // Генерация собственных ошибок


let json2 = '{ "age" : 30 }';

try {

    let user = JSON.parse(json2);

    if(!user.name){
        throw new SyntaxError('Данные не полные: нет name');
    }

    console.log( user.name );

} catch(e) {

    console.log('Ошибка - ' + e.message);

}


/*
    1) new Error(message)
    2) new SyntaxError(message)
    3) new ReferenceError(message)
    4) new TypeError(message)


*/

// Переброс ошибок


try{
    try{

    }catch{

    }
}catch{

}


function readData(){
    let json = '{"age" : 30}';

    try{
        lalala();
    }catch (e) {
        if(e.name != 'SyntaxError'){
            throw e;
        }
    }
}

try{
    readData();
}catch (e){
    console.log('Внешний catch пойман' + e);
}



// try ... catch ... finally

/*
    finally выполняется в любом случае. Если ошибка была или не было.
*/

try {
    console.log('try');
    if(!confirm('Сделать ошибку?')){ go_func(); }
} catch (e) {
    console.log('catch');
} finally {
    console.log('finally');
}

/*  
    Все переменные внутри конструкциии try...catch...finally локальные.

    Если try используется внутри функции и внутри try вызвать return, то finally
    все равно сработает. Он увидит что произошел перехват контоля во внеший код.

    Конструкция try...finally без catch используется, когда мы хотим чтобы код внутри 
    finally выполнился тогда когда заверит свою работу код внутри try.
    В это случае мы точно уверены, что один код выполнился перед другим.
*/



