require('dotenv').config();

const Telegraf = require('telegraf');
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

bot.launch();