'use strict'; // Modo "chato" do Javascript

    const elemQuadrado = document.querySelector('#quadrado');
    const elemMensagem = document.querySelector('#mensagem');
    const elemCirculo = document.querySelector('#circulo');
    
    function entrou() {
        elemMensagem.innerText = 'Oi mouse!';
    }

    function saiu() {
        elemMensagem.innerText = '';
    }

    elemQuadrado.addEventListener('mouseover', entrou);
    elemQuadrado.addEventListener('mouseout', saiu);


    elemCirculo.addEventListener('mouseover', function() {
        elemMensagem.innerText = 'Oi, mouse no círculo!';
    });

    elemCirculo.addEventListener('mouseout', function() {
        elemMensagem.innerText = '';
    });