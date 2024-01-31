const viewTime = document.getElementById("time");

const fullTime = new Date();

const hours = now.toLocaleString();

if(hours == 6 || 11 ){
  viewTime.innerHTML= "Bom dia";
} else if(hours == 12 || 17){
  viewTime.innerHTML= "Boa tarde";
}else if(hours == 18  || 5 ){
  viewTime.innerHTML = "Boa noite"
}


