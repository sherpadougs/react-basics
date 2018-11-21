const path = require('path');

const express = require('express');
const app = express();

// app.use('/', express.static('./public'));

app.get('/bundle.js', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/bundle.js'));
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(4200, console.log('Server listening on port 4200.'));
