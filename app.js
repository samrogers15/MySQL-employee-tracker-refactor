// make an initial function that says "welcome to the employee program" then the start app functions

const inquirer = require('inquirer');
const questions = require('./view/questions');
const controller = require('./controller/index');

async function appLoad() {
    console.log('\n Welcome to the employee management program. \n')
    const {choice} = await inquirer.prompt(questions);
    handleAnswers(choice);
}

async function startApp() {
    const {choice} = await inquirer.prompt(questions);
    handleAnswers(choice);
}

async function handleAnswers(choice) {
    try {
        if (choice === 'Exit program.') return console.log('\n You have exited the employee management program. Thanks for using! \n');
        await controller[choice]();
        console.log(controller[choice]);
        startApp();
    } catch(err) {
        console.log(err);
        startApp();
    }
}

appLoad();