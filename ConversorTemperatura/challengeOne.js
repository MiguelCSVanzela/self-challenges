const grausFarenheit = document.getElementById("faren");

const result = document.getElementById("result");
grausFarenheit.addEventListener("keydown", () => {
  const valorConvertidoParaCelcius = (grausFarenheit.value - 32) * 5 / 9;
  const valorConvertidoParaFarenheit = (grausFarenheit.value * 9/5) + 32;
  result.innerText = valorConvertidoParaCelcius.toFixed(2);
});
