var axios = require('axios');
const generateRandomNumbers = (size) => {
    let randomNumbers = [];
    while (uniq(randomNumbers).length < size) {
        randomNumbers.push(Math.random());
    }
    return randomNumbers;
}

function isAllPromiseSettled(projectName) {
    console.log('ddddddddddddddd', projectName);
    var results = Array(3);
    var counter = 0;
    return new Promise(resolve => {
        generateRandomNumbers.forEach((promise, index) => {
            // Wait for each promise to resolve
            return Promise.resolve(promise)
                .then(result => {
                    counter++;
                    results[index] = {
                        status: "fulfilled",
                        value: result
                    };
                    if (counter === promises.length) {
                        resolve(results);
                    }
                })
                .catch(err => {
                    counter++;
                    results[index] = {
                        status: "rejected",
                        reason: err
                    };
                    if (counter === promises.length) {
                        resolve(results);
                    }
                });
        });
    });
}


isAllPromiseSettled('project').then(results => {
    console.log(results);
});
