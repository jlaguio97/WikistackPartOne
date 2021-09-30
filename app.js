const express = require('express');
const morgan = require("morgan");


const app = express();
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  console.log('i am working!');
  res.send("hello world");
  res.status(200);
})

const PORT = 8081;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
