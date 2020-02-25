require('dotenv').config();

const Telegraf = require('telegraf');
const {textHandler} = require('./src/bot/text-handler');
const {commandHandler} = require('./src/bot/command-handler');

const bot = new Telegraf(process.env.BOT_TOKEN);

commandHandler(bot);
textHandler(bot);

bot.launch();