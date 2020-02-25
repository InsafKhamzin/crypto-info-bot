const { searchByAnyIdentifier } = require('../services/data-service');
const { getCryptoDesc, getLogoUrl } = require('../utils/message-util');

module.exports.inlineHandler = bot => {
    bot.on('inline_query', async (ctx) => {
        const msg = ctx.inlineQuery.query;
        let result = [];

        if (msg.length >= 3) {

            const items = await searchByAnyIdentifier(msg);
            if (items) {
                items.forEach((element) => {
                    result.push({
                        type: 'article',
                        id: element.id,
                        title: `${element.name} (${element.symbol})`,
                        description: `${element.symbol} - cryptocurrency information`,
                        thumb_url: getLogoUrl(element.id, 64),
                        input_message_content: {
                            message_text: getCryptoDesc(element),
                            parse_mode: 'HTML'
                        }
                    });
                });
            }
        }
        ctx.answerInlineQuery(result);
    });
}
