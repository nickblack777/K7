<?php 

// Сложение текстов

$text1 = "Hello";

$text2 = "Василий";

$hello = $text1 . " " . $text2;

echo $hello;

echo "<div class='box'>" . $text1 . "</div>";


// Управляющме конструкции

// Проверка if else

if( $text1 === "Привет" ) {
    echo "Верно!";
} else {
    echo "Не верно!";
}

$a = 10;
$b = 15;


if($a > $b){
    echo "<p>больше</p>";
} elseif($a < $b) {
    echo "<p>меньше</p>";
}


if($a > $b):
    echo "<p>больше</p>";
else:
    echo "<p>меньше</p>";
endif;


// while - цикл 
$i = 1;
while($i <= 10){
    echo "<div>" . $i . "</div>";
    $i++;
}


// do while - цикл

do{
    echo "<div>" . $i . "</div>";
    $i--;
}while($i > 1);


// for - цикл
$n = 0;
for($m = 0; $m < 10; $m++){
    $n += $m;
}
echo $n;


// foreach - цикл для перебора массивов

$array = [1, 2, 3, 7, 22, 13];

foreach($array as $value){
    $n += $value;
}
echo $n;


foreach($array as &$value){
    $value = $value * 2;
}

print_r($array);  // функция для вывода массива или объекта


foreach($array as $key => $value){
    echo $key . " - " . $value . "<br>";
}


// break - прерывает выполнение текущей структруты for \ foreach \ while \ do while \ switch

// continue - используется для пропуска оставшейся части итерации цикла


// switch

$num = 10;

switch($num){
    case 0: 
        echo "i равно 0";
        break;
    case 3:
        echo "i равно 3";
        break;
    case 10:
        echo "i равно 10";
        break;
}



// Функции

function sayHello(){
    echo "Hello";
}

sayHello();


function calc($number1 = 5, $number2 = 4){
    return $number1 + $number2;
}

echo calc(20);


echo "<br>";
echo round(-1.5, 0, PHP_ROUND_HALF_ODD);


echo "<br>";
echo stripos($text1, 'lo');









?>