const Discord = require('discord.js');
const config = require("./config.json");

const client = new Discord.Client();
client.prefix = config.prefix;

client.on("ready", () => {
  console.log("Bot iniciado!\n\nUsers: " + client.users.size + "\nServidores: " + client.guilds.size);
  client.user.setActivity(`${client.users.size} users`, {type: "Watching"});
});

client.on("message", async message => {
  let msg = message.content.toLowerCase();
  if (message.author.bot) return undefined;

  if (message.content.indexOf(client.prefix) !== 0) return;
  const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commands = require(`./commands/${command}.js`);
    commands.run(client, message, args);
  } catch (e) {
    console.log(e);
  } finally {}

});

client.on("guildMemberAdd", async member => {
  client.channels.get('471615619016425503').send(`New member: **${member.user.username}** (${member.guild.name})`);
});

client.on("guildMemberRemove", async member => {
  client.channels.get('471615619016425503').send(`Bye member: **${member.user.username}** (${member.guild.name})`);
});

client.on("guildCreate", async guild => {
  client.channels.get('471615619016425503').send(`New server: **${guild.name}** (Owner: ${guild.owner.user.username})(Members: ${guild.memberCount})`);
});

client.on("guildDelete", async guild => {
  client.channels.get('471615619016425503').send(`Bye server: **${guild.name}**`);
});

client.login(config.token);
