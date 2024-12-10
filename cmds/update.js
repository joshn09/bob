const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()
            .setName('updates')
            .setDescription('shows updates made to bob!'),

                async execute(interaction) {
                    const updateEmbed = new EmbedBuilder()
                        .setTitle('Bob updates!')
                        .setAuthor({name: 'Fathers', iconURL: 'https://cdn.discordapp.com/attachments/1315671267403366461/1315671572601765928/Bob-icon.png?ex=6758eae2&is=67579962&hm=7aff6a669fae9c68c889d85aed9b30db3135638b92e4cb35279e3ef97217a745&', url: 'https://cdn.discordapp.com/attachments/1315671267403366461/1315671572601765928/Bob-icon.png?ex=6758eae2&is=67579962&hm=7aff6a669fae9c68c889d85aed9b30db3135638b92e4cb35279e3ef97217a745&' })
                        .setDescription('Let Developers make commands, events, etc. \n-# Added: 12/10/2024 \n-# Updated: 12/10/2024')
                        .setThumbnail('https://cdn.discordapp.com/attachments/1315911289905873007/1315911318133543044/Maxwell-Cat-Cheerful-Interaction-Friendly-Vibe-PNG.png?ex=6759216a&is=6757cfea&hm=da99bb67193f5c6fe577e3c4def046e48d00e1fef7f64e0e83e77dfbf18e49e5&')
                        .setFooter({text: 'Bob is loyal to the Emperor!', iconURL: 'https://cdn.discordapp.com/attachments/1315911289905873007/1315911875124527124/maxwell-cat.gif?ex=675921ef&is=6757d06f&hm=2c8bf977415e995aa6fe5c6940da88ec5987006e7365c567f2b0d64658de3cc9&'})
                        .setColor(0x4b0082)
                            await interaction.reply( {embeds: [updateEmbed]} );
                }
}
