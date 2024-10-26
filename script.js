// for(i=0; i<=5; i++){
//     console.log("hello world");
// }

// let number =[5,6,7,8,6,5,5,4];

// for(i=0; i<=7; i++){
//     console.log(number[i]);
// }

// let element = number.length;
// for(i=0; i<element; i++){
    // console.log(number[i]);

    // if(number[i]%2 == 0){
    //     console.log("even");
    // }
    // else{
    //     console.log("odd");
    // }

//     if(number[i]%2 == 0){
//         console.log(number[i]+"=even");
//     }
//     else{
//         console.log(number[i]+"=odd");
//     }

// }

let marks = [90,80,70,60,50,34,22,25,87,31];
let element = marks.length;


for(i=0; i<element; i++){
    if(marks[i]>=33){
        console.log(marks[i]+"=pass");
    }
    else{
        console.log(marks[i]+"=fail");
    }
}