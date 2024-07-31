const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Kiểm tra độ trễ (ping) của bot'),
    async execute(interaction) {
        const sent = await interaction.reply({ content: 'Đang kiểm tra...', fetchReply: true });

        const embed = new EmbedBuilder()
            .setTitle('🏓 Pong!')
            .setColor('#33FF33')
            .addFields(
                { name: '⏱️ Thời gian', value: `${sent.createdTimestamp - interaction.createdTimestamp}ms`, inline: true },
                { name: '🔍 Micro', value: `${Math.round(interaction.client.ws.ping)}ms`, inline: true }
            )
            .setFooter({ text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
            .setTimestamp();

        await interaction.editReply({ content: null, embeds: [embed] });
    },
};