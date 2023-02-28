const h_server = require("http");
const f_server = require("fs");
let minimists = require('minimist')

let hms_cont = "";
let project_cont = "";
let regis_cont = "";

let you =5000;
let me= 3000;



let args = minimists(process.argv.slice(2));
f_server.readFile("home.html", (errors, home) => {
  if (errors) {
    throw errors;
  }
  else{
    hms_cont = home;
  }
  
});



f_server.readFile("registration.html", (errors, registration) => {
  if (errors) {
    throw errors;
  }
  regis_cont = registration;
});


let varrr="started"


f_server.readFile("project.html", (errors, project) => {
  if (errors) {
    throw errors;
  }
  project_cont = project;
});



h_server
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(project_cont);
        response.end();
        break;
      case "/registration":
        response.write(regis_cont);
        response.end();
        break;
      case "/home":
        response.write(hms_cont);
        response.end();
        break;

      case "/homee":
        response.write(hms_cont);
        response.end();
        break;
      case "/Home":
          response.write(hms_cont);
          response.end();
          break;
      default:
        response.write(hms_cont);
        response.end();
        break;
    }
  }).listen(args.port, () => {
    console.log(" at   http://localhost:" + `${args.port}`)});
