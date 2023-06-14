const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const path = require('path');
const hbs = require('hbs');


const staticPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

app.set("view engine", "hbs");
app.set("views", viewsPath);

hbs.registerPartials(partialPath);


app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {

    res.render("about");
})


app.get("/about/*", (req, res) => {
    res.render("404",{
        errorMessage: "this about page can't be found...",
    });
})

app.get("/weather", (req, res) => {
    res.render("weather");
})



app.get("*", (req, res) => {
    res.render("404",{
        errorMessage: "page can't be found...",
    });
})

app.listen(port, () => {
    console.log(`listening to the port number ${port}`);
})