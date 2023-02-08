function pageTemplate(managers,engineers,interns) {

    const printManagers= () => 
            `
            <div class = "member">
                <div class = "member-header">
                    <h1>${managers[0].getName()}</h1>
                    <h1>${managers[0].getRole()}</h1>
                </div>

                <div class = "member-infor-container">
                    <div class = "member-info">
                        <p>ID: ${managers[0].getId()}</p>
                        <p>Email: <a href = "mailto: ${managers[0].getEmail()}">${managers[0].getEmail()}</a></p>
                        <p>Office number: ${managers[0].getOfficeNumber()}</p>
                    </div>
                </div>
            </div>
            `;

    const printEngineers = (engineers) => {

        var printEngineers = ``;

        engineers.forEach(element => {

            const engineer = 
            `
            <div class = "member">
                <div class = "member-header">
                    <h1>${element.getName()}</h1>
                    <h1>${element.getRole()}</h1>
                </div>    

                <div class = "member-infor-container">
                    <div class = "member-info">
                        <p>ID: ${element.getId()}</p>
                        <p>Email: <a href = "mailto: ${element.getEmail()}">${element.getEmail()}</a></p>
                        <p>GitHub: <a href = "https://github.com/${element.getGithub()}" target = "_blank">${element.getGithub()}</a></p>
                    </div>
                </div>
            </div>
            `;
            
            printEngineers = printEngineers.concat(engineer);
            
        }
        );
        
        return printEngineers;
    }

    const printInterns = (interns) => {

        var printInterns = ``;

        interns.forEach(element => {
            
            const intern =
            `
            <div class = "member">
                <div class = "member-header">
                    <h1>${element.getName()}</h1>
                    <h1>${element.getRole()}</h1>
                </div>  

                <div class = "member-infor-container">
                    <div class = "member-info">
                        <p>ID: ${element.getId()}</p>
                        <p>Email: <a href = "mailto: ${element.getEmail()}">${element.getEmail()}</a></p>
                        <p>School: ${element.getSchool()}</p>
                    </div>
                </div>
            </div>
            `;

            printInterns = printInterns.concat(intern);

        }
        );
        
        return printInterns;
    }
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" type = "text/css" href="./dist/style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Members</title>
    </head>
    <body>
        <header>My Team</header>
        <div id = "member-container">
            ${printManagers()}

            ${printEngineers(engineers)}

            ${printInterns(interns)}
        </div>

    </body>
    </html>
`;
}

module.exports = pageTemplate;

