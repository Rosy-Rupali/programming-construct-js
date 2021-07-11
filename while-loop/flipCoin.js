let heads = 0;
let tails = 0;
while(heads < 11 || tails < 11){
    let coin = Math.floor(Math.random()*2);
    if(coin == 0){
        heads++;
    }else{
        tails++;
    }
}
if(heads == 11){
    console.log("Heads win");
}else{
    console.log("Tails win");
}