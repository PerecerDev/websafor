<?php 

defined('ABSPATH') OR die;

function componentes_fields_metabox() {
    add_meta_box(
        'componentes_fields_metabox_id',    // ID del metabox
        'Detalles del Componente',          // Título del metabox
        'mostrar_componentes_fields',       // Función callback que mostrará el contenido
        'componente',                       // CPT donde se mostrará
        'normal',                           // Contexto
        'high'                              // Prioridad
    );
}
add_action('add_meta_boxes', 'componentes_fields_metabox');

function mostrar_componentes_fields($post) {
    // Obtener los valores actuales
    $nombre = get_post_meta($post->ID, '_nombre_componente', true);
    $descripcion_corta = get_post_meta($post->ID, '_descripcion_corta', true);
    $descripcion_larga = get_post_meta($post->ID, '_descripcion_larga', true);
    $tiempo_desarrollo = get_post_meta($post->ID, '_tiempo_desarrollo', true);
    $precio = get_post_meta($post->ID, '_precio', true);

    // Mostrar los campos
    echo '<label>Nombre:</label>';
    echo '<input type="text" name="nombre_componente" value="' . esc_attr($nombre) . '"><br>';

    echo '<label>Descripción Corta:</label>';
    echo '<textarea name="descripcion_corta">' . esc_textarea($descripcion_corta) . '</textarea><br>';

    echo '<label>Descripción Larga:</label>';
    echo '<textarea name="descripcion_larga">' . esc_textarea($descripcion_larga) . '</textarea><br>';

    echo '<label>Tiempo de Desarrollo:</label>';
    echo '<input type="text" name="tiempo_desarrollo" value="' . esc_attr($tiempo_desarrollo) . '"><br>';

    echo '<label>Precio:</label>';
    echo '<input type="text" name="precio" value="' . esc_attr($precio) . '"><br>';

    // Seguridad
    wp_nonce_field('guardar_componentes_fields', 'componentes_fields_nonce');
}

function guardar_componentes_fields($post_id) {
    // Verificar el nonce
    if (!isset($_POST['componentes_fields_nonce']) || !wp_verify_nonce($_POST['componentes_fields_nonce'], 'guardar_componentes_fields')) {
        return;
    }

    // Verificar si es un autoguardado
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    // Verificar permisos
    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    // Guardar o actualizar los campos
    if (isset($_POST['nombre_componente'])) {
        update_post_meta($post_id, '_nombre_componente', sanitize_text_field($_POST['nombre_componente']));
    }

    if (isset($_POST['descripcion_corta'])) {
        update_post_meta($post_id, '_descripcion_corta', sanitize_textarea_field($_POST['descripcion_corta']));
    }

    if (isset($_POST['descripcion_larga'])) {
        update_post_meta($post_id, '_descripcion_larga', sanitize_textarea_field($_POST['descripcion_larga']));
    }

    if (isset($_POST['tiempo_desarrollo'])) {
        update_post_meta($post_id, '_tiempo_desarrollo', sanitize_text_field($_POST['tiempo_desarrollo']));
    }

    if (isset($_POST['precio'])) {
        update_post_meta($post_id, '_precio', sanitize_text_field($_POST['precio']));
    }
}
add_action('save_post', 'guardar_componentes_fields');
