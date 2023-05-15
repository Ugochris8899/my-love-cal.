// promises- "javaScript"
//the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//A promise is a proxy for a value not necessarily known when the promise is created.
//it allows you to associate handlers with an asynchronous action's eventual success value or failure reason.

// const doSomething = new Promise((resolve, reject) => {
//     resolve(2)
// });

// const doSomethingElse = (a) =>{
//     return a
// }
//     const doThirdThing = (a)=>{
//         return a + 5
//     }
//     function failureCallback(error) {
//         console.error(`This error happened: ${error}`);
//     }

//     doSomething.then((result) => doSomethingElse(result))
//     .then((newResult) => doThirdThing(newResult))
//     .then((finalResult) => {
//         console.log(`This is our verdict: ${finalResult}`);
//     })
//     .catch(failureCallback);



    // using promise to solve love calculator
    

// const doSomething = new Promise((resolve, reject) {
//     const man = Math.floor(Math.random()*100)
// })

// const doSomething = new Promise( (resolve, reject) => {
//     const man = Math. floor (Math. random () *100)
//     resolve (man)
//     });
    
//     const doSomethingElse=(a)=>{
//     const man = a
//     const woman = Math. floor (Math. random()*100)
//     const average = (man + woman) /2;
//     const result = {man: a, woman: woman, average: average}
//     return result
//     }

//     const doThirdThing=(a) => {
//     switch(true){
//     case (a .average >= 70):
//     return  (`man is: ${a.man}, woman is: ${a.woman}, average is: ${a .average}, so compatible`);
//     case (a.average >= 60):
//     return (` man is: ${a.man}, woman is: ${a. woman}, average is: ${a .average}, slightly compatible`);
//     case (a. average >= 50):
//     return (`man is: ${a.man}, woman is: ${a.woman}, average is: ${a.average} manageable`);
//     case (a.average >= 40):
//     return ( `man is: ${a.man}, woman is: ${a.woman}, average is: ${a. average}, don't marry` );
//     default:
//     return (` man is: ${a. man}, woman is: ${a.woman}, average is:${a. average}, run for your life`);
//     }
//     }
//     function failureCallback(error) {
//     console. error(`This error happened: ${error}`);
// }
//     doSomething.then((result) => doSomethingElse(result))
//     .then((newResult) => doThirdThing(newResult))
//     .then((finaLResult) => {
//         console. log(` This is our verdict: ${finaLResult}`);
//         })
//     .catch(failureCallback);


function loveLife() {
    return  new Promise((resolve) => {
        const man = Math.floor(Math.random()*100)
        // let vero = Math.floor(Math.random()*100)
        resolve(man)

    });
}

const loveLifeElse =(a)=>{
    return new Promise((resolve)=>{
        const man= a;
        const woman = Math.floor(Math.random()*100)
        const average = (man + woman)/2;
        const result = {man:a, woman:woman, average:average}
        resolve(result)
    });
}
const doSomething = (a,b, c)=>{
    switch (true) {
        case (a.average >=70):
            return(`${b}: ${a.man}, ${c}: ${a.woman}, average is: ${a.average}, verdict: so compatible`);
        case (a.average >=60):
            return(`${b}: ${a.man}, ${c}: ${a.woman}, average is: ${a.average}, verdict: slightly compatible`);
        case (a.average >=50):
            return(`${b}: ${a.man}, ${c}: ${a.woman}, average is: ${a.average}, verdict: manageable`);
            case (a.average >=40):
                return(`${b}: ${a.man}, ${c}: ${a.woman}, average is: ${a.average}, verdict: dont marry`);
        default:
            return(`${b}: ${a.man}, ${c}: ${a.woman}, average is: ${a.average}, verdict: run for your life`);
    }
}
function failureCallback(error) {
    console.log(`error 404 happened: ${error}`);
}

const loveCalculator = async(theMan, theWoman)=>{
    try{
        let man = await loveLife();
        let resultObj = await loveLifeElse(man);
        let theResult = doSomething(resultObj, theMan, theWoman);
        console.log(theResult);

    }catch(error){
        failureCallback(error)
    }

}
loveCalculator("tega","vero")