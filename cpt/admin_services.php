<?php 

defined('ABSPATH') OR die;

require_once('cpt_webs.php');
require_once('cpt_components.php');

// Añadir el menú principal 'Servicios'
function agregar_menu_servicios() {
    add_menu_page( 
        'Servicios', 
        'Servicios', 
        'manage_options', 
        'servicios', 
        '', 
        'dashicons-admin-tools', 
        7 
    );
}
add_action( 'admin_menu', 'agregar_menu_servicios' );