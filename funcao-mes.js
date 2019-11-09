const elemMes = document.querySelector('#mes');
const elemResultado = document.querySelector('#resultado');
console.log(elemMes);
console.log(elemResultado);

let opt;

for(let i = 1; i <= 12; i++) {
    opt = document.createElement('option');
    opt.innerText = i;
    elemMes.appendChild(opt);
}

function mes(numMes) {
    const nomeMeses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    return nomeMeses[numMes - 1];

}
// Função que não recebe argumentos nem tem valor de retorno
function selectMudou(){

    elemResultado.innerText = '';

    let valorSel = elemMes.selectedIndex; // Índice de opçãp selecionada

    if(valorSel == 0) { //(Selecione)
        alert('Opção Inválida!');
    }
    else {
        let textoMes = mes(valorSel); // Chama a função anterior
        elemResultado.innerText = textoMes;
    }
}

elemMes.addEventListener('change', selectMudou);