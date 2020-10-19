// const path = require('path');
// const { exec } = require('child_process');
// exec('https://github.com/hakimehmordadi/Nestjs-GraphQL-MongoDB.git', {
//     stdio: [0, 1, 2],
//     cwd: path.resolve(__dirname, '/home/student1/Desktop/sample'),
// })
//
// * Clone my github repository to my local
// const shell = require('shelljs')
// const path = '/home/student1/Desktop/sample'
// shell.cd(path)
// shell.exec('git clone https://github.com/hakimehmordadi/Nestjs-GraphQL-MongoDB.git')
//
// * git status
// const { exec } = require('child_process');
// exec('git status', (error, stdout, stderr) => {
//     if (error) {
//         console.error(`exec error: ${error}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
//     console.error(`stderr: ${stderr}`);
// });
// * Git pull
// const { exec } = require('child_process');
// exec('git pull origin master', (error, stdout, stderr) => {
//     if (error) {
//         console.error(`exec error: ${error}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
//     console.error(`stderr: ${stderr}`);
// });
//
// const simpleGit = require('simple-git')();
// const shell = require('shelljs');
// const simpleGitPromise = require('simple-git/promise')();
// shell.cd('/home/student1/Desktop/sample');
// const repo = 'Nestjs-GraphQL-MongoDB.js';  //Repo name
// const userName = 'hakimehmordadi';
// const password = '6@Sergeart';
// const gitHubUrl = `https://${userName}:${password}@github.com/${userName}/${repo}`;
// simpleGit.addConfig('user.email', 'hakimehmordadi@gmail.com');
// simpleGit.addConfig('user.name', 'hakimehmordadi');
// simpleGitPromise.removeRemote('origin', gitHubUrl);
// simpleGitPromise.addRemote('origin', gitHubUrl);
// simpleGitPromise.add('.')
//     .then(
//         (addSuccess) => {
//             console.log(addSuccess);
//         }, (failedAdd) => {
//             console.log('adding files failed');
//         });
// simpleGitPromise.commit('First commit')
//     .then(
//         (successCommit) => {
//             console.log(successCommit);
//         }, (failed) => {
//             console.log('failed commmit');
//         });
// simpleGitPromise.push('origin', 'master')
//     .then((success) => {
//         console.log('repo successfully pushed');
//     }, (failed) => {
//         console.log('repo push failed');
//     });
//
// * Git push
const { exec } = require('child_process');
exec('git add .');
exec('git config --global user.name "hakimehmordadi"');
exec('git config --global user.password "6@Sergeart"');
exec('git commit -m "First commit"');
exec('git remote rm origin');
exec('git remote add origin https://github.com/hakimehmordadi/Nestjs-GraphQL-MongoDB.git');
exec('git push -u https://github.com/hakimehmordadi/Nestjs-GraphQL-MongoDB.git master', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});
