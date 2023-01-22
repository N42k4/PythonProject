const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const dotenv = require('dotenv');
const test = require('./test');

dotenv.config();

const pass = ["***รหัสคือ 74250***", "***รหัสคือ 57603***", "***รหัสคือ 11006***", "***รหัสคือ 14485***", "***รหัสคือ 66101***", "***รหัสคือ 53867***", "***รหัสคือ 30491***", "***รหัสคือ 20415***", "***รหัสคือ 86348***", "***รหัสคือ 16159***"]
const keypass = ["***กุญแจเก่า***", "***กุญแจเหล็ก***", "***กุญแจเงิน***", "***กุญแจทอง***"]
const menu = ["**เนื้อย่าง**", "***ซุปกระดูกมังกร***", "*ยำหัวใจเหล็ก*", "***ข้าวคลุกสมองภูติ***","**บะหมี่ใจหมา**","เนื้อยุงลายทอด","**ยำปลาดี่หนีตีกะหรี่ยามเที่ยงคืน**","ตุ๋นไส้แม่งมุม"]

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'pass') {
    await interaction.reply('Pass is '[getRandomInt(1000) * 9999]);
  }

  if (interaction.commandName === 'keypass') {
    await interaction.reply(keypass[Math.floor(Math.random() * keypass.length)]);
  }

  if (interaction.commandName === 'menu') {
    await interaction.reply(menu[Math.floor(Math.random() * menu.length)]);
  }
});

client.login(process.env.TOKEN);