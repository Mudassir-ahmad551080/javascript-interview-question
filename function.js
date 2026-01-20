1
// logical question write a function that reverse the Number 

// function reverseNumber(num){
//     var rev = 0;
//    while (num>0) {
//      rem = num%10;
//      rev = rev*10+rem;
//      num = Math.floor(num/10)
//    }
//    return rev
// }

// console.log(reverseNumber(349));
2
// write a function that check if the string is plandrom or not

// function checkStringPalChecker(str){
//   let reversed = str.split('').reverse('').join('');
//   if(reversed == str){
//      return `This is the Plandrom ${reversed}`
//   }
//   else{
//     return `Not Plandrom ${reversed}`
//   }
// }

// console.log(checkStringPalChecker('loop'));
3
// write the function that check if the string is an alphabitical order or not

// function checkStrAlphabaticOrder(str){
//    let order =  str.split('').sort().join('')
//    return order
// }

// console.log(checkStrAlphabaticOrder("apple"));
4
// write a js function which accept the string and convert the first letter in ot upperCase

// function firstletterconvertintouppercase(str){
//   let result= str.split(' ').map((value)=>{
//        return value.charAt(0).toUpperCase() + value.substring(1);
//     });
//     return result

// }

// console.log(firstletterconvertintouppercase("hello how are you"));
5
// write a javascript function which find how many chractor in the sring 

// function checkcharactor(str){
//     let occurances = {}
//    str.split(' ').forEach(element => {
//       if(!occurances.hasOwnProperty(element)){
//         occurances[element] = 1;
//       }
//       else{
//         occurances[element]++;
//       }
//    });
//    return occurances
// }


// console.log(checkcharactor("mudassir"));
6 
// write a js function that clone an array 
// function cloneArr (arr){
//     return [...arr]
// }

// let newarray = cloneArr([1,2,3,4])
// console.log(newarray);
7
// write a javascript function that check the argument typ

// function typeTeller(arg){
//     console.log(typeof arg);
// }
// typeTeller(('mudassir'));
// typeTeller(([]));
// typeTeller((89));
8
// write a js function that print all the prime number between 1 to 100
// function isPrime(num, divisor = 2) {
//     if (num < 2) return false;
//     if (divisor > Math.sqrt(num)) return true;
//     if (num % divisor === 0) return false;
//     return isPrime(num, divisor + 1);
// }

// function printPrimes(num = 1) {
//     if (num > 100) return;

//     if (isPrime(num)) {
//         console.log(num);
//     }

//     printPrimes(num + 1);
// }

// printPrimes();
9 
// another way to print prime number between 1 to 100

// function printPrimes(n){
//     for(let i=2; i<=n; i++){
//         if(n%i === 0){
//             return false
//         }
//     }
//     return true
// }

// for(let j=2; j<=100; j++){
//     if(printPrimes(j)){
//         console.log(j);
//     }
// }