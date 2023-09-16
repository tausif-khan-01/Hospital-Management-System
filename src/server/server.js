//requiring necessary modules
const express = require("express");
const path = require("path");
const hbs = require("hbs");
const fs = require("fs");
const url = require("url");

//connection to database
require("../db/connection");

//express setup
const app = express();
const port = process.env.PORT || 8000;

//requiring  costum modules
const patientRoutes = require("../routers/patientRoutes");
const doctorRoutes = require("../routers/DoctorRoutes");
const receptionistRutes = require("../routers/receptionistRutes");

//necessary directories path
const viewPath = path.join(__dirname, "../../templates/views");
const partialsPath = path.join(__dirname, "../../templates/partials");
//const templatePath = path.join(__dirname, "../../templates");
const publicPath = path.join(__dirname, "../../public");

//view engine setup
app.set("view engine", "hbs");
//setting up costum views directories
app.set("views", viewPath);
//setting up partials
hbs.registerPartials(partialsPath);

//setting up static file submit using public directories
app.use(express.static(publicPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router setup
app.use(patientRoutes);
app.use(doctorRoutes);
app.use(receptionistRutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/html/index.html"));
});




//? Admin +++++++++++++++++++++++++++++++++++++++++++++++++++++++
app.get("/admin", (req, res) => {

});

app.get("/admin/dashboard", (req, res) => {
  res.render("admin-dashboard",{
    user : "admin",
    url: "/admin-dashboard/create",
    title: "Recent Activity",
  });
});

app.get("/admin/doctor", (req, res) => {
  res.render("doctor-dashboard", {
     user : "admin",
    url: "/doctor-dashboard/create",
    title: "Docotrs List",

  });
});

app.get("/admin/receptionist", (req, res) => {
  res.render("receptionist-dashboard" ,{
     user : "admin",
    url: "/receptionist-dashboard/create",
    title: "Receptionist List",
  });
});

app.get("/admin/patient", (req, res) => {
  res.render("patient-dashboard", {
     user : "admin",
    url: "/patient-dashboard/create",
    title: "Patients List",
  });
});
app.get("/admin/apoinments", (req, res) => {
  res.render("apoinments", {
     user : "admin",
    url: "/apoinments/create",
    title: "Appoinments List",
  });
});

app.get("*/create", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/createDoctor.html"));
});




app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/html/404.html"));
});



//server
app.listen(port, () =>
  console.log(`server is online at http://localhost:${port}/`)
);
