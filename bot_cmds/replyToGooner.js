const { SlashCommandBuilder } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()
            .setName('goon')
            .setDescription('replies to the user'),

            async execute(interaction) {
                interaction.reply(` Need help? ${interaction.user.username}`);
            }
}
