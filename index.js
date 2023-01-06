const express = require('express');
const app = express();
const port = 8081;
app.get("/demo", (req, res) => {
    res.send("Hello World!!!");
})

app.get("/demo1", (req, res) => {
    res.send("Hello sakshi,i am poojan.");
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
