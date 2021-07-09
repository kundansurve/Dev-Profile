const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 4000;
const developers = require('./developers');

app.use('/api/developers', developers);

app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(port, () => {
    console.log(`Server listening at port: ${port}`)
});