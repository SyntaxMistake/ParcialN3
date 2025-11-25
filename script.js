document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("invertir")
    .addEventListener("click", function (event) {
      event.preventDefault();
      let valor = parseInt(document.getElementById("valor").value);
      var digito,
        resultado = 0;
      while (valor) {
        digito = valor % 10;
        resultado = resultado * 10 + digito;
        valor = (valor / 10) | 0;
      }
      document.getElementById("numeroinvertido").textContent = `${resultado}`;
    });
});
