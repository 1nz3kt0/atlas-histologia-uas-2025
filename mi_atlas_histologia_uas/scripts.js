fetch('datos_histologia.json')
.then(response => response.json())
.then(data => {
    const galeria = document.getElementById('galeria');
    data.forEach(item => {
        const img = document.createElement('img');
        img.src = 'imagenes/' + item.imagen;
        img.alt = item.titulo;
        img.title = item.titulo;
        galeria.appendChild(img);
    });
});

