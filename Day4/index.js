// Assignment of day 4 
// Question: Build a function to check if a number is prime
 function getPrime(prime){
     let yesPrime = true;
     if(prime == 1 || prime == 0){
         return `this ${prime} is not the Number to begin with, Prime Number most start from 2 and so on `;
     }else if(prime > 1){ // check to see if the given number is greathan 1
         for(let x = 2; x < prime; x++){
             if(prime % x == 0){
                 yesPrime = false;
                 break;
             }
         }
// check to see if my yesPrime is true or false
         if(yesPrime){
             return `this ${prime} is a prime Number`;
         }else{
             return `this ${prime} is not a prime number`;
         }

     }else{// if a negative number is being inputed by the user 
         return `this ${prime} is a negative value, a prime Number most be positive values`;
     }
 }

 console.log(getPrime(12));// 































// function getPrime(prime){

// //     // check to see if the number inputed by the user is a prime number to begin with 
//     if(prime <= 1){
//         return false;
//     }else{
       
//         if(prime % 2 === 0){
//             return `${prime} is not a Prime Number`;
//         }else{
//             return `${prime} is a Prime Number`;
//         }
//     }

// }

// console.log(getPrime(4));


// addition 
// question : build a function ot remove all the prime number inputed by the use
// function getPrime(prime){
//     if(prime <= 1 ){
//         return  `this ${prime} is not a prime number to begin with, a Prime Number most start with 2 and so on!!`;
       
//     }else{

//         if(prime % 2 === 0){
//             return `this ${prime} is not a prime number`;
//         }else{
//             return `this ${prime} is a Prime Number`;
//         }
//     }
// }

// console.log(getPrime(29));


// build a function that will print all prime from 1 to 20 ;
// function 