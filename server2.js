
// const greetings = require("./server")

// console.log(greetings.greetings[1])

function calculateLoveScore(ugo, jenny, callback) {
  // Generate random love scores for demonstration purposes
  const loveScore1 = Math.floor(Math.random() * 100);
  const loveScore2 = Math.floor(Math.random() * 100);

  setTimeout(() => {
    callback(ugo, loveScore1);
  }, 2000);

  setTimeout(() => {
    callback(jenny, loveScore2);
  }, 3000);

  setTimeout(() => {
    const averageScore = (loveScore1 + loveScore2) / 2;
    let advice;

    switch (true) {
      case averageScore >= 80:
        advice = 'You are a perfect match!';
        break;
      case averageScore >= 60:
        advice = 'You have a good chance of a successful relationship.';
        break;
      case averageScore >= 40:
        advice = 'There may be some challenges, but love can conquer all!';
        break;
      default:
        advice = 'It might be difficult to make it work. Think twice.';
    }

    callback('Average Score', averageScore);
    callback('Advice', advice);
  }, 4000);
}

// Example usage
calculateLoveScore('ugo', 'jenny', (name, score) => {
  console.log(`${name} your affection score is: ${score}`);
});


// function calculateLoveScore(person1, person2, callback) {
//   // Generate random love scores for demonstration purposes
//    person1 = Math.floor(Math.random() * 100);
//    person2 = Math.floor(Math.random() * 100);
//    total = person1 + person2
// callback( person1, person2, total)

//   setTimeout(() => {
//    Console.log(`your love score is ${person1}%`)
//   }, 2000);

//   setTimeout(() => {
//    Console.log(`your love score is ${person2}%`)
//   }, 3000);

  
//     let averageScore = (total) / 2;
//     let advice;

//     switch (true) {
//       case averageScore >= 80:
//         advice = 'You are a perfect match!';
//         break;
//       case averageScore >= 60:
//         advice = 'You have a good chance of a successful relationship.';
//         break;
//       case averageScore >= 40:
//         advice = 'There may be some challenges, but love can conquer all!';
//         break;
//       default:
//         advice = 'It might be difficult to make it work. Think twice.';
//     }

//   //   callback('Average Score', averageScore);
//   //   callback('Advice', advice);
//   // }, 4000);
// }

// // Example usage
// calculateLoveScore('ugo', 'jenny', averageScore)