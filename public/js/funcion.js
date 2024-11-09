function typeWriter(element, text, delay, callback) {
    element.innerHTML = '';
    let i = 0;
    function typing() {
        if (i < text.length) {
            if (text.charAt(i) === '.') {
                element.innerHTML += '.<br>'; // Añadir salto de línea después del punto
                i++;
            } else {
                element.innerHTML += text.charAt(i);
                i++;
            }
            setTimeout(typing, delay);
        } else if (callback) {
            callback();
        }
    }
    typing();
}

window.onload = function() {
    const titulo = document.getElementById('titulo');
    const descripcion = document.getElementById('descripcion');
    
    titulo.classList.remove('hidden');
    typeWriter(titulo, 'Hola soy, Damylet Mirena', 100, () => {
        descripcion.classList.remove('hidden');
        typeWriter(descripcion, 'Programador Full Stack con conocimientos en desarrollo web y aplicaciones. Poseo habilidades en HTML / CSS / JavaScript / Nodejs / Java / Spring Boot. Lo que me permite crear sitios web escalables y robustos. Me apasiona aumentar mis conocimientos y habilidades.', 50);
    });
}
