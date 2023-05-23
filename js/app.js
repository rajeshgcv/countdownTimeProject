const endDate="22 Oct 2023 12:05 AM"

document.getElementById("end-date").innerText=endDate;
const inputs=document.querySelectorAll("input")

// const clock=() =>{

// } 
function clock(){
    const end =new Date(endDate);
    const now=new Date();
    console.log(end)
    console.log(now)
    const diff=(end-now)/1000 ;
    console.log(diff);
    //convert into days

    if(diff<0) return;
    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor(diff/24/60)%60;
    // console.log(Math.floor(diff/60)%60);
    inputs[2].value=Math.floor(diff/60)%60;
    inputs[3].value=Math.floor(diff)%60;
}
clock();

/**
 * 1 day= 24 hours
 * 1 hr =60 min
 * 60 min = 3600 sec 
 */

setInterval(
    ()=>{
         clock()
    },1000  
)