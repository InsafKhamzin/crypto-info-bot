require('dotenv').config();

const Telegraf = require('telegraf');
const {textHandler} = require('./src/bot/text-handler');

const bot = new Telegraf(process.env.BOT_TOKEN);

textHandler(bot);

bot.launch();