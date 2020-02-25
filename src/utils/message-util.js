const getEmoji = (change24h) => {
    let emoji = '';

    if (change24h > 0 && change24h <= 0.5) {
        emoji += '↗️🙂';
    } else if (change24h > 0.5 && change24h <= 5) {
        emoji += '↗️😀';
    }
    else if (change24h > 5 && change24h <= 15) {
        emoji += '↗️🤩';
    }
    else if (change24h > 15) {
        emoji += '🚀🤑';
    }

    else if (change24h < 0 && change24h >= -0.5) {
        emoji += '↘️😐';
    } else if (change24h < -0.5 && change24h >= -5) {
        emoji += '↘️😕';
    }
    else if (change24h < -5 && change24h >= -15) {
        emoji += '↘️☹️';
    }
    else if (change24h < -15) {
        emoji += '↘️😰';
    }

    return emoji;
}

const getLogoUrl = (id, size) => {
    return `https://s2.coinmarketcap.com/static/img/coins/${size}x${size}/${id}.png`;
}

const getCryptoDesc = ({ id, name, symbol, quote }) => {
    const logo = getLogoUrl(id, 128);

    const { price, percent_change_24h: h24, market_cap } = quote.USD;

    return `<b>${name} (${symbol})</b>\n` +
        `<b>Price</b>: $${Math.floor(price * 10000) / 10000}\n` +
        `<b>Change 24h</b>: ${Math.floor(h24 * 100) / 100}% ${getEmoji(h24)}\n` +
        `<b>Market Cap</b>: $${Math.floor(market_cap * 100) / 100}\n` +
        `<a href="${logo}">&#160</a>`;
}


module.exports = {
    getEmoji: getEmoji,
    getCryptoDesc: getCryptoDesc,
    getLogoUrl: getLogoUrl
}