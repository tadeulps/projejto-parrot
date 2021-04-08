let numeroCartas=parseInt(prompt("Digite o número de cartas"));

while(numeroCartas<4 || numeroCartas>14 || numeroCartas%2!==0 ){
  numeroCartas=parseInt(prompt("Digite o número de cartas"));
}

for(let i=0;i<numeroCartas;i++){
  let cartas=document.querySelector(".caixa-figurinhas");
  cartas.innerHTML+=` <div class="figurinha"><img src="imagens/papagaio.png" alt="papagaio"></div>`;
}