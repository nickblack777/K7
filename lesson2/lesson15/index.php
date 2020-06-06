<?php

error_reporting(E_ALL);
ini_set('display_startup_errors', 1);
ini_set('display_errors', '1');

   
    echo "<p>Привет</p>";

// Однострочные комментарии


/*
    Многострочный комментарий
*/

// phpinfo(); - функция для получения информации о php сервере

//  echo $_SERVER;

// var_dump($_SERVER);
 
?>

<div class="box">Блок</div>


<?php 
    echo "Пока";


    /*
        Типы данных: 


        boolean  - true\false
        integer - целое число
        float - число с плавающей точкой(еще его называют double)
        string - строка


        Смешанные типы:
        array - массив
        object - объект


    */

    $boolean = true;

    $str = "текст";

    $str2 = 'текст';

    $number = 22;

    $float_number = 22.3;

    echo gettype($str); // функция для проверки типа данных

    echo is_int($number); // проверяет на целое число


    // Массивы

    // Именованные массивы

    // Устаревшая версия - для php 5.4 и инже
    $array = array(
        "age" => 25,
        "name" => "Иван"
    );

    // После версии 5.4
    $array2 = [
        "age" => 30,
        "name" => "Андрей"
    ];


    // Индексированные массивы

    $array3 = ["привет", "пока", "имя"];

    // Доступ к элементам массива

    $array4 = [
        "name" => "Иван",
        "multi" => [
            "age" => 23,
            "height" => 170
        ]
    ];

    echo $array4["name"];

    echo $array4["multi"]["age"];

    
    // Константы

    /*
        Имя константы чувствительно к регистру.
    */

    define("___FOO___", "значение");


    // Функции

    function get_name(){
        return "Петр";
    }

    echo get_name();



    // Операторы

    // Арифмитические операторы

    $number = -33;

    echo +$number; // преобразование к числу

    echo -$number; // Смена знака

    echo $number + 10; // оператор сложения

    $number = $number + 20; // Оператор присваивания

    echo $number - 10; // оператор вычитания

    echo $number * 10; // оператор умножения

    echo $number / 10; // оператор деления

    echo $number % 2; // Отстаток от деления

    echo $number ** 2; // возведение в степень

    // Операторы сравнения

    /*
        == - оператор равенства
        === - оператор строгого равенства
        != - отрицание равенства (НЕ равно)
        <> - тоже не равно
        !== - строгое не равенство
        < - меньше
        > - больше
        <=  - меньше или равно
        >= - больше или равно
        <=> - "космический корабль" Число типа integer меньше, больше иди равно нулю, когда 
            $a соответственно меньше, больше или равна $b.

        
        // Логические операторы

        && (and) - оператор И
        || (or) - оператор ИЛИ
        ! - отрицание
        xor - исключающее ИЛИ (будет TRUE, если a или b true, но не оба)


        // Оператор инкремент \ декремент

        ++$a - увеличит А на 1, затем вернет значение А
        $a++ - вернет значение А, а затем прибавит 1
        --$a 
        $a--
    */


?>
