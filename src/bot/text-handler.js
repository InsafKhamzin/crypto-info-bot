const { getByAnyIdentifier } = require("../services/data-service");
const { getCryptoDesc } = require('../utils/message-util');


module.exports.textHandler = bot => {
    bot.on('text', async (ctx) => {
        try {
            const msg = ctx.message.text;

            const item = await getByAnyIdentifier(msg);

            if(item){
                ctx.replyWithHTML(getCryptoDesc(item));
            }else{
                ctx.reply("Can't find your crypto");
            }

        } catch (error) {
            console.log(error);
            ctx.reply('Sorry, I can\'t process your request right now...');
        }
    });
};