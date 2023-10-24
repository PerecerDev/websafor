<?php 

defined('ABSPATH') OR die;

require_once('cf_components.php');

function registrar_cpt_componentes() {
    $labels = array(
        'name'                  => _x( 'Componentes', 'Post Type General Name', 'text_domain' ),
        'singular_name'         => _x( 'Componente', 'Post Type Singular Name', 'text_domain' ),
        'menu_name'             => __( 'Componentes', 'text_domain' ),
        'name_admin_bar'        => __( 'Componente', 'text_domain' ),
        'archives'              => __( 'Archivo de Componentes', 'text_domain' ),
        'attributes'            => __( 'Atributos de Componente', 'text_domain' ),
        'parent_item_colon'     => __( 'Componente Padre:', 'text_domain' ),
        'all_items'             => __( 'Todos los Componentes', 'text_domain' ),
        'add_new_item'          => __( 'Añadir Nuevo Componente', 'text_domain' ),
        'add_new'               => __( 'Añadir Nuevo', 'text_domain' ),
        'new_item'              => __( 'Nuevo Componente', 'text_domain' ),
        'edit_item'             => __( 'Editar Componente', 'text_domain' ),
        'update_item'           => __( 'Actualizar Componente', 'text_domain' ),
        'view_item'             => __( 'Ver Componente', 'text_domain' ),
        'view_items'            => __( 'Ver Componentes', 'text_domain' ),
        'search_items'          => __( 'Buscar Componente', 'text_domain' ),
        'not_found'             => __( 'No encontrado', 'text_domain' ),
        'not_found_in_trash'    => __( 'No encontrado en la papelera', 'text_domain' ),
        'featured_image'        => __( 'Imagen destacada', 'text_domain' ),
        'set_featured_image'    => __( 'Establecer imagen destacada', 'text_domain' ),
        'remove_featured_image' => __( 'Eliminar imagen destacada', 'text_domain' ),
        'use_featured_image'    => __( 'Usar como imagen destacada', 'text_domain' ),
        'insert_into_item'      => __( 'Insertar en Componente', 'text_domain' ),
        'uploaded_to_this_item' => __( 'Subido a este Componente', 'text_domain' ),
        'items_list'            => __( 'Lista de Componentes', 'text_domain' ),
        'items_list_navigation' => __( 'Navegación de Componentes', 'text_domain' ),
        'filter_items_list'     => __( 'Filtrar Componentes', 'text_domain' ),
    );
    $args = array(
        'label'                 => __( 'Componente', 'text_domain' ),
        'description'           => __( 'Componentes individuales que se pueden añadir a una web', 'text_domain' ),
        'labels'                => $labels,
        'supports'              => array( 'title', 'thumbnail' ),
        'taxonomies'            => array( 'category', 'post_tag' ),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => 'servicios',
        'menu_position'         => 6,
        'menu_icon'             => 'dashicons-admin-plugins',
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'post',
        'show_in_rest'          => true,
    );
    register_post_type( 'componente', $args );
}
add_action( 'init', 'registrar_cpt_componentes', 0 );
