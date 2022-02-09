<?php

/**
 * Plugin Name: Course block CGB Gutenberg Block Plugin
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: It's is a Gutenberg plugin created via create-guten-block.
 * Author: 
 * Author URI: https://AhmadAwais.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */


/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class SvjatBlocksReg1 {
    function __construct() {
    add_action( 'init', array($this, 'adminAssets'));
    }
    function adminAssets() {
        wp_register_script( 'svjatJScourse', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks') ); 
        wp_register_style( 'svjatCSScourse', plugin_dir_url(__FILE__) . 'build/index.css' );

        register_block_type(
            'course-block/my-new-block-course', array(
            // Enqueue blocks.style.build.css on both frontend & backend.
            'style' => 'svjatCSScourse',
            // Enqueue blocks.build.js in the editor only.
            'editor_script' => 'svjatJScourse',
            // Enqueue blocks.editor.build.css in the editor only.
            // 'editor_style' => 'my_block-cgb-block-editor-css',
            // 'render_callback' => $this->callback,
            )
        );
    }
}

$course_reg = new SvjatBlocksReg1();