const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');
const path = require('path');
const opn = require('opn');
const app = express();
const PORT = 3000;
const TOKEN = '6554951276:AAENuyk5g9Z_1R7bc8W0Rm3DqJxRBh4Y6I4';
const chatid = '1779499306';
const bot = new TelegramBot(TOKEN, { polling: false });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index3.html'));
});

// app.js

// ... (інші частини коду)

app.post('/sendproduct', (req, res) => {
    const data = req.body;
    console.log(data);
    bot.sendMessage(chatid, `Name: ${data.name}, Price: ${data.price}`);
    res.sendStatus(200); // Відправте успішний статус відповіді
});

// ... (інші частини коду)

app.listen(PORT, () => {
    console.log(`Server is running at: ${PORT}`);
    opn(`http://localhost:${PORT}`);
});



