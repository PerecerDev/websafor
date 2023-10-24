<?php 

defined('ABSPATH') OR die;

function tipos_de_web_fields_metabox() {
    add_meta_box(
        'tipos_de_web_fields_metabox_id',    // ID del metabox
        'Detalles del Tipo de Web',          // Título del metabox
        'mostrar_tipos_de_web_fields',       // Función callback que mostrará el contenido
        'tipo_de_web',                       // CPT donde se mostrará
        'normal',                            // Contexto
        'high'                               // Prioridad
    );
}
add_action('add_meta_boxes', 'tipos_de_web_fields_metabox');

function mostrar_tipos_de_web_fields($post) {
    // Obtener los valores actuales
    $nombre = get_post_meta($post->ID, '_nombre_tipo_web', true);
    $descripcion_corta = get_post_meta($post->ID, '_descripcion_corta_tipo_web', true);
    $descripcion_larga = get_post_meta($post->ID, '_descripcion_larga_tipo_web', true);
    $tiempo_desarrollo = get_post_meta($post->ID, '_tiempo_desarrollo_tipo_web', true);
    $precio_base = get_post_meta($post->ID, '_precio_base_tipo_web', true);

    // Mostrar los campos
    echo '<label>Nombre:</label>';
    echo '<input type="text" name="nombre_tipo_web" value="' . esc_attr($nombre) . '"><br>';

    echo '<label>Descripción Corta:</label>';
    echo '<textarea name="descripcion_corta_tipo_web">' . esc_textarea($descripcion_corta) . '</textarea><br>';

    echo '<label>Descripción Larga:</label>';
    echo '<textarea name="descripcion_larga_tipo_web">' . esc_textarea($descripcion_larga) . '</textarea><br>';

    echo '<label>Tiempo de Desarrollo:</label>';
    echo '<input type="text" name="tiempo_desarrollo_tipo_web" value="' . esc_attr($tiempo_desarrollo) . '"><br>';

    echo '<label>Precio Base:</label>';
    echo '<input type="text" name="precio_base_tipo_web" value="' . esc_attr($precio_base) . '"><br>';

    // Seguridad
    wp_nonce_field('guardar_tipos_de_web_fields', 'tipos_de_web_fields_nonce');
}

function guardar_tipos_de_web_fields($post_id) {
    // Verificar el nonce
    if (!isset($_POST['tipos_de_web_fields_nonce']) || !wp_verify_nonce($_POST['tipos_de_web_fields_nonce'], 'guardar_tipos_de_web_fields')) {
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
    if (isset($_POST['nombre_tipo_web'])) {
        update_post_meta($post_id, '_nombre_tipo_web', sanitize_text_field($_POST['nombre_tipo_web']));
    }

    if (isset($_POST['descripcion_corta_tipo_web'])) {
        update_post_meta($post_id, '_descripcion_corta_tipo_web', sanitize_textarea_field($_POST['descripcion_corta_tipo_web']));
    }

    if (isset($_POST['descripcion_larga_tipo_web'])) {
        update_post_meta($post_id, '_descripcion_larga_tipo_web', sanitize_textarea_field($_POST['descripcion_larga_tipo_web']));
    }

    if (isset($_POST['tiempo_desarrollo_tipo_web'])) {
        update_post_meta($post_id, '_tiempo_desarrollo_tipo_web', sanitize_text_field($_POST['tiempo_desarrollo_tipo_web']));
    }

    if (isset($_POST['precio_base_tipo_web'])) {
        update_post_meta($post_id, '_precio_base_tipo_web', sanitize_text_field($_POST['precio_base_tipo_web']));
    }
}
add_action('save_post', 'guardar_tipos_de_web_fields');



function componentes_metabox() {
    add_meta_box(
        'componentes_metabox_id',          // ID del metabox
        'Componentes',                     // Título del metabox
        'mostrar_componentes_metabox',     // Función callback que mostrará el contenido
        'tipo_de_web',                     // CPT donde se mostrará
        'normal',                          // Contexto
        'high'                             // Prioridad
    );
}
add_action('add_meta_boxes', 'componentes_metabox');

function mostrar_componentes_metabox($post) {
    // Obtener todos los componentes
    $componentes = get_posts(array(
        'post_type' => 'componente',
        'numberposts' => -1
    ));

    // Obtener los componentes seleccionados para este tipo de web
    $componentes_seleccionados = get_post_meta($post->ID, '_componentes_seleccionados', true);

    // Mostrar los componentes con checkboxes
    foreach ($componentes as $componente) {
        $checked = in_array($componente->ID, (array) $componentes_seleccionados) ? 'checked' : '';
        echo '<input type="checkbox" name="componentes[]" value="' . $componente->ID . '" ' . $checked . '> ' . $componente->post_title . '<br>';
    }

    // Seguridad
    wp_nonce_field('guardar_componentes_metabox', 'componentes_metabox_nonce');
}

function guardar_componentes_metabox($post_id) {
    // Verificar el nonce
    if (!isset($_POST['componentes_metabox_nonce']) || !wp_verify_nonce($_POST['componentes_metabox_nonce'], 'guardar_componentes_metabox')) {
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

    // Guardar o actualizar los componentes seleccionados
    if (isset($_POST['componentes'])) {
        update_post_meta($post_id, '_componentes_seleccionados', $_POST['componentes']);
    } else {
        delete_post_meta($post_id, '_componentes_seleccionados');
    }
}
add_action('save_post', 'guardar_componentes_metabox');


