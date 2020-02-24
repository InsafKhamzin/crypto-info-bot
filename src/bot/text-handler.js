const { getData } = require("../services/data-service");


module.exports.textHandler = bot => {
    bot.on('text', async (ctx) => {
        try {                
            const data = await getData();
            ctx.reply(data.data[0]);
        } catch (error) {
            console.log(error);
            ctx.reply('Sorry, I can\'t process your request right now...');            
        }
    });
};
