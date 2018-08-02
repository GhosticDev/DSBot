const Discord = require('discord.js');

exports.run = (client, message, arg) => {
  if (message.guild.id === '461973057247117343') {
    let user = message.author;
    let embed = new Discord.RichEmbed()
      .setAuthor("New Role Added")
      .setDescription("You received your **JS Helper** role!\nNow you will get notified when someone\nmention this role in any channel!")
      .setTimestamp();
    message.channel.send(embed);
    try {
      client.guilds.get('461973057247117343').members.get(user.id).addRole('471583310758412298');
    } catch (e) {
      utils.error(client, e, message.author.username);
    } finally {}
  }
}
