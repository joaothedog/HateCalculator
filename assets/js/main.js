const form = document.querySelector('.form');

form.addEventListener('submit', function (e){
  e.preventDefault();

  const inputNome1 = form.querySelector('#input-modelo-1');
  const inputNome2 = form.querySelector('#input-modelo-2');

  const nome1 = inputNome1.value;
  const nome2 = inputNome2.value;

  const numRandom = calculaOdio(90,100);
  const msg = `O nível de ódio entre ${nome1} e ${nome2} é de: ${numRandom}%!`

  setResultado(msg);

  // console.log(`O nível de ódio entre ${nome1} e ${nome2} é de: x%!`);
});

function setResultado(msg){
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = ``;
  const p = criaParagrafoResultado();

  p.innerHTML = msg;
  p.classList.add('paragrafo-red');
  resultado.appendChild(p);
}

function criaParagrafoResultado(){
  const p = document.createElement('p');
  return p;
}

function calculaOdio(min, max){
  const numRandom = (Math.random() * (max-min) + min).toFixed(2);
  return numRandom;
}