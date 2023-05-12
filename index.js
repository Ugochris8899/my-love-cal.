// let function1 = function() {
//     console.log("i am a funtion1");
// }
// setTimeout( () => {
//     console.log("i am a funtion1")
// }, 4000)
    
// let function2 = function(){
//     console.log("i am a funtion2");
// }
// setTimeout( () => {
//     console.log("i am a funtion2")
// }, 5000)
  
// let function3 = function(){
//     console.log("i am a funtion3");
// }
// setTimeout( () => {
//     console.log("i am a funtion3")
// }, 6000)

// let function4 = function(){
//     console.log("i am a funtion4");
// }
// setTimeout( () => {
//     console.log("i am a funtion4")
// }, 7000)




// console.log(Math.floor(Math.random()*10))


// run a program that returns a random number every 3 seconds, if the number is higher than 70, console.log(your love score is %: YOU ARE COMPATIBLE),
// if the number is higher than 60, console.log(your love score is %: YOU ARE SLIGHTLY COMPATIBLE),
//  if the number is higher than 50, console.log(your love score is %: YOU ARE MANAGEABLE),
//  if the number is  40 AND BELOW, console.log(your love score is %:  RUN FOR YOUR LIFE),
// function ugo (){
//     let number = Math.floor(Math.random()*100)
//     if (number >= 70){
//         console.log(`your love score is ${number}%: YOU ARE COMPATIBLE`)
//     } 
//     else if (number >= 60) {
//         console.log(`your love score is ${number}%: SLIGHTLY COMPATIBLE`)
//     }
//     else if (number >= 50) {
//         console.log(`your love score is ${number}%: MANAGEABLE`)

// }
// else{
//     console.log(`your love score is ${number}%: RUN FOR YOUR LIFE`)
// }
// }
// setInterval(ugo, 3000)



//using the switch method;

function getRandomNumber () {
    let getLoveScore = Math.floor(Math.random () * 100) + "";
}

function getLoveScore () {
    switch (true) {
        case (getLoveScore >= 70):
            console.log(`your love score is ${getLoveScore}: YOU ARE COMPATIBLE`);
                break;
        case (getLoveScore >= 60):
            console.log(`your love score is ${getLoveScore}: YOU ARE SLIGHTLY COMPATIBLE`);
                break;
                case (getLoveScore >= 50):
            console.log(`your love score is ${getLoveScore}: YOU ARE MANAGEABLE`);
                break;
            default:
            console.log(`your love score is ${getLoveScore}: RUN FOR YOUR DEAR LIFE`);
                break;
    }
}
// setTimeout(getLoveScore, 3000);

setTimeout(function() {
    const randomNumber = getRandomNumber ();
    getLoveScore(randomNumber);

    
}, 3000);


    
    