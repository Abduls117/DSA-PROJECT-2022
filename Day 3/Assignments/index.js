// Question
// 1: Build a function that will evaluate the 4th term of an Arithmetic progression


// Answer (1)

// function airthmeticProgression(num1, num2){
//     Maltificatio = num1 * num2;
//     addition = num1 + num2;
//     subtraction = num1 - num2;
//     division = num1 / num2;

//     console.log(`the Maltificatio of ${num1} and ${num2} is:  ${Maltificatio}`);
//     console.log(`the Addition of ${num1} and ${num2} is: ${addition}`);
//     console.log(`the Substractio of ${num1} and ${num2} is: ${subtraction}`);
//     console.log(`the Division of ${num1} and ${num2} is: ${division}`);
// }

// airthmeticProgression(10,15);

// Question
// 1: Build a function that will evaluate the 4th term of an Arithmetic progression

// Answer (2)
// by this Formula Nth term t(n) = a(1) + (n-1)*d
// N = the nth to find
// a = inial term or starting number
// d = the common diferrennce
function airthmeticProgression(a,d,N){
    return (a + (N - 1) * d);
}

// a
const a = 1;

// d
const d = 2;

// N
const N = 4;

 console.log( ` the 4th term of an Arithmetic progression is: `+ airthmeticProgression(a,d,N));
