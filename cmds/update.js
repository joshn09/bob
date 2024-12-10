const { SlashCommandBuilder } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()
            .setName('updates')
            .setDescription('shows commands available to bob!'),

                async execute(interaction) {
                    // await
                    interaction.reply("### Developers can finally add cmds to Bob. \n-# Added: 12/10/2024\n-# Updated: 12/10/2024");
                }
}
