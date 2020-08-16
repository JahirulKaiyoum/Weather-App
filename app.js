document.getElementById("search-city").addEventListener("click",function () {
    const cityName = document.getElementById("city-name").value;
    document.getElementById("city").innerText = cityName;
    const temperature = document.getElementById("temp").innerText;
    const weatherStats = document.getElementById("status").innerText;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=831a582ec0fbc2d49b6ba7b27289a5e2&units=metric`)
        .then(response => response.json())
        .then(data => {
            const cityTemp = data.main.temp;
            document.getElementById("temp").innerText = cityTemp;
            const weatherDescription = data.weather[0].description;
            document.getElementById("status").innerText = weatherDescription;
            const  weatherIcon= document.getElementById("icon");
            weatherIcon.src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            
           
            

        })

})