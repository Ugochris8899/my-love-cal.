// const greetings = ["good morning","good afternoon","good night"]
// module.exports = {greetings}


function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  function getLoveScore(number) {
    switch (true) {
      case number > 70:
        console.log(`Your love score is ${number + "%"}: YOU ARE COMPATIBLE`);
        break;
      case number > 60:
        console.log(`Your love score is ${number + "%"}: YOU ARE SLIGHTLY COMPATIBLE`);
        break;
      case number > 50:
        console.log(`Your love score is ${number + "%"}: YOU ARE MANAGEABLE`);
        break;
      default:
        console.log(`Your love score is ${number + "%"}: RUN FOR YOUR LIFE`);
    }
  }
  setTimeout(function() {
    const randomNumber = getRandomNumber();
    getLoveScore(randomNumber);
  }, 3000);
