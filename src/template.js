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
    
      <h1 class ="font-style text-center">MY TEAM</h1>

    
    <div class = "employee row justify-content-center">
        ${team.map((teamMember) => {
          let specialAttribute;
          if (teamMember.getRole() === "Manager")
            specialAttribute = teamMember.getOfficeNumber();
          if (teamMember.getRole() === "Engineer")
            specialAttribute = teamMember.getGitHub();
          if (teamMember.getRole() === "Intern")
            specialAttribute = teamMember.getSchool();
          return `
            <div class="card col-12 col-md-3 m-auto">  
              <div class="card-header bg-primary">
                <h5>${teamMember.name}</h5>
                <p>${teamMember.getRole()}</p>
              </div>

              <div class="card-body text-bg-info text-center py-2">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">${teamMember.id}</li>
                  <li class="list-group-item">${teamMember.email}</li>
                  <li class="list-group-item">${
                    teamMember.specialAttribute
                  }</li>
                </ul>
              </div>
            </div>
            `;
        })}
</body>
</html>
`;
}

module.exports = buildHtml;
