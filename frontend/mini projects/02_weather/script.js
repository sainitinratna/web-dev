document.addEventListener("DOMContentLoaded",()=>{
  const input = document.getElementById("city-input")
  const getbutton = document.getElementById("get-weather-btn")
  const info = document.getElementById("weather-info")
  const cityname = document.getElementById("city-name")
  const temperaturedata = document.getElementById("temperature")
  const descriptiondata = document.getElementById("description")
  const error = document.getElementById("error-message")
  
  const api = "secret"


  getbutton.addEventListener("click",async()=>{
    const city = input.value.trim()
    if(!city) return;
    try {
     const weatherdate = await fetchwheaterdata(city)
      displaywheathedata(weatherdate)
    } catch (error) {
      errormessage()
    }
  })

  async function fetchwheaterdata(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`
    const response = await fetch(url)
    console.log(typeof response);
    console.log("response",response);
    if(!response.ok){
      throw new Error("city not found")
    }
    const data = await response.json()
    return data
  }



  function displaywheathedata(data){
    console.log(data)
    const {name,main,weather}= data
    cityname.textContent = name
    temperaturedata.textContent = `Temperature is ${main.temp}`
    descriptiondata.textContent = `weather is ${weather[0].description}`



    info.classList.remove("hidden")
    error.classList.add("hidden")

  }

  function errormessage(){
    info.classList.add("hidden")
    error.classList.remove("hidden")
  }
})