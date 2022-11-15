//generate index.html and html for each position/role

function buildHtml(team) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css"></link>
    <title>team-portfolio-generator</title>
    </head>
    <body>
    
    <div class="jumbotron col-12">
        <h1 class ="font-style">MY TEAM</h1>
    </div>

    <div class = "employee col-12 col-md-4">
        ${team.map((teamMember) => {
          let specialAttribute;
          if (teamMember.getRole() === "Manager")
            specialAttribute = teamMember.getOffice();
          if (teamMember.getRole() === "Engineer")
            specialAttribute = teamMember.getGithub();
          if (teamMember.getRole() === "Intern")
            specialAttribute = teamMember.getSchool();
            return`
            <div class="card h-100 m-3 w-100">
            <div class = "card-body text-bg-info text-center">
              <p class = "card-title">${teamMember}
              </p> 
            </div>
            `
        })}
</body>
</html>
`;
}

module.exports = buildHtml;
