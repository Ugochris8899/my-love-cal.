function loveCalculator(man, woman) {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        const compatibility = Math.floor(Math.random() * 101); // Random compatibility score between 0 and 100
        
        if (compatibility >= 70) {
          resolve(`${man} and ${woman} are highly compatible! Compatibility score: ${compatibility}%`);
        } else if (compatibility >= 30) {
          resolve(`${man} and ${woman} have some compatibility. Compatibility score: ${compatibility}%`);
        } else {
          resolve(`${man} and ${woman} are not very compatible. Compatibility score: ${compatibility}%`);
        }
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  
  // Example usage:
  loveCalculator("John", "Jane")
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });
  