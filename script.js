let numeroCartas=parseInt(prompt("Digite o número de cartas"));
let gifs = ["<img class ='gif desaparece' src='imagens/bobrossparrot.gif'>","<img class ='gif desaparece' src='imagens/explodyparrot.gif'>","<img class ='gif desaparece' src='imagens/fiestaparrot.gif'>","<img class ='gif desaparece' src='imagens/metalparrot.gif'>","<img class ='gif desaparece' src='imagens/revertitparrot.gif'>","<img class ='gif desaparece' src='imagens/tripletsparrot.gif'>", "<img class ='gif desaparece' src='imagens/unicornparrot.gif'>"]

while(numeroCartas<4 || numeroCartas>14 || numeroCartas%2!==0 ){
  numeroCartas=parseInt(prompt("Digite o número de cartas"));
}

for(let i=0;i<numeroCartas/2;i++){
  let cartas=document.querySelector("ul");
  cartas.innerHTML+=` <li onclick="virar(this)">
  <img class="papagaio" src="imagens/papagaio.png" alt="papagaio">
  ${gifs[i]}
  </li>`;
  cartas.innerHTML+=` <li onclick="virar(this)">
  <img src="imagens/papagaio.png" alt="papagaio">
  ${gifs[i]}
  </li>`;

}
function virar(elemento) {
  const papagaio = elemento.children [0];
  papagaio.classList.toggle('desaparece');

  const gif = elemento.children [1];
  gif.classList.toggle('desaparece');
  gif.classList.add('aparece');
}