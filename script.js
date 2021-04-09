let numeroCartas=parseInt(prompt("Digite o número de cartas"));
let gifs = ["<img class ='gif desaparece' src='imagens/bobrossparrot.gif'>"
,"<img class ='gif desaparece' src='imagens/explodyparrot.gif'>"
,"<img class ='gif desaparece' src='imagens/fiestaparrot.gif'>"
,"<img class ='gif desaparece' src='imagens/metalparrot.gif'>"
,"<img class ='gif desaparece' src='imagens/revertitparrot.gif'>"
,"<img class ='gif desaparece' src='imagens/tripletsparrot.gif'>"
, "<img class ='gif desaparece' src='imagens/unicornparrot.gif'>"]
let cartasDoJogo=[];

let vitoria=0;
let total=0;

while(numeroCartas<4 || numeroCartas>14 || numeroCartas%2!==0 ){
  numeroCartas=parseInt(prompt("Digite o número de cartas"));
}

for(let i=0;i<numeroCartas/2;i++){
  cartasDoJogo.push(` <li onclick="virar(this)">
  <img  src="imagens/papagaio.png" alt="papagaio">
  ${gifs[i]}
  </li>`);
  cartasDoJogo.push(` <li onclick="virar(this)">
  <img src="imagens/papagaio.png" alt="papagaio">
  ${gifs[i]}
  </li>`);
}
console.log(cartasDoJogo)
cartasDoJogo.sort(comparador); // Após esta linha, a minhaArray estará embaralhada
console.log(cartasDoJogo)

for(let i=0;i<cartasDoJogo.length;i++){
  let cartas=document.querySelector("ul");
  cartas.innerHTML+=cartasDoJogo[i];
}

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}

let lista=[];
let ultimaCarta=null;

function virar(elemento) {
  const papagaio = elemento.children [0];
  papagaio.classList.add('desaparece');

  const gif = elemento.children [1];
  console.log(gif);
  gif.classList.remove('desaparece');
  gif.classList.add('aparece');

  lista.push(gif);
  total+=1

  if(lista.length==2){

    analise(lista[0],lista[1]);
    lista=[]
  }
}

function analise(elemento1,elemento2){
  if(elemento1.src===elemento2.src){
    elemento1.removeAttribute('onclick');
    vitoria=vitoria+2;
    console.log(vitoria)
    if(vitoria===numeroCartas){
      alert("você venceu em "+total+" jogadas")
    }
  }else{
    setTimeout(desvirar, 1000,elemento1,elemento2);
  }
}
function desvirar(elemento1,elemento2){
 
  console.log(elemento1.parentNode)
  elemento1.parentNode.children[0].classList.remove('desaparece');
  elemento1.parentNode.children[1].classList.remove('aparece');
  elemento1.parentNode.children[1].classList.add('desaparece');
  elemento2.parentNode.children[0].classList.remove('desaparece');
  elemento2.parentNode.children[1].classList.remove('aparece');
  elemento2.parentNode.children[1].classList.add('desaparece');
}
