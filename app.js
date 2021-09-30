const express = require('express');
const morgan = require("morgan");
// const layout = require("./views/layout");
const views = require("./views/");


const app = express();
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public/")); //style.css for our homepage
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  console.log('i am working!');
  res.send(views());
  res.status(200);
})

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
