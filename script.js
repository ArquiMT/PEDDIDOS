document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const menuPanel = document.getElementById('menu-panel');

    // Controlar la visibilidad del menú
    let menuVisible = false;

    function toggleMenu() {
        menuVisible = !menuVisible;
        if (menuVisible) {
            menuPanel.style.left = '0'; // Mostrar el menú
        } else {
            menuPanel.style.left = '-424px'; // Esconder el menú
        }
    }

    menuBtn.addEventListener('click', toggleMenu);

    // Ocultar el menú si se hace clic fuera de él
    document.addEventListener('click', function(event) {
        if (menuVisible && !menuPanel.contains(event.target) && event.target !== menuBtn) {
            toggleMenu();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const agreeBtn = document.getElementById('agree-btn');
    const agreePanel = document.getElementById('agree-panel');

    // Controlar la visibilidad del menú
    let agreeVisible = false;

    function toggleMenu() {
        agreeVisible = !agreeVisible;
        if (agreeVisible) {
            agreePanel.style.right = '0'; // Mostrar el menú
        } else {
            agreePanel.style.right= '-324px'; // Esconder el menú
        }
    }

    agreeBtn.addEventListener('click', toggleMenu);

    // Ocultar el menú si se hace clic fuera de él
    document.addEventListener('click', function(event) {
        if (agreeVisible && !agreePanel.contains(event.target) && event.target !== agreeBtn) {
            toggleMenu();
        }
    });
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    var files = event.target.files;
    var preview = document.getElementById('preview');
    
    // Clear any existing content
    preview.innerHTML = '';

    // Loop through all selected files
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // Only process image files
      if (!file.type.match('image.*')) {
        continue;
      }

      var imgContainer = document.createElement('div');
      imgContainer.style.marginBottom = '20px'; // Spacing between each image container

      var img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      
      img.style.height = '85px';
      img.style.width = '85px';  // Asegúrate de que la imagen sea cuadrada para obtener un círculo perfecto
      img.style.borderRadius = '50%';  // Esto hace que la imagen sea circular
      img.style.display = 'block'; // Ensure the image is displayed in a block to put it on a new line
      img.style.marginBottom = '10px';

      var fileInfo = document.createElement('p');
      fileInfo.style.fontSize = '14px';
      fileInfo.style.marginTop = '0';

      // Append the image and file info to the container
      imgContainer.appendChild(img);
      imgContainer.appendChild(fileInfo);

      // Append the container to the preview div
      preview.appendChild(imgContainer);
    }
});



