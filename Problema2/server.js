const express = require('express');
const app = express();

var PORT = process.env.PORT || 5000;

app.get('/', function (req, res) {
    res.send('You are on the homepage');
  });

  app.post("/post", function(req, res) {
    res.json({user: "Alban",password: "Vainilla"});
    res.send(`Welcome ${user}`);
});

app.listen(PORT, function(){
    console.log("Server running on port: ", PORT);
    
})
