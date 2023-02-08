const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const pageTemplate = require('./src/page-template')

const inquirer = require('inquirer');
const fs = require('fs');

const managers = [];
const engineers = [];
const interns = [];

const generateEngineer = () => 

    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'what is engineer \'s name?'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'what is engineer \'s ID?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'what is engineer \'s email?'
        },
        {
            type: 'input',
            name: 'engineerGitHub',
            message: 'what is engineer \'s GitHub username?'
        },
    ])
    .then((answers) => {
        const engineer = new Engineer(answers.engineerName,answers.engineerId,answers.engineerEmail,answers.engineerGitHub);

        engineers.push(engineer);
        
        selectMembers();
    }
    )

const generateIntern = () => 
    inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'what is intern \'s name?'
            },
            {
                type: 'input',
                name: 'internId',
                message: 'what is intern \'s ID?'
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'what is intern \'s email?'
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'what is inter \'s school?'
            },
        ])
        .then((answers) => {
            const intern = new Intern(answers.internName,answers.internId,answers.internEmail,answers.internSchool);

            console.log(interns);

            interns.push(intern);

            selectMembers();
        })
    


const selectMembers = () => {

    inquirer.prompt([
        {
            type: 'list',
            name: 'engineerOrIntern',
            message: 'Which type of team member would you like to add?',
            choices: ['Engineer', 'Intern','I don\'t want to add any more member'],
        }
    ]
    )
    .then((answer) => {
        
        const engineerorIntern = answer.engineerOrIntern;
        
        if (engineerorIntern==='Engineer'){

            generateEngineer();

        }else if (engineerorIntern==='Intern'){

            generateIntern();

        }else{
            
            const htmlPageContent = pageTemplate(managers,engineers,interns);

            fs.writeFile('index.html',htmlPageContent, (err) =>
                err ? console.log(err) : console.log('Sucessfully created index.html!')) 
        }
    }) 
}


inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message:'What is team manager\'s name',
        },
        {
            type: 'input',
            name: 'managerId',
            message:'What is team manager\'s id',
        },
        {
            type:'input',
            name: 'managerEmail',
            message:'What is team manager\'s email'
        },
        {
            type:'input',
            name: 'managerOfficeNumber',
            message:'What is team manager\'s office number'
        }
    ])
    .then((answers) =>{
        
        const manager = new Manager(answers.managerName,answers.managerId,answers.managerEmail,answers.managerOfficeNumber);

        managers.push(manager);

        selectMembers();
    })
    