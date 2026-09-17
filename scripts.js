

const key = "6bcd5edb88a716da23c8716a2eedb2c0"


function mostrarDados(data) {
    document.querySelector(".h2-city").innerHTML = "Tempo em " + data.name
    document.querySelector(".temp-city").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = data.weather[0].description
    document.querySelector(".umidade").innerHTML = data.main.humidity + "%"
    document.querySelector(".img-icone").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    console.log(data)
}


async function searchcity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
    mostrarDados(data)
}




function clicksearch() {
    const city = document.querySelector(".input-city").value

    searchcity(city)

}



