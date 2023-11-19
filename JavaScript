echo "# Mentalista" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/AnaBeatriizOliveira/Mentalista.git
  git push -u origin main

//variante número sorteado
var numeroSecreto = parseInt(Math.random() * 11);

//função chute

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  var resultadoFinal = document.getElementById("resultado");

  //condições

  if (chute == numeroSecreto) {
    resultadoFinal.innerHTML = " Parabéns! Você acertou";
  } else if (chute > 10 || chute < 0) {
    resultadoFinal.innerHTML = "Digite apenas números de 0 a 10";
  } else if (chute > numeroSecreto) {
    resultadoFinal.innerHTML = "Você errou, o número secreto é menor";
  } else if (chute < numeroSecreto) {
    resultadoFinal.innerHTML = "Você errou, o número secreto é maior";
  }
}
