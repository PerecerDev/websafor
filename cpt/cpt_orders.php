<?php 

defined('ABSPATH') OR die;

function registrar_cpt_pedidos() {
    $labels = array(
        'name'                  => _x( 'Pedidos', 'Post Type General Name', 'text_domain' ),
        'singular_name'         => _x( 'Pedido', 'Post Type Singular Name', 'text_domain' ),
        'menu_name'             => __( 'Pedidos', 'text_domain' ),
        'all_items'             => __( 'Todos los Pedidos', 'text_domain' ),
        'view_item'             => __( 'Ver Pedido', 'text_domain' ),
        'add_new_item'          => __( 'Añadir Nuevo Pedido', 'text_domain' ),
        'add_new'               => __( 'Añadir Nuevo', 'text_domain' ),
        'edit_item'             => __( 'Editar Pedido', 'text_domain' ),
        'update_item'           => __( 'Actualizar Pedido', 'text_domain' ),
        'search_items'          => __( 'Buscar Pedidos', 'text_domain' ),
        'not_found'             => __( 'No encontrado', 'text_domain' ),
        'not_found_in_trash'    => __( 'No encontrado en la papelera', 'text_domain' ),
    );

    $args = array(
        'label'                 => __( 'Pedido', 'text_domain' ),
        'description'           => __( 'Pedidos realizados por clientes', 'text_domain' ),
        'labels'                => $labels,
        'supports'              => array( 'title', 'editor', 'thumbnail' ),
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true, // Esto asegura que tenga su propio menú en la barra lateral
        'menu_position'         => 9,
        'menu_icon'             => 'dashicons-cart', // Icono de carrito para pedidos
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'post',
    );

    register_post_type( 'pedido', $args );
}
add_action( 'init', 'registrar_cpt_pedidos', 0 );
