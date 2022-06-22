vingadores = [
  { "id": 1, "nome": "Thor Odinson: ", "casa": " Herói de Asgard - ", "descricao": "O Deus do Trovão, defensor tanto de Asgard como da Terra, e um dos fundadores dos Vingadores. O personagem foi criado por Stan Lee e Jack Kirby, que procuravam criar um super-herói mais forte do que qualquer humano. A resposta foi fácil: eles iriam então criar um deus.", "imagem": `img/avengers_capa.jpg`},
  { "id": 2, "nome": "Capitão América: ", "casa": " Herói da Terra - ", "descricao": "O Capitão América surgiu durante a Segunda Guerra Mundial, para combater nazistas, mas foi revivido na década de 60 e liderou os Vingadores. O Capitão América é a identidade heroica de Steve Rogers. Além disso, é considerado como o primeiro Vingador." },
  { "id": 3, "nome": "Hulk", "casa": "Terra", "descricao": "Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar de uma bomba por ele desenvolvida." },
  { "id": 4, "nome": "Homem de Ferro: ", "casa": " Herói da Terra - ", "descricao": "Tony Stark foi vítima de uma explosão de granada. Stark sobreviveu à explosão mas estilhaços do explosivo se alojaram próximo ao seu coração, ameaçando sua vida." },
  { "id": 5, "nome": "Homem Formiga", "casa": " Herói da Terra -", "descricao": "O primeiro Homem-Formiga dos quadrinhos foi Hank Pym, um cientista brilhante que criou as partículas Pym, substâncias que permitiam alterar as suas moléculas deixando-o grande ou pequeno. Além disso, o herói possuía um capacete que escondia sua identidade e o permitia controlar e se comunicar com insetos." },
  { "id": 6, "nome": "Capitã Marvel", "casa": " Herói da Terra - ", "descricao": "Carol Danvers tornou-se uma heroína após a explosão de um maquinário kree chamado psicomagnetron. Sobretudo, porque ao ser salva pelo primeiro Capitão Marvel, o Mar-Vell, o DNA dos dois foi mesclado." },
  { "id": 7, "nome": "Rocket Raccon: ", "casa": " Herói do Espaço -", "descricao": "A origem estabelecida historicamente do Rocket é que ele era um guaxinim normal e morava em uma espécie de asilo galático que era usado para tratar pacientes com problemas mentais no espaço. Ele e outros animais eram acompanhantes das pessoas que recebiam tratamento, eram usados como parte da terapia." },
  { "id": 8, "nome": "Viúva Negra: ", "casa": " Herói da Terra - ", "descricao": "Treinada pelo Programa Viúva Negra da Sala Vermelha, onde foi criada para se tornar uma espiã russa. Lá, destacou-se e logo se tornou uma espiã-mestre e uma das maiores assassinas do mundo — antes de se tornar uma grande defensora das forças que ameaçam a vida na Terra." },
];

function avengersAssemble() {
  casaHTML(vingadores);
}

function casaHTML(arrayVingador) {
  var elementoBasee = document.getElementById('vingadores');

  var novaaLista = document.createElement("div");
  for (let i = 0; i < arrayVingador.length; i++) {
    let novoIteem = document.createElement("div");
    novoIteem.innerHTML = '<li>'+ arrayVingador[i].nome +'</li>';
    novoIteem.innerHTML += arrayVingador[i].casa;
    novoIteem.innerHTML += arrayVingador[i].descricao;

    novaaLista.appendChild(novoIteem);
  }
  elementoBasee.appendChild(novaaLista);
}

//botão que recarrega a página
const btn = document.querySelector('#botao')

btn.addEventListener('click', () => {
  location.reload()
})
