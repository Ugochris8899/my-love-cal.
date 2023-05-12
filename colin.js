function marriage(man, woman) {
    return new Promise((resolve, reject) => {
        const compatibility = Math.floor(Math.random() * 100);
        
        if (compatibility >= 70) {
          resolve(`${man} and ${woman} are highly compatible! Compatibility score: ${compatibility}%`);
        } else if (compatibility >= 30) {
          resolve(`${man} and ${woman} have some compatibility. Compatibility score: ${compatibility}%`);
        } else {
          resolve(`${man} and ${woman} are not very compatible. Compatibility score: ${compatibility}%`);
        }
      
    });
}
marriage("John", "Jane")
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error("this is our verdict");
    });
  