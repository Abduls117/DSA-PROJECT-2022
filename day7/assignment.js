 console.log(`a b c`);
 console.log(`  d  `);
 console.log(`e f g`);

const Arry = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
];

function DimensionalArray(arr){
 let getMax = 28; let getSum = 0; let counter = 1;
 for(let row = 0; row <= arr.length - 2; row++){
    for(let cl = 0; cl < arr[row].length - 2; cl++){
        console.log(arr[row][cl]);
        console.log(arr[row][cl + 1]);
        console.log(arr[row][cl + 2]);

        console.log(arr[row + 1][cl + 1]);

        console.log(arr[row + 2][cl]);
        console.log(arr[row + 2][cl + 1]);
        console.log(arr[row + 2][cl + 2]);
        console.log(`Round: ${counter++}`);
    }
 }
//  return counter;

















    // let getMax = 0; let sum = 0;
    // for(let row = 0; row < arr.length -2 ; row++){
    //     for(let column = 0; column < arr[row].length -2; column++){

    //                 sum = arr[row][column] + arr[row][column + 1]  + arr[row][column + 2] 
    //                     + arr[row + 1][column + 1] + arr[row + 2][column] + arr[row + 2][column + 1]
    //                     + arr[row + 2][column + 2];
                    
    //                getMax = (getMax <= sum) ? sum : getMax;
    //     }
      
    // }
    // console.log(getMax);
}
console.log(DimensionalArray(Arry));






// console.log(`a b c`);
// console.log(`  d  `);
// console.log(`e f g`);

// const Arry = [
//    [1,1,1,0,0,0],
//    [0,1,0,0,0,0],
//    [1,1,1,0,0,0],
//    [0,0,2,4,4,0],
//    [0,0,0,2,0,0],
//    [0,0,1,2,4,0]
// ];

// function DimensionalArray(arr){
//    let getMax = 0; let counter = 1; let sum = 0;
//    for(let row = 0; row < arr.length -2 ; row++){
//        for(let column = 0; column < arr[row].length -2; column++){
//            console.log(`round: ${counter++}`);
//                        // console.log(arr[row][column]);
//                        // console.log(arr[row][column + 1]);
//                        // console.log(arr[row][column + 2]);
//                        // console.log(arr[row + 1][column + 1]);
//                        // console.log(arr[row + 2][column]);
//                        // console.log(arr[row + 2][column + 1]);
//                        // console.log(arr[row + 2][column + 2]);
//                    sum = arr[row][column] + arr[row][column + 1]  + arr[row][column + 2] 
//                        + arr[row + 1][column + 1] + arr[row + 2][column] + arr[row + 2][column + 1]
//                        + arr[row + 2][column + 2];
                   
//                   getMax = (getMax <= sum) ? sum : getMax;
//        }
     
//    }
//    console.log(getMax);
// }
// DimensionalArray(Arry);











