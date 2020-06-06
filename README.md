# CryptoInfo Bot
Telegram bot that provides stock info about any cryptocurrency

# Startup
To start bot locally:
npm install
npm run local

# Environment
* Bot uses [telegraf](https://github.com/telegraf/telegraf) - js library for Telegram API
* [Coinmarketcap API](https://coinmarketcap.com/api/) is used for getting cryptocurrency data
* Bot is deployed on AWS Lamda using [serverless.js](https://www.serverless.com/)
* It uses AWS S3 to cache data from Coinmarketcap

# What's bot can do?
* Send info (price, 24h change, market cap) for provided cryto
* Show top 10 / top 50 cryptos
* Bot can be used in group chats
