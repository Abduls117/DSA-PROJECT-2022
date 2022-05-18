// <!-- 1 2 3 4 5 


// 1+2+3+4 = 10 

// 5+4+3+2 = 14



// m = 0;
// n = 0;

// loop i from 1 to 5: 
//  	arr[i] < arr[m]  => m = i // this is for min 
// 	arr[i] > arr[n]	=> n = i // this is for max




//  -->

 let m = 0; 
 let n = 0;
            //0 1 2 3 4
 const arr = [1,2,3,4,5];

 for(let i = 1; i < arr.length; i++){ 
    m = arr[i] < arr[m] ? i : m;
    n = arr[i] >= arr[n] ? i : n;
 }
 let minSum = 0, maxSum = 0;
 for(let i = 0; i < arr.length; i++){
    minSum += (i != n) ? arr[i] : 0;
    maxSum += (i != m) ? arr[i] : 0;
 }
//  console.log(`${n} ${m}`);
 console.log(`${minSum} ${maxSum}`);