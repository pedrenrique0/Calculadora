let expressao = '';

function adcNumero(numero) {
    if (expressao === 'Erro na expressão!') {
      expressao = '';
      atualizarDisplay();
    }
    expressao += numero;
    atualizarDisplay();
  }
  
  function adcOperador(operador) {
    if (expressao === 'Erro na expressão!') {
      expressao = '';
      atualizarDisplay();
    }
    expressao += operador;
    atualizarDisplay();
  }

function calcular() {
  try {
    const resultado = eval(expressao);
    expressao = String(resultado);
    atualizarDisplay();
  } catch (error) {
    alert('Erro na expressão!');
    limparDisplay();
  }
}

function limparDisplay() {
  expressao = '';
  atualizarDisplay();
}

function atualizarDisplay() {
  document.getElementById('display').value = expressao;
}
function reiniciarCalculo() {
    expressao = '';
    atualizarDisplay();
  }