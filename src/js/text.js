function typeWrite(element) {
    const textoArray = element.innerHTML.split('');
    element.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            element.innerHTML += letra;
        }, 80 * i)
    });
}
typeWrite(document.querySelector('.h1-name'));


