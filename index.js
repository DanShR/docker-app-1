
const express = require("express");
const app = express();
var cors = require('cors')
app.use(cors());
app.get("/", function(request, response){
    response.send("Hello from server! now " + Date.now());
});
console.log("Server start on port 3000");
app.listen(3000);