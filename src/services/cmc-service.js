const rp = require('request-promise');

const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
        'start': '1',
        'limit': '500',
        'convert': 'USD'
    },
    headers: {
        'X-CMC_PRO_API_KEY': process.env.API_KEY
    },
    json: true,
    gzip: true
};

module.exports.getAllCurrencies = async () => {
    try {
        let response = await rp(requestOptions);
        return response;
    }catch (err) {
        console.log("CMC getAllCurrencies error:", err);
        throw new Error();
    }
}