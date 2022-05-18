// 07066596907

let getMinNum = 0;
let getMaxNum = 0;
let totalMax = 0;
let TotalMin = 0;
//           0    1   2  3   4  5   6
const arr = [100,200,210,100,30,40,20];

for(let i = 1; i < arr.length; i++){
    getMinNum = arr[i] < arr[getMinNum] ? i : getMinNum;
    getMaxNum = arr[i] >= arr[getMaxNum] ? i : getMaxNum;

    
}

for(let x = 0; x < arr.length; x++){
    TotalMin +=  arr[x] != getMaxNum ? arr[x] : TotalMin;
    totalMax += arr[x] != getMinNum ? arr[x] : totalMax; 
}
console.log(getMinNum);
console.log(getMaxNum);

console.log(`the Total sum of the smallest numbers is: ${TotalMin}`);
console.log(`the Total sum of the largiest numbers is: ${totalMax}`);
