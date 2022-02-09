<?php

$name = basename(__FILE__, ".php") ; 
$callback = str_replace("-", "_", $name);

function my_new_block_course2 ($attributes, $content ) { // comes from file name _ instead of -
    $posts=get_posts( ['category'=> $attributes['selectedCategory']]
    );
    ob_start();
    foreach ($posts as $post) {

    echo '<h1 class="sv-block-course">' . $post->post_title .'</h1>';
    }
    return ob_get_clean();
    }

    $$name = new SvjatBlocksReg1($name, $callback); 