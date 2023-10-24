<?php 

defined('ABSPATH') OR die;

define("RTEM", get_stylesheet_directory());
define("RTEMU", get_stylesheet_directory_uri());

require_once('cpt/admin_services.php');
require_once('cpt/cpt_clients.php');
require_once('cpt/cpt_orders.php');


function enqueue_files() {
    wp_enqueue_style( 'tailwindstyles', get_stylesheet_directory_uri() . '/tailwindstyle.css', array(), rand() );
    wp_enqueue_script( 'stickyScripts', get_stylesheet_directory_uri() . '/assets/js/StickyHeaderScripts.js', array(), rand()  );
    wp_enqueue_script( 'budgetScripts', get_stylesheet_directory_uri() . '/assets/js/BudgetPopUpScripts.js', array(), rand()  );
    //wp_enqueue_script( 'ServiciosScripts', get_stylesheet_directory_uri() . '/assets/js/ServiciosScripts.js', array(), rand()  );

    wp_enqueue_script( 'webPrice', get_stylesheet_directory_uri() . '/components/generic/webPrice.js', array(), rand()  );
    wp_enqueue_script( 'contentPrice', get_stylesheet_directory_uri() . '/components/generic/contentPrice.js', array(), rand()  );
    wp_enqueue_script( 'designPrice', get_stylesheet_directory_uri() . '/components/generic/designPrice.js', array(), rand()  );


    wp_script_add_data( 'budgetScripts', 'type', 'module' );

}
add_action( 'wp_enqueue_scripts', 'enqueue_files' );

function show_page($page){
   require_once(RTEM . '/pages/' . $page . '.php');
}

function show_component($component, $route=""){
   if ($route == ""){ $route = $component; }
   include(RTEM . '/components/' . $route . '/' . $component . '.php');
}

