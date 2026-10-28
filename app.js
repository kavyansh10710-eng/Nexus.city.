fetch(
'https://api.open-meteo.com/v1/forecast?latitude=20.95&longitude=72.93&current_weather=true'
)
.then(r=>r.json())
.then(data=>{
 document.getElementById("temp")
 .innerHTML =
 data.current_weather.temperature+"°C";
});
function recommendation(risk){

if(risk>70){
 return "Increase water storage immediately";
}

if(risk>40){
 return "Monitor conditions";
}

return "Situation Normal";
}
function openMap(){

document.getElementById(
"mapModal"
).style.display="block";

}

function closeMap(){

document.getElementById(
"mapModal"
).style.display="none";

}
