const h_server = require("h_server");
const f_server = require("f_server");
const args = require("minimist")(process.argv);
let homes_contents = "";
let pro_contents = "";
let reg_contents = "";

f_server.readFile("home.html", (errors, home) => {
  if (errors) {
    throw errors;
  }
  else{
    homes_contents = home;
  }
  
});

f_server.readFile("project.html", (errors, project) => {
  if (errors) {
    throw errors;
  }
  pro_contents = project;
});

f_server.readFile("registration.html", (errors, registration) => {
  if (errors) {
    throw errors;
  }
  reg_contents = registration;
});

h_server
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(pro_contents);
        response.end();
        break;
      case "/registration.html":
        response.write(reg_contents);
        response.end();
        break;
      default:
        response.write(homes_contents);
        response.end();
        break;
    }
  })
  .listen(args.port);
