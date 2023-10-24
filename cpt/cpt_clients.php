<?php 

defined('ABSPATH') OR die;

function registrar_cpt_clientes() {
    $labels = array(
        'name'                  => _x( 'Clientes', 'Post Type General Name', 'text_domain' ),
        'singular_name'         => _x( 'Cliente', 'Post Type Singular Name', 'text_domain' ),
        'menu_name'             => __( 'Clientes', 'text_domain' ),
        'all_items'             => __( 'Todos los Clientes', 'text_domain' ),
        'view_item'             => __( 'Ver Cliente', 'text_domain' ),
        'add_new_item'          => __( 'Añadir Nuevo Cliente', 'text_domain' ),
        'add_new'               => __( 'Añadir Nuevo', 'text_domain' ),
        'edit_item'             => __( 'Editar Cliente', 'text_domain' ),
        'update_item'           => __( 'Actualizar Cliente', 'text_domain' ),
        'search_items'          => __( 'Buscar Clientes', 'text_domain' ),
        'not_found'             => __( 'No encontrado', 'text_domain' ),
        'not_found_in_trash'    => __( 'No encontrado en la papelera', 'text_domain' ),
    );

    $args = array(
        'label'                 => __( 'Cliente', 'text_domain' ),
        'description'           => __( 'Clientes de la empresa', 'text_domain' ),
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'thumbnail' ),
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true, // Esto asegura que tenga su propio menú en la barra lateral
        'menu_position'         => 8,
        'menu_icon'             => 'dashicons-businessman', // Icono de hombre de negocios para clientes
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'post',
    );

    register_post_type( 'cliente', $args );
}
add_action( 'init', 'registrar_cpt_clientes', 0 );
