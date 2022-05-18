function birthdayCakeCandles(candles) {
    // Write your code here
    
    const n = candles.length; 
    let getMax = 0;
    let candleMap = new Map();
    for( let i = 0; i < n; i++){
        
         getMax= (getMax < candles[i]) ? candles[i]: getMax;
        if(candleMap.has(candles[i])){
            candleMap.set(candles[i], candleMap.get(candles[i])+ 1);
            continue;
            
        }
        candleMap.set(candles[i], 1);
    }
    
return candleMap.get(getMax);
}

const candles = [4,4,1,3];

console.log(birthdayCakeCandles(candles));