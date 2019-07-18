function setup() {
    createCanvas(1000, 1000);
    background(255,255,255);
}

let start = 0;
let end = 1000;
let fir = 100;

function draw(){
    fill(255,255,255);
    for(let i=0;i<10;i++){
    line(fir, start, fir, end);
    line(start, fir, end, fir);
    fir = fir + 100
    }

}


let graph =[
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,0,1,0],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0]
                            ];



    
function mouseClicked(){
    let locX = mouseX;
    let locY = mouseY;
    var AVx = Math.floor(locX/100);
    var AVy = Math.floor(locY/100); 
if(graph[AVx][AVy] == 1){
    rect(0,900,100,100);
    fill(255, 0, 0);
    console.log("Nice Hit")
}
else{
    console.log("Haha you suck")
}
}