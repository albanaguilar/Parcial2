const express = require('express');
const app = express();

app.use(express.json());

//get
app.get("/", function(req, res) {
    res.send("You are on the homepage");
});


//post
app.post("/post", function(req, res) {
    res.send(`Welcome ${req.body.user}`);
});

//delete
app.delete("/post", function(req, res){
	console.log(req.body);
    res.json({delete: true});
});

//put
app.put("/put/:id", function(req, res) {
    res.send(`Task ${req.params.id} has been upated`);
});

app.listen(5000, () => {
    console.log("server corriendo");
});