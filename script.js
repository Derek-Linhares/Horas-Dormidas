let bocejo = document.querySelector("#bocejo");

function playSound(element) {
  if (element && typeof element.play === "function") {
    element.play().catch(function (error) {
      console.error("Erro ao tentar reproduzir o som:", error);
    });
  } else {
    console.error("Elemento de áudio não encontrado ou play não é uma função.");
  }
}
function animar() {
  let animacao = document.querySelector("#resultado");
  animacao.style.color = "transparent";
  animacao.style.textshadow = "none";
  animacao.style.animation = "";
  setTimeout(() => (animacao.style.animation = "go-surgir 5s  "), 1);
  setTimeout(
    () => (animacao.style.color = "black"),
    (animacao.style.textshadow = "0.1rem 0.1rem #000000"),
    5000
  );
}

function calcular() {
  let idade = document.querySelector("#idade").value;
  let sono = document.querySelector("#sono").value;
  let ronco = document.querySelector("#ronco");
  let errorSound = document.querySelector("#erro");
  let horasDeVida = (idade * 8760).toLocaleString("pt-BR");
  let horasDormidas = (sono * 365 * idade).toLocaleString("pt-BR");
  let horasDeVida2 = idade * 8760;
  let horasDormidas2 = sono * 365 * idade;
  let porcentagem = (horasDormidas2 / horasDeVida2) * 100;
  let total = parseFloat(porcentagem.toFixed(2));
  let resultado = document.querySelector("#resultado");
  if (sono > 24) {
    playSound(errorSound);

    resultado.innerHTML = "As horas de sono não podem exceder 24 horas.";
  } else if (idade === "" || sono === "") {
    playSound(errorSound);

    resultado.innerHTML = "Nenhum dos campos deve estar vazio.";
  } else {
    playSound(ronco);

    resultado.innerHTML = `Você viveu até agora o total aproximado de ${horasDeVida} 
        horas, nesse intervalo você dormiu por ${horasDormidas} horas!!! Isso é equivalente a passar 
        ${total}% da sua vida dormindo.`;
  }
}

function sumirOverlay() {
  let caixinha = document.querySelectorAll("#caixinha");
  let overlays = document.getElementsByClassName("overlay2");
  for (let i = 0; i < overlays.length; i++) {
    overlays[i].style.visibility = "hidden";

    let caixinha = document.getElementById("caixinha");
    playSound(caixinha);
  }
}
