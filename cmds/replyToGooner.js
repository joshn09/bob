const { SlashCommandBuilder } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()
            .setName('goon')
            .setDescription('replies to the user'),

                async execute(interaction) {
                  await interaction.reply(` Need help? ${interaction.user.username}`);
                }
}
