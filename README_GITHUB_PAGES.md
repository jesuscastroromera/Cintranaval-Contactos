# Contactos CND PWA v6.7 — publicación gratuita en GitHub Pages

Este paquete está preparado para publicarse como una PWA estática. No requiere Mac, Xcode, Apple Developer ni servidor propio.

## MUY IMPORTANTE

- Sube SOLO los archivos de esta carpeta. **No subas ficheros Excel, vCard, copias JSON ni bases de contactos** al repositorio.
- Con GitHub Free, GitHub Pages es gratuito para repositorios **públicos**. El código de la aplicación será visible públicamente, pero los contactos que importes desde el iPhone **no se suben a GitHub**: quedan en IndexedDB dentro de Safari/la PWA del dispositivo.
- Haz copias de seguridad periódicas desde `Exportar > Guardar copia`.

## Publicar desde Windows

1. Entra en GitHub y crea un repositorio nuevo, por ejemplo `cintranaval-contactos`.
2. Para usar GitHub Pages gratuitamente, deja el repositorio como **Public**.
3. Dentro del repositorio, pulsa `Add file > Upload files`.
4. Arrastra **todo el contenido de esta carpeta** (incluyendo la carpeta `icons`).
5. Haz `Commit changes`.
6. Abre `Settings > Pages`.
7. En `Build and deployment`, elige `Deploy from a branch`.
8. Selecciona la rama `main` y la carpeta `/(root)` y pulsa `Save`.
9. GitHub mostrará la dirección HTTPS de la aplicación. Normalmente tendrá una forma parecida a:
   `https://TU_USUARIO.github.io/cintranaval-contactos/`
10. Espera a que la publicación termine y abre esa dirección en Safari en el iPhone.

## Instalar en iPhone

1. Abre la URL publicada con **Safari**.
2. Pulsa el botón **Compartir**.
3. Selecciona **Añadir a pantalla de inicio**.
4. Confirma el nombre `Contactos CND`.
5. Abre la app desde el nuevo icono de la pantalla de inicio.

La primera apertura necesita conexión para descargar la aplicación. Después, el service worker permite abrir la interfaz sin conexión.

## Pasar tus contactos al iPhone

La forma más segura es:

1. En el ordenador, exporta una copia de seguridad JSON, Excel consolidado o vCard desde la versión que estés usando.
2. Pásala al iPhone mediante iCloud Drive, AirDrop, correo o la app Archivos.
3. En `Contactos CND`, usa `Importar` o `Restaurar copia` según corresponda.

## Actualizaciones futuras

Cuando exista una nueva versión:

1. Sustituye en GitHub los archivos de la aplicación por los nuevos.
2. Conserva el mismo repositorio y la misma URL.
3. La PWA detectará la nueva versión del service worker. Puede ser necesario cerrar y volver a abrir la app una vez.

Los contactos locales no deberían borrarse al actualizar archivos del sitio porque IndexedDB pertenece al mismo origen HTTPS. Aun así, haz una copia de seguridad antes de cada actualización importante.

## Archivos principales

- `index.html`: aplicación.
- `manifest.webmanifest`: definición PWA.
- `service-worker.js`: funcionamiento offline y caché.
- `cintranaval-logo.png` y `icon-*.png`: logo e iconos en la raíz.
- `.nojekyll`: evita procesamiento innecesario de GitHub Pages.
- `404.html`: respaldo de navegación.
- `extras/`: copia HTML de emergencia e instrucciones antiguas; no es necesaria para el funcionamiento de la PWA.


## Corrección v6.7: logo
Los iconos ya no dependen de la carpeta `icons/`. Los archivos `cintranaval-logo.png`, `apple-touch-icon-v641.png`, `icon-192.png`, `icon-512.png`, `icon-1024.png` y `favicon-64.png` deben estar al mismo nivel que `index.html`. El service worker usa una caché nueva para forzar la actualización.


## Novedad v6.7: interfaz de acciones
En Agenda CND, Agenda personal, Revisión, Duplicados, Comparar/Sincronizar y Empresas, las operaciones se concentran en un botón **Acciones** desplegable. El buscador y la tabla quedan siempre visibles para simplificar el uso en iPhone.


## Cambio importante en v6.7

La importación de contactos es ahora conservadora y auditada. Por defecto no fusiona filas durante la carga. La versión anterior podía fusionar contactos distintos si compartían nombre/empresa, teléfono corporativo o email. La pantalla Importar muestra cuántas filas se han leído, añadido, actualizado u omitido y permite reemplazar una agenda completa desde un archivo.
