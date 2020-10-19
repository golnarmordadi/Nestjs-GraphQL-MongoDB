const { uniq } = require('lodash');
const SIZE = 3;


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

const fetchProjectNames = async (projectName, size, bucket) => {
    const missings = size - bucket.length;
    const randomNumbers = generateRandomNumbers(missings);
    let sample;
    try {
        sample = await Promise.allSettled(
            new Array(missings).fill()
                .map((item, index) => createSuggestion(projectName, randomNumbers[index]))
                .map((suggestion, index) =>
                    new Promise((res, rej) =>
                        setTimeout(() => (index % 2 === 0 ? res(suggestion) : rej(suggestion)), 10)))
        )
    } catch (e) {
        console.log({ e });
    }
    const fulFilleds = sample.filter(({ status }) => status === 'fulfilled');
    bucket = uniq(bucket.concat(fulFilleds))
    if (bucket.length < size) {
        bucket = await fetchProjectNames(projectName, size, bucket);
    }
    return Promise.resolve(bucket);
}

const run = async (projectName) => {
    let bucket = [];
    const results = await fetchProjectNames(projectName, SIZE, bucket)
    console.log({ results });
}


run('Project_Awosome');