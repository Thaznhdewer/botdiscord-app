const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("kick user khỏi discord server")
    .addUserOption((option) =>
      option.setName("target").setDescription("user cần kick").setRequired(true),
    )
    .addStringOption((option) =>
      option.setName("reason").setDescription("Lý do kick").setRequired(false),
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
  async execute(interaction) {
    const targetUser = interaction.options.getUser("target");
    const reason = interaction.options.getString("reason") || "Không có lý do";

    const member = await interaction.guild.members.fetch(targetUser.id);
    if (!member) {
      return interaction.reply({
        content: "Không tìm thấy người dùng trong máy chủ.",
        ephemeral: true,
      });
    }

    try {
      await member.kick({ reason });
      await interaction.reply({
        content: `Đã kick thành công ${targetUser.tag} với lý do: ${reason}`,
        ephemeral: true,
      });
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "Có lỗi xảy ra khi cố gắng kick người dùng.",
        ephemeral: true,
      });
    }
  },
};