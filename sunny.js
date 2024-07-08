// // // functions and parameters
// // function saymyname (){
// //     console.log("s");
// //     console.log("a");
// //     console.log("n");
// //     console.log("a");
// //     console.log("i");
// //     console.log("y");
// //     console.log("l");
// //     console.log("a");


// // }
// // // saymyname()
// // // function execution
// // // function multiplytwonumbers (number1,number2){
// // //     console.log(number1*number2);
// // // }

// function multiplytwonumbers (number1,number2){
// let sunny = number1*number2
// return sunny
// }
// const sunny = multiplytwonumbers(3,4);
// console.log(sunny);

// // function dividetwonumbers(number1,number2){
// //     console.log( number1/number2);
// // }
// // // dividetwonumbers(8,4)


// // function multiply(number1,number2,number3,number4,number5){
// //     console.log(number1*number2*number3*number4*number5);
// // }
// // // multiply(3,3,3,3,3,)
// function dividetwonumbers(number1,number2){
//     let ashee = number1/number2
//     return ashee
// }
// let ashee1 = dividetwonumbers(50,10)
// console.log(ashee1);

// // return k bd jo hoga wo print nh hoga
// function sanaiyla(number1,number2){
//    return number1-number2
// }
// let bundo = sanaiyla(400,300)
// console.log(bundo);
// threee ways
// function sunny  (number1,number2){
//     console.log(number1*number2);
// }
// sunny(5,5)
// function sunny1 (number1,number2){
//     let kato = number1/number2
//     return kato
// }
// let bundo = sunny1(20,5)
// console.log(bundo);
// function sunny2(number1,number2){
//     return number1-number2
// }
// sunny2(40.10)
// console.log(sunny2);             
// function wali(number1,number2){
//     console.log(number1+number2);
// }               
// // wali(20,20)






// function sunny(username){
//     if(username===undefined){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(sunny("sanaiyla"));
// console.log(sunny());
function sunny(username){
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    // return `${username} just logged in`
}
// console.log(sunny());
function sunny(username){
    if(!username){
        // or write username===undefined
        console.log("account by this name already exists ");
        return
    }
    return `${username} just logged in`
}
console.log(sunny());