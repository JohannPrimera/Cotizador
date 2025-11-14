//Algoritmo del cotizador
//1.selectores
//2.event listener
//3.funcion de cotizacion
//4.Actualizar html con la cotizacion

const form = document.querySelector("#coin-form")
const coin = document.querySelector("#coin")
const crypto = document.querySelector("#crypto")
const amount = document.querySelector("#amount")
const coinInfo = document.querySelector("#coin-info")

form.addEventListener("submit", async e => {
    e.preventDefault();
    const coinSelected = [...coin.children].find(option => option.selected).value
    console.log(coinSelected)
    const cryptoSelected = [...crypto.children].find(option => option.selected).value
    console.log(cryptoSelected)
    const amountValue = amount.value;
    console.log(amountValue)

    try {
        const response = await (await fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoSelected}&tsyms=${coinSelected}`)).json()
        const price = (response.DISPLAY[cryptoSelected][coinSelected].PRICE)
        const priceHigh = (response.DISPLAY[cryptoSelected][coinSelected].HIGH24HOUR)
        const priceLow = (response.DISPLAY[cryptoSelected][coinSelected].LOW24HOUR)
        const variation = (response.DISPLAY[cryptoSelected][coinSelected].CHANGEPCT24HOUR)

        coinInfo.innerHTML = `
        <p>El precio de ${cryptoSelected} es de ${response.DISPLAY[cryptoSelected][coinSelected].PRICE}</p>
        <p>El precio mas alto de ${cryptoSelected} en las ultimas 24 horas es de ${response.DISPLAY[cryptoSelected][coinSelected].HIGH24HOUR}</p>
        <p>El precio mas bajo de ${cryptoSelected} en las ultimas 24 horas es de ${response.DISPLAY[cryptoSelected][coinSelected].LOW24HOUR}</p>
        <p>El cambio porcentual de ${cryptoSelected} en las ultimas 24 horas es de ${response.DISPLAY[cryptoSelected][coinSelected].CHANGEPCT24HOUR}</p>
        `
    } catch (error) {
        console.log(error);
    }
})