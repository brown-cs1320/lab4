const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(`receiving requests for ${req.url}`);
    next();
});
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


app.get('/madlibs', (req, res) => res.sendFile('views/madlibs.html' , {root: __dirname}));

app.listen(port, () => console.log(`Madlibs server listening on http://localhost:${port}`));