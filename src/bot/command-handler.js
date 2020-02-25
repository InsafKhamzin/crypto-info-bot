const { getTop } = require('../services/data-service');
const { quiz } = require('../services/quiz-service');
const { getEmoji } = require('../utils/message-util');

module.exports.commandHandler = (bot) => {
    //start
    bot.start(ctx => {
        ctx.reply(`Hello, ${ctx.from.first_name}!\nFor more info see /help`);
    })

    //help
    bot.help(ctx => {
        ctx.reply(`Help page`);
    });
    //top10
    bot.command('top10', async ctx => {
        const top10 = await getTop(10);
        ctx.replyWithMarkdown(formatTop(top10));
    });

    bot.command('top50', async ctx => {
        const top10 = await getTop(50);
        ctx.replyWithMarkdown(formatTop(top10));
    });

    bot.command('quiz', async ctx => {
        await quiz(ctx);
    });
};

const formatTop = (items) => {
    let msg = ''
    items.forEach(({ name, quote }, idx) => {
        const { price, percent_change_24h: h24 } = quote.USD;
        msg += `${idx + 1}. _${name}_ : *$${Math.floor(price * 10000) / 10000}* _Change 24h_ : *${h24}%* ${getEmoji(h24)}\n\n`;
    });
    return msg;
}