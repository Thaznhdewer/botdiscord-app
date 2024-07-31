const { EmbedBuilder } = require("discord.js");
const https = require("https");
const api = "https://anfcity.com/players.json";

module.exports = async (client, message) => {
  if (message.author.bot) return;

  if (message.content === "?med") {
    try {
      const fetch = await import("node-fetch").then((module) => module.default);

      const agent = new https.Agent({
        rejectUnauthorized: false,
      });

      const response = await fetch(api, {
        agent,
      });
      const data = await response.json();

      // Mảng chứa các từ khóa cần kiểm tra
      const keywords = ["Quân Y", "MED", "QLMED", "GĐBS"];

      // Lọc những người chơi có tên bắt đầu bằng bất kỳ từ khóa nào trong mảng
      const medPlayers = data.filter((player) =>
        keywords.some((keyword) => player.name.startsWith(keyword)),
      );

      const totalPlayers = medPlayers.length;

      if (totalPlayers === 0) {
        return message.channel.send(
          'Không tìm thấy người chơi nào có tên bắt đầu bằng "Quân Y" hoặc "MED".',
        );
      }

      let description = "";

      medPlayers.forEach((player) => {
        description += `**Tên:** ${player.name}\n**Ping:** ${player.ping}ms\n**ID:** ${player.id}\n\n`;
      });
      

      const embed = new EmbedBuilder()
        .setTitle(`Tổng MED đang online 🏥: ${totalPlayers}`)
        .setDescription(description)
        .setColor("#00FF00")
        .setTimestamp()
        .addFields({ name: '●▬▬▬▬▬▬๑۩ PAGE ๑۩▬▬▬▬▬▬●', value: 'Trang 1', inline: true })
        .setURL('https://discord.gg/egyRUu8G')
        .setAuthor({ name: 'Ace and Friends', iconURL: 'https://cdn.discordapp.com/attachments/1214088823726800986/1268052561949233162/New_tab_and_2_more_pages_-_Personal_-_Microsoft_Edge_7_30_2024_8_47_29_PM.png?ex=66ab057a&is=66a9b3fa&hm=76fbbdb753cc35ff7c3e9f316bc076b20f467e6013a72c968f1841a2dc07e569&', url: 'https://discord.gg/EPWERgBM' })
        .setThumbnail('https://media.discordapp.net/attachments/1068698576336732201/1166763925455503370/logo_chu_nen_trong_suot.png?ex=66aa5b95&is=66a90a15&hm=a3421a88aea275daff1dc6c68b66365cac5cf163a9b6aec525c3b69f6cff42bb&width=958&height=630&')
        .setFooter({
          text: `Yêu cầu bởi ${message.author.tag}`,
          iconURL: message.author.displayAvatarURL({ dynamic: true }),
        });
        

      message.channel.send({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      message.channel.send("Có lỗi xảy ra khi truy xuất dữ liệu.");
    }
    
  } else  if (message.content === "?ca") {
    try {
      const fetch = await import("node-fetch").then((module) => module.default);

      const agent = new https.Agent({
        rejectUnauthorized: false,
      });

      const response = await fetch(api, {
        agent,
      });
      const data = await response.json();

      // Mảng chứa các từ khóa cần kiểm tra
      const keywords = ["S.W.A.T", "CA", "QLCA", "GĐCA"];

      // Lọc những người chơi có tên bắt đầu bằng bất kỳ từ khóa nào trong mảng
      const medPlayers = data.filter((player) =>
        keywords.some((keyword) => player.name.startsWith(keyword)),
      );

      const totalPlayers = medPlayers.length;

      if (totalPlayers === 0) {
        return message.channel.send(
          'Không tìm thấy người chơi nào có tên bắt đầu bằng "S.W.A.T" hoặc "CA".',
        );
      }

      let description = "";

      medPlayers.forEach((player) => {
        description += `**Tên:** ${player.name}\n**Ping:** ${player.ping}ms\n**ID:** ${player.id}\n\n`;
      });

      const embed = new EmbedBuilder()
        .setTitle(`Tổng Công An đang online 🚓: ${totalPlayers}`)
        .setDescription(description)
        .setColor("#3399FF")
        .setTimestamp()
        .addFields({ name: '●▬▬▬▬▬▬๑۩ PAGE ๑۩▬▬▬▬▬▬●', value:'Trang 1', inline: true })
        .setURL('https://discord.gg/egyRUu8G')
        .setAuthor({ name: 'Ace and Friends', iconURL: 'https://cdn.discordapp.com/attachments/1214088823726800986/1268052561949233162/New_tab_and_2_more_pages_-_Personal_-_Microsoft_Edge_7_30_2024_8_47_29_PM.png?ex=66ab057a&is=66a9b3fa&hm=76fbbdb753cc35ff7c3e9f316bc076b20f467e6013a72c968f1841a2dc07e569&', url: 'https://discord.gg/EPWERgBM' })
        .setThumbnail('https://media.discordapp.net/attachments/1068698576336732201/1166763925455503370/logo_chu_nen_trong_suot.png?ex=66aa5b95&is=66a90a15&hm=a3421a88aea275daff1dc6c68b66365cac5cf163a9b6aec525c3b69f6cff42bb&width=958&height=630&')
        .setFooter({
          text: `Yêu cầu bởi ${message.author.tag}`,
          iconURL: message.author.displayAvatarURL({ dynamic: true }),
        });

      message.channel.send({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      message.channel.send("Có lỗi xảy ra khi truy xuất dữ liệu.");
    }
  } else if (message.content === "?ch") {
    try {
      const fetch = await import("node-fetch").then((module) => module.default);

      const agent = new https.Agent({
        rejectUnauthorized: false,
      });

      const response = await fetch(api, {
        agent,
      });
      const data = await response.json();

      // Mảng chứa các từ khóa cần kiểm tra
      const keywords = ["CH", "QLCH", "GĐCH", "GSCH"];

      // Lọc những người chơi có tên bắt đầu bằng bất kỳ từ khóa nào trong mảng
      const medPlayers = data.filter((player) =>
        keywords.some((keyword) => player.name.startsWith(keyword)),
      );

      const totalPlayers = medPlayers.length;

      if (totalPlayers === 0) {
        return message.channel.send(
          'Không có cứu hộ online.',
        );
      }

      let description = "";

      medPlayers.forEach((player) => {
        description += `**Tên:** ${player.name}\n**Ping:** ${player.ping}ms\n**ID:** ${player.id}\n\n`;
      });

      const embed = new EmbedBuilder()
        .setTitle(`Tổng CH đang online 🛠️: ${totalPlayers}`)
        .setDescription(description)
        .setColor("#FF9A00")
        .setTimestamp()
        .addFields({ name: '●▬▬▬▬▬▬๑۩ PAGE ๑۩▬▬▬▬▬▬●', value:'Trang 1', inline: true })
        .setURL('https://discord.gg/6mQYNF6n')
        .setAuthor({ name: 'Ace and Friends', iconURL: 'https://cdn.discordapp.com/attachments/1214088823726800986/1268052561949233162/New_tab_and_2_more_pages_-_Personal_-_Microsoft_Edge_7_30_2024_8_47_29_PM.png?ex=66ab057a&is=66a9b3fa&hm=76fbbdb753cc35ff7c3e9f316bc076b20f467e6013a72c968f1841a2dc07e569&', url: 'https://discord.gg/EPWERgBM' })
        .setThumbnail('https://media.discordapp.net/attachments/1068698576336732201/1166763925455503370/logo_chu_nen_trong_suot.png?ex=66aa5b95&is=66a90a15&hm=a3421a88aea275daff1dc6c68b66365cac5cf163a9b6aec525c3b69f6cff42bb&width=958&height=630&')
        .setFooter({
          text: `Yêu cầu bởi ${message.author.tag}`,
          iconURL: message.author.displayAvatarURL({ dynamic: true }),
        });
        

      message.channel.send({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      message.channel.send("Có lỗi xảy ra khi truy xuất dữ liệu.");
    }
    
  } 
};
