fetch(
'https://api.open-meteo.com/v1/forecast?latitude=20.95&longitude=72.93&current_weather=true'
)
.then(r=>r.json())
.then(data=>{
 document.getElementById("temp")
 .innerHTML =
 data.current_weather.temperature+"°C";
});
