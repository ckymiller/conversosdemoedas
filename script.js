const botaoConveter = document.getElementById('botao-converter')
const select = document.getElementById('botao-muda-moeda')
const dolar = 5.50
const euro = 6.20
const valorDigitadoReal = document.getElementById('valor-moedareal-digitada')
const valorDigitadoConvertido = document.getElementById('valor-moedaconvertida')
const nomeDaMoedaConvertida = document.getElementById('nome-moeda-convertida')
const mudaImagem = document.getElementById('muda-imagem')


const conversorDeMoedas = () => {
    const valorDigitado = document.getElementById('valor-real').value
    
    valorDigitadoReal.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency",currency: "BRL",}).format(valorDigitado);

    if(select.value === 'US$ Dolar Americano'){
            valorDigitadoConvertido.innerHTML = Intl.NumberFormat("en-US", {style: "currency",currency: "USD",}).format(valorDigitado / dolar)
        
    }

    if(select.value === '€ Euro'){
            valorDigitadoConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency",currency: "EUR",}).format(valorDigitado / euro)
        
    }
    
}

changeCurrency = () => {
    if(select.value === 'US$ Dolar Americano'){
        nomeDaMoedaConvertida.innerHTML = 'US$ Dolar Americano'
        mudaImagem.src='assets/eua.jpeg'
                
    }

    if(select.value === '€ Euro'){
        nomeDaMoedaConvertida.innerHTML = '€ Euro'
        mudaImagem.src='assets/euro.jpeg'
                
    }
}

botaoConveter.addEventListener('click', conversorDeMoedas)
select.addEventListener('change', changeCurrency)