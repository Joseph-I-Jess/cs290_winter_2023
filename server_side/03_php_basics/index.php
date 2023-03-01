<!DOCTYPE html>
<html>
<body>

<?php
    $message = 'here   is \t my string \n cat'; // PHP will count mixed white spaces as additional words...
    $bin = 0b11_1010;
    $float = 0.1e-3;
    $arr = ["cat", 1.2, TRUE, FALSE]; // careful with FALSE being converted to other data types, things can go oddly

    echo "Hello " . $message . " str_word_count(\$message): " . str_word_count($message) . "<br>\$bin: ". $bin . "!";
    echo "<br>\$float: $float";
    //echo "<br>\$arr: $arr"; //Array datatype "thing" (to be careful not to use the word Object or otherwise ambiguous terms...)
    foreach($arr as $item) {
        echo "<br>\$item: $item";
    }
?>

</body>
</html>