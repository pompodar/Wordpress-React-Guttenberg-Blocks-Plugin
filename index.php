<?php

/**
 * Plugin Name: Svjatos Course block CGB Gutenberg Block Plugin
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: It's is a Gutenberg plugin created via create-guten-block.
 * Author: no clean package.js and more index.php optimization 
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

protected $name;
protected $callback; 
    
function __construct($name, $callback) {
    $this->name = $name;
    $this->callback = $callback;
add_action( 'init', array($this, 'adminAssets'));
}
function adminAssets() {
wp_register_script( 'svjatJScourse', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor') );
wp_register_style( 'svjatCSScourse', plugin_dir_url(__FILE__) . 'build/index.css' );

register_block_type(
'course-block/' . $this->name, array(
// Enqueue blocks.style.build.css on both frontend & backend.
'style' => 'svjatCSScourse',
// Enqueue blocks.build.js in the editor only.
'editor_script' => 'svjatJScourse',
// Enqueue blocks.editor.build.css in the editor only.
'editor_style' => 'my_block-cgb-block-editor-css',
'render_callback' => $this->callback,
)
);
}
}

foreach (scandir(realpath(__DIR__ . "/src/blocks/")) as $folders) {
    if (strpos($folders, 'block') !== false) {
        $files[] = $folders;

        foreach (array_unique($files) as $file) {
            $address = '/src/blocks/' . $file . '/' . $file . '.php';
            require_once(dirname(__FILE__). $address);
        }
    }
}
    