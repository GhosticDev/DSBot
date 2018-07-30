const Discord = require('discord.js');
const config = require("./config.json");

const client = new Discord.Client();
client.prefix = config.prefix;

client.on("ready", () => {
	console.log("Bot on with " + client.users.size + " users and " + client.guilds.size + " servers!");
	client.user.setActivity(`${client.users.size} users!`, {type: 'Watching'});
});

client.login(process.env.TOKEN);
