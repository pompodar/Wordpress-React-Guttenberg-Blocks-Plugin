<?php

$name = basename(__FILE__, ".php") ; 
$callback = str_replace("-", "_", $name);

function my_new_block_course2 ($attributes, $content ) { // comes from file name _ instead of -

    ob_start();

    echo '<h1 class="sv-block-course2" style="background-color: ' . $attributes["favoriteColor"] . '">' .
$attributes['favoriteColor']
.'</h1>';
return ob_get_clean();
}

$$name = new SvjatBlocksReg1($name, $callback);