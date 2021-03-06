<?php

namespace Spawn;

require_once __DIR__ . '/Block.php';

class Blocks
{
    private array $blocks = [];
    private array $patterns = [];

    public function __construct()
    {
    }

    public function init()
    {
        // add_action('enqueue_block_assets', array($this, 'import_assets'));
        add_action('enqueue_block_editor_assets', array($this, 'import_editor_assets'));
        add_action('init', array($this, 'register_blocks'));
    }

    public function import_editor_assets()
    {
        $asset = include(__DIR__ . '/../build/index.asset.php');

        wp_enqueue_script('spawn-blocks-editor', $this->getFileUrl('/../build/index.js'),  $asset['dependencies'], $asset['version']);
    }

    public function import_assets()
    {
        wp_enqueue_style('spawn-blocks-styles', $this->getFileUrl('/../build/index.css'), array(), filemtime(__DIR__ . '/../build/index.css'));
    }

    private function getFileUrl(string $file)
    {
        return plugins_url($file, __FILE__);
    }

    // public function add_pattern($name, $title, $categories, $description, $content) {
    //     $pattern = new SpawnPattern($name, $title, $categories, $description, $content);
    //     $this->patterns[] = $pattern;
    // }

    public function add_block($name)
    {
        $block = new Block($name);
        $this->blocks[] = $block;
        return $block;
    }

    public function add_style($block, $options)
    {
        register_block_style($block, $options);
    }

    public function remove_style($block, $style)
    {
        unregister_block_style($block, $style);
    }

    public function register_blocks()
    {
        foreach ($this->blocks as $block) {
            $block->register();
        }

        foreach ($this->patterns as $pattern) {
            $pattern->register_pattern();
        }
    }
}
