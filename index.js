const timedisplay=document.querySelector("#timedisplay")
const startbtn=document.querySelector("#startbtn")
const pausebtn=document.querySelector("#pausebtn")
const resetbtn=document.querySelector("#resetbtn")

let starttime=0;
let elapsedtime=0;
let currenttime=0;
let paused=true;
let intervalid;
let hrs=0;
let mins=0;
let secs=0;
let msecs=0;

startbtn.addEventListener("click",()=>{
    if(paused){
        paused=false;
        starttime=Date.now()-elapsedtime;
        intervalid=setInterval(updateTime,75)
    }
});
pausebtn.addEventListener("click",()=>{
    if (!paused){
        paused=true;
        elapsedtime=Date.now()-starttime;
        clearInterval(intervalid);
    }
});
resetbtn.addEventListener("click",()=>{
        paused=true;
        clearInterval(intervalid);
        let starttime=0;
let elapsedtime=0;
let currenttime=0;
let hrs=0;
let mins=0;
let secs=0;
let msecs=0
timedisplay.textContent= "00:00:00:00"
        
});

function updateTime(){
    elapsedtime=Date.now()-starttime;
    msecs=Math.floor((elapsedtime%100))

    secs=Math.floor((elapsedtime/1000)%60);
    mins=Math.floor((elapsedtime/(1000*60))%60);
    hrs=Math.floor((elapsedtime/(1000*60*60))%60)

    secs=pad(secs)
    mins=pad(mins)
    hrs=pad(hrs)
    msecs=pad(msecs)

    timedisplay.textContent =`${hrs}:${mins}:${secs}:${msecs}`;

    function pad(unit){
        return (("0") + unit).length> 2 ? unit:"0"+unit; 
    }
  

}
