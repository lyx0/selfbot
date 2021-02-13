const { ChatClient } = require("dank-twitch-irc");
const cron = require('node-cron');
require('dotenv').config();

const client = new ChatClient({
    username: process.env.TWITCH_USER,
    password: process.env.TWITCH_PASSWORD,
    rateLimits: 'default',
    ignoreUnhandledPromiseRejections: 'true',
});

client.on("ready", () => {
    console.log("Successfully connected to chat")
    client.say('nouryxd', 'henlo')
});

client.on("close", (error) => {
  if (error != null) {
    console.error("Client closed due to error", error);
  }
});


// Sends a message in every 5 minutes in my channel to check if it's running.
cron.schedule('34 * * * *', () => {
    client.say('teischente', '+enterdungeon');
});


// See below for more events

client.connect();
client.join("nouryxd");
client.join("teischente");