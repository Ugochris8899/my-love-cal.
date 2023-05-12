// building a love calculator of compatibility.

function calculateLoveScore() {
  let loveScore1 =  Math.floor(Math.random()*100);
  let loveScore2 = Math.floor(Math.random()*100);
  let averageScore = (loveScore1 + loveScore2) / 2;
  switch(true) {
    case (averageScore >=70):
        
  setTimeout(() => {
    console.log(`chris you have ${loveScore1}% affection for josphine`)
  }, 2000);
  setTimeout(() => {
    console.log(`josphine you have ${loveScore2}% affection for chris`)
  }, 3000);
  setTimeout(() => {
    console.log(`However , your average love score is ${averageScore}% so you are compatible`)
  }, 4000);
    break;
        case (averageScore >= 50):
    setTimeout(() => {
        console.log(`chris you have, ${loveScore1}% affection for josphine`)
      }, 2000);
      setTimeout(() => {
        console.log(`josphine you have ${loveScore1}% affection for chris`)
      }, 3000);
      setTimeout(() => {
        console.log(`However, your average love score is ${averageScore}% so u are manageable`)
      }, 4000);
      break;
      default:
        setTimeout(() => {
            console.log(`chris you have ${loveScore1}% affection for josphine`)
          }, 2000);
          setTimeout(() => {
            console.log(`josphine you have ${loveScore2}% affection for chris`)
          }, 3000);
          setTimeout(() => {
            console.log(`However, your average love score is ${averageScore}% just go your separate ways`)
          }, 4000);
    }
}
calculateLoveScore()



//call back hell;
//* using promise.
// const date = new Date
// const today = date.getDate();
// const myschool = ["Unilag","Lasu","FCE","The Curve","Yabatech"]

//  const myPromis = new Promise((resolve, reject) => {
//     if(myschool.includes("Unilag")){
//         resolve("successful")
//     }
//     else  {
//         reject("failure")
//     }
// });

// myPromis.then(
//     function(value) {
//         console.log("available")
//     },
// function(error){
//     console.log("unavailable")
// }
// );

