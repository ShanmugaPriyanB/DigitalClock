const hour= document.getElementById("hour")
const min=document.getElementById("minute")
const sec=document.getElementById("second")
const am=document.getElementById("ampm")

let DigitalClock = function(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    let splited = time.split(':');
    let pm = splited[2].split(' ');
    hour.textContent = splited[0];
    min.textContent = splited[1];
    sec.textContent = pm[0]; //seconds
    am.textContent = pm[1];
}

window.onload = ()=>{
    DigitalClock();
    setInterval(DigitalClock,1000);
}

function clock(){
    var h= new Date().getHours()
    var m= new Date().getMinutes()
    var s= new Date().getSeconds()
    var ap="AM"

    if(h>12){
        h=h-12
        ap="PM"
    }


h=h<10?"0"+h:h;
m=m<10?"0"+m:m;
s=s<10?"0"+s:s;


hour.innerText=h; // to change the inside text  value like 10 ,11... of hours
min.innerText=m;
sec.innerHTML=s;
am.innerText=ap;

setTimeout(()=>{  //auto calls function when the timer runs out 
    clock()
},1000)
}
// clock();

let b=true
function bg()
{
 b=!b
 if(b){
    document.body.style.backgroundImage='url("https://source.unsplash.com/random/1200x1000/?nature")'
    }
   
    else{
        document.body.style.backgroundImage='url("https://source.unsplash.com/random/1200x1000/?beautiful")'
    }

}
