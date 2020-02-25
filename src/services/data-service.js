const { readS3, writeS3 } = require('./aws-s3-service');
const { getAllCurrencies } = require('./cmc-service');

const getData = async () => {
    try {
        let data = await readS3();
        if (data) {
            let now = new Date();
            let lastUpdated = new Date(data.status.timestamp);
            let timeSinceLastUpdate = (now - lastUpdated) / 60000;

            if (timeSinceLastUpdate > process.env.MAX_UPDATE_TIME) {
                data = await getAllCurrencies();
                await writeS3(data);
            }
        } else {
            data = await getAllCurrencies();
        }
        return data;
    } catch (error) {
        console.log("get Data error:", error);
        throw new Error();
    }
};

module.exports.getByAnyIdentifier = async (identifier) => {
    const { data } = await getData();
    identifier = identifier.toLowerCase();

    const item = data.find(({ name, symbol, slug }) =>
        name.toLowerCase() === identifier ||
        symbol.toLowerCase() === identifier ||
        slug.toLowerCase() === identifier);

    return item;
}

module.exports.getTop = async (top) =>{
    const { data } = await getData();
    return data.slice(0,top);
};
