<?php 

defined('ABSPATH') OR die;

require_once('cf_clients.php');


function clientes_metaboxes() {
    add_meta_box(
        'clientes_info',
        'Información del Cliente',
        'clientes_metabox_callback',
        'cliente',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'clientes_metaboxes');

function clientes_metabox_callback($post) {
    // Nonce para verificación de seguridad
    wp_nonce_field(basename(__FILE__), 'clientes_nonce');

    // Obtener los valores actuales si existen
    $nombre = get_post_meta($post->ID, '_nombre', true);
    $apellidos = get_post_meta($post->ID, '_apellidos', true);
    $empresa = get_post_meta($post->ID, '_empresa', true);
    $nif = get_post_meta($post->ID, '_nif', true);
    $email = get_post_meta($post->ID, '_email', true);
    $telefono = get_post_meta($post->ID, '_telefono', true);

    // Campos del formulario
    echo '<label for="nombre">Nombre:</label>';
    echo '<input type="text" name="nombre" value="' . esc_attr($nombre) . '" class="widefat">';
    
    echo '<label for="apellidos">Apellidos:</label>';
    echo '<input type="text" name="apellidos" value="' . esc_attr($apellidos) . '" class="widefat">';

    echo '<label for="empresa">Empresa:</label>';
    echo '<input type="text" name="empresa" value="' . esc_attr($empresa) . '" class="widefat">';

    echo '<label for="nif">NIF:</label>';
    echo '<input type="text" name="nif" value="' . esc_attr($nif) . '" class="widefat">';

    echo '<label for="email">Email:</label>';
    echo '<input type="email" name="email" value="' . esc_attr($email) . '" class="widefat">';

    echo '<label for="telefono">Teléfono:</label>';
    echo '<input type="text" name="telefono" value="' . esc_attr($telefono) . '" class="widefat">';
}

function guardar_clientes_meta($post_id) {
    // Verificar el nonce
    if (!isset($_POST['clientes_nonce']) || !wp_verify_nonce($_POST['clientes_nonce'], basename(__FILE__)))
        return $post_id;

    // Verificar si es un autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
        return $post_id;

    // Verificar permisos del usuario
    if ('cliente' == $_POST['post_type'] && !current_user_can('edit_post', $post_id))
        return $post_id;

    // Ahora podemos guardar la información
    $campos = array('nombre', 'apellidos', 'empresa', 'nif', 'email', 'telefono');

    foreach ($campos as $campo) {
        if (isset($_POST[$campo])) {
            update_post_meta($post_id, '_' . $campo, sanitize_text_field($_POST[$campo]));
        }
    }
}
add_action('save_post', 'guardar_clientes_meta');
