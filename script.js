
function computerPlay(){  
    let zaria=Math.floor(Math.random() * 3);//returns a random integer from 0 to 2
    console.log("zaria " +zaria);//check
    if (zaria===0){
        console.log("Rock");
    }else if (zaria===1){
        console.log("Paper");
    }else console.log("Scissors");
    
}
computerPlay()