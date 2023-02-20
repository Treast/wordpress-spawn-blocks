<?php

/**
 * Plugin Name:       Spawn Blocks
 * Description:       Manage Gutenberg blocks, styles, variations & formats for the theme.
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Version:           1.0.0
 * Author:            Vincent Riva
 * Author URI:        https://www.vincentriva.fr
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       spawn-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_spawn_blocks_block_init()
{
	register_block_type(__DIR__ . '/build/blocks/block-slider');
	register_block_type(__DIR__ . '/build/blocks/block-slide');
}

add_action('init', 'create_block_spawn_blocks_block_init');

/**
 * Registers the script for styles, variations & formats.
 */
function spawn_blocks_enqueue_misc_scripts()
{
	$asset = include(__DIR__ . '/build/misc/misc.asset.php');
	wp_enqueue_script('spawn-script', plugin_dir_url(__FILE__) . 'build/misc/misc.js', $asset['dependencies'], $asset['version']);
}

// add_action('wp_enqueue_scripts', 'spawn_blocks_enqueue_misc_scripts');
add_action('enqueue_block_editor_assets', 'spawn_blocks_enqueue_misc_scripts');

/**
 * Add a block category for custom blocks.
 */
function spawn_blocks_add_block_category($categories)
{
	$category = [
		'slug' => 'spawn',
		'title' => 'Spawn'
	];

	array_splice($categories, 3, 0, [$category]);

	return $categories;
}

add_filter('block_categories_all', 'spawn_blocks_add_block_category');
