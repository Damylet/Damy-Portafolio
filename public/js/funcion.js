
function typeWriter(element, text, delay) {
    element.innerHTML = '';
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, delay);
        }
    }
    typing();
}

window.onload = function() {
    const titulo = document.getElementById('titulo');
    const descripcion = document.getElementById('descripcion');
    
    typeWriter(titulo, 'Damylet Mirena', 100); // Introduce el texto del h3

    setTimeout(() => {
        descripcion.classList.remove('hidden');
        typeWriter(descripcion, descripcion.innerText, 50); // Introduce el texto del p
    }, 2000); // Espera 2 segundos antes de comenzar con el párrafo
}
