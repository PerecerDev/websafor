<?php 

defined('ABSPATH') OR die;

require_once('cf_orders.php');

function pedidos_metaboxes() {
    add_meta_box(
        'pedidos_info',
        'Información del Pedido',
        'pedidos_metabox_callback',
        'pedido',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'pedidos_metaboxes');

function pedidos_metabox_callback($post) {
    // Nonce para verificación de seguridad
    wp_nonce_field(basename(__FILE__), 'pedidos_nonce');

    // Obtener los valores actuales si existen
    $numero_pedido = get_post_meta($post->ID, '_numero_pedido', true);

    // Obtener el cliente actualmente asociado, si existe
    $cliente_asociado = get_post_meta($post->ID, '_cliente_asociado', true);

    // Obtener todos los clientes
    $args = array(
        'post_type' => 'cliente',
        'numberposts' => -1
    );
    $clientes = get_posts($args);

    echo '<label for="cliente_asociado">Cliente:</label>';
    echo '<select name="cliente_asociado" class="widefat">';
    echo '<option value="">Selecciona un cliente</option>';
    foreach ($clientes as $cliente) {
        echo '<option value="' . $cliente->ID . '"' . selected($cliente_asociado, $cliente->ID, false) . '>' . $cliente->post_title . '</option>';
    }
    echo '</select>';

    $estado = get_post_meta($post->ID, '_estado', true);
    $tipo_web = get_post_meta($post->ID, '_tipo_web', true);
    $componentes = get_post_meta($post->ID, '_componentes', true);
    $precio_final = get_post_meta($post->ID, '_precio_final', true);

    // Campos del formulario
    echo '<label for="numero_pedido">Número de Pedido:</label>';
    echo '<input type="text" name="numero_pedido" value="' . esc_attr($numero_pedido) . '" class="widefat">';

    // ... [otros campos]

    // Tipo de Web
    $args = array(
        'post_type' => 'tipo_de_web',
        'numberposts' => -1
    );
    $tipos_web = get_posts($args);

    echo '<label for="tipo_web">Tipo de Web:</label>';
    echo '<select name="tipo_web" class="widefat">';
    echo '<option value="">Selecciona un tipo de web</option>';
    foreach ($tipos_web as $tipo) {
        echo '<option value="' . $tipo->ID . '"' . selected($tipo_web, $tipo->ID, false) . '>' . $tipo->post_title . '</option>';
    }
    echo '</select>';

    // Componentes
    $args = array(
        'post_type' => 'componente',
        'numberposts' => -1
    );
    $componentes_disponibles = get_posts($args);

    echo '<label>Componentes:</label>';
    foreach ($componentes_disponibles as $componente) {
        $checked = in_array($componente->ID, (array) $componentes) ? 'checked' : '';
        echo '<div><input type="checkbox" name="componentes[]" value="' . $componente->ID . '" ' . $checked . '> ' . $componente->post_title . '</div>';
    }

    // Precio Final (solo para mostrar, se calculará al guardar)
    echo '<label for="precio_final">Precio Final:</label>';
    echo '<input type="text" name="precio_final" value="' . esc_attr($precio_final) . '" class="widefat" readonly>';
}

function guardar_pedidos_meta($post_id) {
    // Verificar el nonce
    if (!isset($_POST['pedidos_nonce']) || !wp_verify_nonce($_POST['pedidos_nonce'], basename(__FILE__)))
        return $post_id;

    // Verificar si es un autosave
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
        return $post_id;

    // Verificar permisos del usuario
    if ('pedido' == $_POST['post_type'] && !current_user_can('edit_post', $post_id))
        return $post_id;

    // Ahora podemos guardar la información
    $campos = array('numero_pedido', 'estado', 'tipo_web', 'componentes');

    foreach ($campos as $campo) {
        if (isset($_POST[$campo])) {
            update_post_meta($post_id, '_' . $campo, $_POST[$campo]);
        }
    }

    if (isset($_POST['cliente_asociado'])) {
        update_post_meta($post_id, '_cliente_asociado', $_POST['cliente_asociado']);
    }

    // Calcular el precio final
    $precio_final = 0;
    $precio_tipo_web = get_post_meta($_POST['tipo_web'], '_precio', true);
    $precio_final += $precio_tipo_web;

    foreach ($_POST['componentes'] as $componente_id) {
        $precio_componente = get_post_meta($componente_id, '_precio', true);
        $precio_final += $precio_componente;
    }

    update_post_meta($post_id, '_precio_final', $precio_final);
}
add_action('save_post', 'guardar_pedidos_meta');
