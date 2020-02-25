
module.exports.getEmoji = (change24h) => {
    let emoji = '';

    if(change24h > 0 && change24h <= 0.5){
        emoji += '↗️🙂';
    }else if( change24h > 0.5 && change24h <= 5){
        emoji += '↗️😀';
    }
    else if( change24h > 5 && change24h <= 15){
        emoji += '↗️🤩';
    }
    else if( change24h > 15){
        emoji += '🚀🤑';
    }
    
    else if(change24h < 0 && change24h >= -0.5){
        emoji += '↘️😐';
    }else if( change24h < -0.5 && change24h >= -5){
        emoji += '↘️😕';
    }
    else if( change24h < -5 && change24h >= -15){
        emoji += '↘️☹️';
    }
    else if( change24h < -15){
        emoji += '↘️😰';
    }

    return emoji;
}