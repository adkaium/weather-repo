const API_KEY = '8cba1bd05b6bde3d6cf7b3a818512972';
const searchTemp = ()=>{
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data =>displayTemp(data))
    
}
const setInnerText =(id, text)=>{
    document.getElementById(id).innerText=text
}
const displayTemp=(data)=>{
    console.log(data)
   setInnerText('city', data.name);
   setInnerText('temperature', data.main.temp);
   setInnerText('weather', data.weather[0].main);

}
