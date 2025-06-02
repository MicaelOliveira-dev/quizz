
function verificarPista1() {
    const resposta = document.getElementById('respostaPista1').value.toLowerCase().trim();
    const feedbackEl = document.getElementById('feedbackPista1');
    const pista1El = document.getElementById('pista1');
    const pista2El = document.getElementById('pista2');

    if (resposta === 'git pull' || resposta === 'pull') {
        feedbackEl.textContent = 'Correto! Próxima pista desbloqueada!';
        feedbackEl.style.color = 'var(--cor-sucesso)';
        setTimeout(() => {
            pista1El.style.display = 'none';
            pista2El.style.display = 'block';
            pista2El.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 1000);
    } else {
        feedbackEl.textContent = 'Hmm, esse comando não parece certo. Tente de novo!';
        feedbackEl.style.color = 'var(--cor-erro)';
    }
}

function verificarPista2() {
    const resposta = document.getElementById('respostaPista2').value.toLowerCase().trim();
    const feedbackEl = document.getElementById('feedbackPista2');
    const pista2El = document.getElementById('pista2');
    const pista3El = document.getElementById('pista3');

    if (resposta === 'deepskyblue') { 
        feedbackEl.textContent = 'Exato! Você tem olhos de águia para CSS! Próxima pista...';
        feedbackEl.style.color = 'var(--cor-sucesso)';
        setTimeout(() => {
            pista2El.style.display = 'none';
            pista3El.style.display = 'block';
            iniciarPista3(); 
            pista3El.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 1000);
    } else {
        feedbackEl.textContent = 'Cor incorreta. Dê uma boa olhada no inspetor de elementos (F12 ou Cmd+Option+I)!';
        feedbackEl.style.color = 'var(--cor-erro)';
    }
}

function iniciarPista3() {
    console.clear();
    console.log("%c-------------------------------------------", "color: #3498db; font-size: 14px;");
    console.log("%cPsst... tai Se chegou até aqui, você é demais!", "color: #2ecc71; font-size: 16px; font-weight: bold;");
    console.warn("%cA palavra-chave para o grande final é: 'COMPILAR'", "color: #f39c12; font-size: 16px;");
    console.info("%cUse-a com sabedoria para desvendar o convite!", "color: #3498db; font-size: 14px;");
    console.log("%c-------------------------------------------", "color: #3498db; font-size: 14px;");
}

function verificarPista3() {
    const resposta = document.getElementById('respostaPista3').value.toUpperCase().trim();
    const feedbackEl = document.getElementById('feedbackPista3');
    const pista3El = document.getElementById('pista3');
    const conviteEl = document.getElementById('conviteFinal');

    if (resposta === 'COMPILAR') {
        feedbackEl.textContent = 'SENSACIONAL! Você decifrou todos os enigmas!';
        feedbackEl.style.color = 'var(--cor-sucesso)';
        setTimeout(() => {
            pista3El.style.display = 'none';
            conviteEl.style.display = 'block';
            mostrarConvite();
            conviteEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 1000);
    } else {
        feedbackEl.textContent = 'Palavra-chave não encontrada. Verifique o console novamente (Ctrl+Shift+I ou Cmd+Option+I).';
        feedbackEl.style.color = 'var(--cor-erro)';
    }
}

function mostrarConvite() {
    const feedbackConviteEl = document.getElementById('feedbackConvite'); // Este é o <p id="feedbackConvite">
    const botoesConviteDiv = document.querySelector('.botoes-convite'); // Esta é a <div> que contém os botões
    const aceitarButton = document.getElementById('aceitarConvite');
    const pensarButton = document.getElementById('pensarConvite');
    const conviteContainer = document.getElementById('conviteFinal');

    aceitarButton.addEventListener('click', function() {
        // !!!!! ATENÇÃO: SUBSTITUA OS VALORES ABAIXO PELOS SEUS !!!!!
        const seuNumeroWhats = '5577981189550'; 
        const mensagemWhats = encodeURIComponent("Oi! Vi o site e aceito o merge request! Vamos combinar! 😄");


        botoesConviteDiv.innerHTML = `
            <p style="color: var(--cor-sucesso); font-weight: bold; font-size: 1.1em;">
                Perfeito, Tai! Que demais! 🎉<br>
                Para a gente acertar os detalhes do nosso 'deploy', que tal me dar um "oi"?
            </p>
            <a href="https://wa.me/${seuNumeroWhats}?text=${mensagemWhats}" target="_blank" class="botao-acao">Me chama no WhatsApp!</a>
            <br><span style="margin: 5px 0; display: inline-block;">ou</span><br>
        `;
    });

    pensarButton.addEventListener('mouseover', function() {
        this.style.position = 'absolute'; 

        const maxX = conviteContainer.clientWidth - this.offsetWidth;
        const maxY = conviteContainer.clientHeight - this.offsetHeight;

        let newX = Math.random() * maxX;
        let newY = Math.random() * maxY;

        newX = Math.max(0, newX); 
        newY = Math.max(0, newY); 

        this.style.left = newX + 'px';
        this.style.top = newY + 'px';

        feedbackConviteEl.textContent = '';
    });

    pensarButton.addEventListener('click', function(event) {
        event.preventDefault(); 

        feedbackConviteEl.textContent = "Essa foi por pouco! Parece que este botão é 'somente leitura' 😉. Tente o de aceitar!";
        feedbackConviteEl.style.color = 'var(--cor-info)';

        this.innerHTML = "Quase! 😜";
        this.style.opacity = '0.7';
        this.style.transform = 'scale(0.95)'; 

        this.style.position = 'absolute'; 
        const maxX = conviteContainer.clientWidth - this.offsetWidth;
        const maxY = conviteContainer.clientHeight - this.offsetHeight;
        let newX = Math.random() * maxX;
        let newY = Math.random() * maxY;
        newX = Math.max(0, newX);
        newY = Math.max(0, newY);
        this.style.left = newX + 'px';
        this.style.top = newY + 'px';

        setTimeout(() => {
            if (document.body.contains(this)) {
                this.innerHTML = textoOriginalPensarButton; 
                this.style.opacity = '1';
                this.style.transform = 'scale(1)';
            }
        }, 1500); 
    });
}