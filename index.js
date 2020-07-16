
const express = require("express");
const app = express();
var cors = require('cors')
app.use(cors());
app.get("/", function(request, response){
    response.send("Hello, my friend, from server! now " + Date.now());
});
console.log("Hello! Server start on port 3000");
app.listen(3000);