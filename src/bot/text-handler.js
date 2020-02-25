const { getByAnyIdentifier } = require("../services/data-service");
const {getEmoji} = require('../utils/message-util');


module.exports.textHandler = bot => {
    bot.on('text', async (ctx) => {
        try {
            const msg = ctx.message.text;

            const item = await getByAnyIdentifier(msg);

            if(item){
                ctx.replyWithHTML(formatMessage(item));
            }else{
                ctx.reply("Can't find your crypto");
            }

        } catch (error) {
            console.log(error);
            ctx.reply('Sorry, I can\'t process your request right now...');
        }
    });
};

const formatMessage = ({id, name, symbol, quote}) =>{
    const logo = `https://s2.coinmarketcap.com/static/img/coins/128x128/${id}.png`;

    const {price, percent_change_24h: h24, market_cap} = quote.USD;

    return `<b>${name} (${symbol})</b>\n`+
    `<b>Price</b>: $${Math.floor(price * 10000) / 10000}\n` +
    `<b>Change 24h</b>: ${Math.floor(h24 * 100) / 100}% ${getEmoji(h24)}\n` +
    `<b>Market Cap</b>: $${Math.floor(market_cap * 100) / 100}\n` +
    `<a href="${logo}">&#160</a>`;
}
