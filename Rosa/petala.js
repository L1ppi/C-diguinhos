document.addEventListener("DOMContentLoaded", function() {
    const fallingLeft = document.querySelector('.falling-left');
    const fallingRight = document.querySelector('.falling-right');

    function resetAnimation(petal) {
        petal.style.animation = 'none';
        petal.offsetHeight; /* trigger reflow */
        petal.style.animation = '';
    }

    function animatePetals() {
        resetAnimation(fallingLeft);
        setTimeout(() => {
            resetAnimation(fallingRight);
        }, 7000); // 7 segundos de intervalo entre as animações
    }

    // Inicia a animação intercalada
    setInterval(() => {
        animatePetals();
    }, 14000); // 14 segundos para completar um ciclo (7s esquerda + 7s direita)

    // Inicia a primeira animação
    animatePetals();
});