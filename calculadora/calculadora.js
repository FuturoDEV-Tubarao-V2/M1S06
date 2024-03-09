var display = '';

function agregarDisplay(elemento) {
  this.atualizarDisplay(display += elemento);
}

function calcularOperacao() {
  this.atualizarDisplay(eval(display));
}

function limpar() {
  this.atualizarDisplay('');
}

function atualizarDisplay(valor) {
  display = valor;
  var displayInfo = document.getElementById('display-info');
  //input
  //displayInfo.value = '';
  //span
  displayInfo.innerHTML = valor;
}