const { REST, Routes } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const commands = [
  {
    name: 'pass',
    description: 'Replies with password!',
  },
  {
    name: 'keypass',
    description: 'Replies with keys!',
  },
  {
    name: 'menu',
    description: 'Replies with sure!',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.ClientID,process.env.ChannelID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();