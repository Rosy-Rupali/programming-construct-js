let gamble_money=100;
let bet_place=1;
let bet_won=0;
let bet_lose=0;
let bet_time=0;

while(gamble_money > 0  && gamble_money < 200 && bet_place == 1){
	let flip= Math.floor(Math.random() * 2);
	if(flip == 0 ){
		bet_won+= 1
    }else{
		gamble_money-=1
		bet_lose+=1
    }
	bet_time+=1
}
console.log("Betting time", bet_time);
console.log("Bet won: ", bet_won);