const btnNao = document.querySelector('.btn-nao');
const btnSim = document.querySelector('.btn-sim');
const conteudoPrincipal = document.getElementById('conteudo-principal');
const mensagemFinal = document.getElementById('mensagem-final');
let confeteIntervalo; 


function lançarConfetes() {
    if (typeof confetti === 'function') {
        
        confeteIntervalo = setInterval(() => {
            confetti({
                particleCount: 100,       
                angle: Math.random() * 360, 
                spread: 100,               
                origin: { x: Math.random(), y: Math.random() }, 
                colors: ['#ff0000', '#ff6600', '#ffcc00', '#66cc00', '#3399ff', '#9900cc'], 
            });
        }, 200); 
    }
}


function pararConfetes() {
    clearInterval(confeteIntervalo); 
}

btnNao.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - btnNao.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNao.offsetHeight);
    btnNao.style.left = `${x}px`;
    btnNao.style.top = `${y}px`;
});

btnSim.addEventListener('click', () => {
    conteudoPrincipal.style.display = 'none'; 
    mensagemFinal.style.display = 'block';  

    
    lançarConfetes();
});


window.addEventListener('beforeunload', pararConfetes);
