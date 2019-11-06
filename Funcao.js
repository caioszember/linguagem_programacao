// Declaração de função
// Função deterministica: as mesmas entradas geram sempre as mesmas saídas
/*
function fatorial(num) {
    let resultado = 1;
    for(let i = 2; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}

let fat = fatorial(6); // Chamada de função
document.write(fat);

document.write('<hr');

document.write(fatorial(5)); // Chamada de função

// Declaração de função
// Função deterministica: as mesmas entradas geram sempre as mesmas saídas
// iguais geram sáidas diferentes
function megasena() { // Função SEM parâmetros
    let num = Math.floor(Math.random() * 60 + 1);
    return num;
}

alert(megasena());
alert(megasena());
alert(megasena());
alert(megasena());
alert(megasena());
alert(megasena());

function elevation(num1, num2) {
    return num1 ** num2;
}

let a = 5, b = 2;

document.write(`${a} elevado a ${b} é ${elevation(a, b)}`);


function msgErro(msg) {
    let mensagem = 'ERRO CATASTRÓFICO:\n'; // \n: Quebra de linha
    mensagem += msg + '\n';
    mensagem += 'Contate o suporte técnico pelo telefone 1234-5678.'
    alert(mensagem);
}

msgErro('A temperatura do processador está muito alta.');
msgErro('Este HD tem muitos setores defeituosos.')

*/

// Função com parâmetros opcionais
function area (base, altura, forma = 'r') {
    switch(forma) {
        case 'r': // retângulo
            return base * altura;
            break;
        case 't': // triângulo
            return base * altura / 2;
            break;
        case 'e': // elipse
            return base * altura * Math.PI;
            break;
        default:
            alert('Forma inválida');
    }
}

document.write('<hr>');

document.write(area(3,2, 'r') + '<br>');
document.write(area(3,2, 't') + '<br>');
document.write(area(3,2, 'e') + '<br>');
document.write(area(3,2) + '<br>'); // A forma não foi passada, assume 'r'
