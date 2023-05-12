function calculatingMyLoveScore() {
    let love1 = Math.floor(Math.random()*100);
    let love2 = Math.floor(Math.random()*100);
    let average = (love1 + love2 )/2;
    switch (true) {
        case (average >= 70):
            setTimeout(() => {
                console.log(`Ugochukwu you have ${love1} affection for Ozioma `);
            }, 2000);
            setTimeout(() => {
                console.log(`Ozioma you have ${love2} affection for Ugochukwu `);
            }, 3000);
            setTimeout(() => {
                console.log(`However your average love score is ${average} you both are compatible `);
            }, 4000);
            break;
            
             case (average >= 60):
            setTimeout(() => {
                console.log(`Ugochukwu you have ${love1} affection for Ozioma`);
            }, 2000);
            setTimeout(() => {
                console.log(`Ozioma you have ${love2} affection for Ugochukwu`);
            }, 3000);
            setTimeout(() => {
                console.log(`However your average love score is ${average} you both are Manageable `);
            }, 4000);
            break;

            case (average >= 50):
            setTimeout(() => {
                console.log(`Ugochukwu you have ${love1} affection for Ozioma`);
            }, 2000);
            setTimeout(() => {
                console.log(`Ozioma you have ${love2} affection for Ugochukwu`);
            }, 3000);
            setTimeout(() => {
                console.log(`However your average love score is ${average} you both are sweet to be together `);
            }, 4000);
            break;
    
        default:
            setTimeout(() => {
                console.log(`Ugochukwu you have ${love1} affection for Ozioma`);
            }, 2000);
            setTimeout(() => {
                console.log(`Ozioma you have ${love2} affection for Ugochukwu`);
            }, 3000);
            setTimeout(() => {
                console.log(`However your average love score is ${average} jakpa if you can't endure. `);
            }, 4000);
            
    }

}
calculatingMyLoveScore()
    
