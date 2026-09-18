const button = document.getElementById("botao-converter");
const valorMoedaEua = document.getElementById("valor-moedaconvertida");
const select = document.getElementById("botao-muda-moeda");
const mudaImagem = document.getElementById("muda-imagem");
const nomeMoeda = document.getElementById("nome-moeda-convertida");
const valorDoReal = document.getElementById("valor-moedareal-digitada");

const dollar = 6.2;
const euro = 6.0;

const converter = () => {
  const valorReal = document.getElementById("valor-real").value;

  valorDoReal.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency",currency: "BRL",}).format(valorReal);
  

  if (select.value === "US$ Dolar Americano") {
    nomeMoeda.innerHTML = "US$ Dolar Americano";
    valorMoedaEua.innerHTML = new Intl.NumberFormat("en-US", {style: "currency",currency: "USD",}).format(valorReal / dollar)
    mudaImagem.src = "./assets/eua.jpeg";
  }

  if (select.value === "€ Euro") {
    nomeMoeda.innerHTML = "€ Euro";
    valorMoedaEua.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency",currency: "EUR",}).format(valorReal / euro)
    mudaImagem.src = "assets/euro.jpeg";
  }
};

button.addEventListener("click", converter);
