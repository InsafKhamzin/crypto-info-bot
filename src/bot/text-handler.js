const { getData } = require("../services/data-service");


module.exports.textHandler = bot => {
    bot.on('text', async (ctx) => {
        try {
            const msg = ctx.message.text.toLowerCase();

            const {data} = await getData();

            const item = data.find(({name, symbol, slug}) =>
                name.toLowerCase() === msg ||
                symbol.toLowerCase() === msg ||
                slug.toLowerCase() === msg);

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
    return `<b>${name} (${symbol})</b>\n`+
    `<b>Price</b>: $${Math.floor(quote.USD.price * 10000) / 10000}\n` +
    `<b>Change 24h</b>: ${Math.floor(quote.USD.percent_change_24h * 100) / 100}%\n` +
    `<b>Market Cap</b>: $${Math.floor(quote.USD.market_cap * 100) / 100}\n` +
    `<a href="${logo}">&#160</a>`;
}
