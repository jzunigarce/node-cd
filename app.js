const express = require("express");
const app = express();
const os = require("os");

const PORT = 3000;

app.get('/', (req, res) => {
	res.send(`<h1>Hola mundo ${os.hostname()}</h1>`);
})

app.listen(PORT, () => {
	console.log(`Listen in port ${PORT}`);
})
