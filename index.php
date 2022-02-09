<?php

/**
 * Plugin Name: Svjatoslav block CGB Gutenberg Block Plugin
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: It's is a Gutenberg plugin created via create-guten-block.
 * Author: more index.php optimization 
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
// Register Blocks 
class BlocksReg {  
function __construct() {
    add_action( 'enqueue_block_editor_assets', array($this, 'adminAssets'));
}
function adminAssets() {
    wp_enqueue_script( 'svjatJSFile', plugin_dir_url(__FILE__) . 'test.js', array('wp-blocks') ); // script name should be uniqe thoughout site
    }
}

$blockReg = new BlocksReg();