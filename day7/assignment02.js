const Arry = [
    [2,1,3,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
];
// const Arry = [
//     [-9,-9,-9,1,1,1],
//     [0,-9,0,4,3,2],
//     [-9,-9,-9,1,2,3],
//     [0,0,8,6,6,0],
//     [0,0,0,-2,0,0],
//     [0,0,1,2,4,0]
// ];
// const Arry =[
//     [-1, -1, 0,-9, -2, -2],
//     [-2, -1, -6, -8 ,-2 ,-5],
//     [-1, -1, -1, -2, -3,-4],
//     [-1, -9, -2, -4, -4, -5],
//     [-7, -3, -3, -2, -9, -9],
//     [-1, -3, -1, -2, -4, -5]
// ];
function DimensionalArray(arr){
    let getMaxNum = -63; let getSum = 0; 
    // let counter = 1;
    for(let rows = 0; rows < arr.length - 2; rows++){
        for(let columns = 0; columns < arr[0].length - 2; columns++){
            

            getSum = arr[rows][columns] + arr[rows][columns + 1] + arr[rows][ columns + 2]
                + arr[rows + 1][columns + 1] + arr[rows + 2][columns] + arr[rows + 2][columns + 1]
                + arr[rows + 2][columns + 2];
            // console.log(` sum of: ${getSum}`);
            getMaxNum = Math.max(getMaxNum, getSum);
        }
    }

    console.log(getMaxNum);
}

DimensionalArray(Arry);

























// const Arry = [
//     [1,1,1,0,0,0],
//     [0,1,0,0,0,0],
//     [1,1,1,0,0,0],
//     [0,0,2,4,4,0],
//     [0,0,0,2,0,0],
//     [0,0,1,2,4,0]
// ];

// function DimensionalArray(takeArray){
//     let getMaxNum = 0; let getSum = 0; let counter = 1;
//     for(let rows = 0; rows < takeArray.length - 2; rows++){
//         for(let columns = 0; columns < takeArray[0].length - 2; columns++){
//             console.log(takeArray[rows][columns]);
//             console.log(takeArray[rows][columns + 1]);
//             console.log(takeArray[rows][columns + 2]);

//             console.log(takeArray[rows + 1][columns + 1]);

//             console.log(takeArray[rows + 2][columns]);
//             console.log(takeArray[rows + 2][columns + 1]);
//             console.log(takeArray[rows + 2][columns + 2]);
//             console.log(`counter of: ${counter++}`);

//             sum = takeArray[rows][columns] + takeArray[rows][columns + 1] + takeArray[rows][ columns + 2]
//                 + takeArray[rows + 1][columns + 1] + takeArray[rows + 2][columns] + takeArray[rows + 2][columns + 1]
//                 + takeArray[rows + 2][columns + 2];
//             console.log(` sum of: ${sum}`);
//             if( sum >= getMaxNum){
//                 getMaxNum = sum;
//             }
//         }
//     }
// }

// DimensionalArray(Arry);