function criandoBase(){
  var novaLista = document.createElement("div");
  for (let i = 0; i < arrayjogadores.length; i++) {
    novaLista.appendChild(novoItem);
  }
  elementoBase.appendChild(novaLista);
}

//botão que recarrega a página
  const btn = document.querySelector('#botao')
  
  btn.addEventListener('click', () => {
    location.reload()
  })