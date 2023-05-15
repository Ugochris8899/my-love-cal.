//write a dynamic function that is using a promise that reads a file, which then append "new content" to that file and show the file containing the previous content and the newly created content.

//solution 
//read operation 
const fs = require('fs');
//function for reading
function readMyFile (path, encade) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, encade, function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data)
                console.log(data.toString())
            }
        });
    })
}

//function for append
function appendMyFile (path, content){
    return new promise(function (resolve, reject) {
        fs.appendFile(path, content, function(err, data) {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        });
    })
}

//function for delete
function deleteMyFile(path) {
    return new promise(function (resolve, reject) {
        fs.unlink(path, function (err) {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        });
    })
}

//my actual solution
const solution = async () => {
    try {
        // read any file
        await readMyFile('./sample.txt', "utf8");
        await appendMyFile('./sample.txt', "new content");
        await readMyFile('./sample.txt', "utf8");
        await deleteMyFile('./sample.txt',);
    } catch (a) {
        console.log(e.message)
    }
}

solution();