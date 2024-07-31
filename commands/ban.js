const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("ban user khỏi discord server")
    .addUserOption((option) =>
      option.setName("target").setDescription("user cần ban").setRequired(true),
    )
    .addStringOption((option) =>
      option.setName("reason").setDescription("Lý do ban").setRequired(false),
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
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
      await member.ban({ reason });
      await interaction.reply({
        content: `Đã ban thành công ${targetUser.tag} với lý do: ${reason}`,
        ephemeral: true,
      });
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: "Có lỗi xảy ra khi cố gắng ban người dùng.",
        ephemeral: true,
      });
    }
  },
};