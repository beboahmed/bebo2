const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("608898246726647808")
setInterval(function() {
channel.send(`bebe bebo bebo bebo`);
}, 30)
})

client.login(process.env.BOT_TOKEN);