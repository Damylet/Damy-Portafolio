function typeWriter(element, text, delay, callback) {
    element.innerHTML = '';
    let i = 0;
    function typing() {
        if (i < text.length) {
            if (text.charAt(i) === '.') {
                element.innerHTML += '.<br>'; 
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
    typeWriter(titulo, 'Hola soy, Damylet Mirena', 60, () => {
        descripcion.classList.remove('hidden');
        typeWriter(descripcion, 'Tengo conocimientos en desarrollo web y aplicaciones que me han permitido crear algunos proyectos que puedes ver en la sección de proyectos. Poseo habilidades en HTML / CSS / JavaScript / Nodejs / Java / Spring Boot. Lo que me permite crear sitios web escalables y robustos. Me apasiona aumentar mis conocimientos y habilidades.', 30);
    });
}
