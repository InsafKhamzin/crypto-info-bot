require('dotenv').config();

const Telegraf = require('telegraf');
const express = require('express');
const serverless = require('serverless-http');

const {textHandler} = require('./src/bot/text-handler');
const {commandHandler} = require('./src/bot/command-handler');
const {inlineHandler} = require('./src/bot/inline-handler');

const bot = new Telegraf(process.env.BOT_TOKEN);

//Inline messages handler
inlineHandler(bot);

//Commands handler
commandHandler(bot);

//Text messages handler
textHandler(bot);

//bot.launch();
// bot.startWebhook(`/bot${process.env.BOT_TOKEN}`);

const app = express();

const secretPath = `/bot${process.env.BOT_TOKEN}`;

app.use(bot.webhookCallback(secretPath));
bot.telegram.setWebhook(`${process.env.HOOK_URL}${secretPath}`);

app.get('/', (req, res)=>{
    res.send('Bot is running...');
});


module.exports.start = serverless(app);