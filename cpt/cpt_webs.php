<?php 

defined('ABSPATH') OR die;

require_once('cf_webs.php');

function registrar_cpt_tipos_de_web() {
    $labels = array(
        'name'                  => _x( 'Tipos de Web', 'Post Type General Name', 'text_domain' ),
        'singular_name'         => _x( 'Tipo de Web', 'Post Type Singular Name', 'text_domain' ),
        'menu_name'             => __( 'Tipos de Web', 'text_domain' ),
        'name_admin_bar'        => __( 'Tipo de Web', 'text_domain' ),
        'archives'              => __( 'Archivo de Tipos de Web', 'text_domain' ),
        'attributes'            => __( 'Atributos de Tipo de Web', 'text_domain' ),
        'parent_item_colon'     => __( 'Tipo de Web Padre:', 'text_domain' ),
        'all_items'             => __( 'Todos los Tipos de Web', 'text_domain' ),
        'add_new_item'          => __( 'Añadir Nuevo Tipo de Web', 'text_domain' ),
        'add_new'               => __( 'Añadir Nuevo', 'text_domain' ),
        'new_item'              => __( 'Nuevo Tipo de Web', 'text_domain' ),
        'edit_item'             => __( 'Editar Tipo de Web', 'text_domain' ),
        'update_item'           => __( 'Actualizar Tipo de Web', 'text_domain' ),
        'view_item'             => __( 'Ver Tipo de Web', 'text_domain' ),
        'view_items'            => __( 'Ver Tipos de Web', 'text_domain' ),
        'search_items'          => __( 'Buscar Tipo de Web', 'text_domain' ),
        'not_found'             => __( 'No encontrado', 'text_domain' ),
        'not_found_in_trash'    => __( 'No encontrado en la papelera', 'text_domain' ),
        'featured_image'        => __( 'Imagen destacada', 'text_domain' ),
        'set_featured_image'    => __( 'Establecer imagen destacada', 'text_domain' ),
        'remove_featured_image' => __( 'Eliminar imagen destacada', 'text_domain' ),
        'use_featured_image'    => __( 'Usar como imagen destacada', 'text_domain' ),
        'insert_into_item'      => __( 'Insertar en Tipo de Web', 'text_domain' ),
        'uploaded_to_this_item' => __( 'Subido a este Tipo de Web', 'text_domain' ),
        'items_list'            => __( 'Lista de Tipos de Web', 'text_domain' ),
        'items_list_navigation' => __( 'Navegación de Tipos de Web', 'text_domain' ),
        'filter_items_list'     => __( 'Filtrar Tipos de Web', 'text_domain' ),
    );
    $args = array(
        'label'                 => __( 'Tipo de Web', 'text_domain' ),
        'description'           => __( 'Tipos de páginas web que se ofrecen', 'text_domain' ),
        'labels'                => $labels,
        'supports'              => array( 'title', 'thumbnail' ),
        'taxonomies'            => array( 'category', 'post_tag' ),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => 'servicios',
        'menu_position'         => 5,
        'menu_icon'             => 'dashicons-layout',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true,
    );
    register_post_type( 'tipo_de_web', $args );
}
add_action( 'init', 'registrar_cpt_tipos_de_web', 0 );
