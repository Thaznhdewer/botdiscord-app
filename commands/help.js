const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("help để có thể được giúp"),
  async execute(interaction) {
    let string =" "
    string += "Hãy vào sever để được hỗ trợ \n"
    string += "https://discord.gg/k6VY4MBu"
    await interaction.reply(string);
  },
};
