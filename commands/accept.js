const Discord = require('discord.js');
const utils = require('../utils.js');

exports.run = (client, message, args) => {
  if (message.guild.id === '461973057247117343' && message.author.id === '197340056053219329') {
    if (args.length < 2) {
      let embed = new Discord.RichEmbed()
        .setColor([54, 57, 64])
        .setAuthor("Accept use")
        .setDescription("__**Use:**__ ds!accept <owner_id> <bot_id>")
      message.channel.send(embed);
    } else {
      let owner = args[0];
      let bot = args[1];
      client.users.get(owner).send(`Congratulations:tada:, your bot <@${bot}> was approved!\n\n`
                                   + `If you need, test your bot at <#461973057247117345>!\nSpam anything at <#471615619016425503>(Don't actually spam please)!`
                                   + `\nAnd advertise it at <#472539653551947787>!`);
      message.channel.send(
        new Discord.RichEmbed().setColor([54, 57, 64]).setAuthor("Bot approved")
        .setDescription(`Bot: <@${bot}>\nOwner: <@${owner}>`)
        .setTimestamp());
      try {
        client.guilds.get('461973057247117343').members.get(owner).add('471583310758412298');
      } catch (e) {
        utils.error(client, e, message.author.username)
      } finally {}
    }
  }
}
