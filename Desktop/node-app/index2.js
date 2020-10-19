const { uniq } = require('lodash');
const generateRandomNumbers = (size) => {
    let randomNumbers = [];
    while (uniq(randomNumbers).length < size) {
        randomNumbers.push(Math.random());
    }
    return randomNumbers;
}

const createSuggestion = (projectName, random) => {
    return `${projectName}_${random}`;
}

const run = async (projectName) => {
    // const suggestions = [];
    let size = 5;
    const randomNumbers = generateRandomNumbers(size);
    let sample;
    let successfulPromises;
    try {
        sample = await Promise.allSettled(
            new Array(size).fill()
                .map((item, index) => createSuggestion(projectName, randomNumbers[index]))
                .map((suggestion, index) =>
                    new Promise((res, rej) =>
                        setTimeout(() => (project === null ? res(suggestion) : rej(suggestion)), 1000)))
        );
        successfulPromises = sample.filter(p => p.status === 'fulfilled');
    } catch (e) {
        console.log({ e });
    }

    console.log({ successfulPromises });
}




run('Project_Awosome');