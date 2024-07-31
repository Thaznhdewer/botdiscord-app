const { EmbedBuilder } = require("discord.js");

module.exports = async (client, message) => {
  if (message.author.bot) return;

  if (message.content.startsWith("?avt")) {
    if (!message.mentions.users.size) {
      const embed = new EmbedBuilder()
        .setTitle(`${message.author.username}'s Avatar`)
        .setImage(
          message.author.displayAvatarURL({ dynamic: true, size: 1024 }),
        )
        .setColor("Random");

      return message.channel.send({ embeds: [embed] });
    }

    const avatarList = message.mentions.users.map((user) => {
      const embed = new EmbedBuilder()
        .setTitle(`${user.username}'s Avatar`)
        .setImage(user.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setColor("Random");

      return embed;
    });

    message.channel.send({ embeds: avatarList });
  }else if (message.content.startsWith("?sever")) {
    const exampleEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Some title')
    .setURL('https://discord.js.org/')
    .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
    .setDescription('Some description here')
    .setThumbnail('https://i.imgur.com/AfFp7pu.png')
    .addFields(
      { name: 'Regular field title', value: 'Some value here' },
      { name: '\u200B', value: '\u200B' },
      { name: 'Inline field title', value: 'Some value here', inline: true },
      { name: 'Inline field title', value: 'Some value here', inline: true },
    )
    .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
    .setImage('https://i.imgur.com/AfFp7pu.png')
    .setTimestamp()
    .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
  
   message.channel.send({ embeds: [exampleEmbed] });
  }
};