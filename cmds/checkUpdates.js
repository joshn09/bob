const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()
            .setName('checkupdates')
            .setDescription('updates made to bob!'),

                
                async execute(interaction) {

                    const updateEmbd = new EmbedBuilder()

                        .setTitle('Bob updates redux!')
                        .setDescription('Let developers fully access creating/updating commands, events, features to bob!\n-# Added: 12/10/2024 \nDevelopers can now fully automatically add/update users to the sheet automatically!\n-# Added: 12/13/2024')
                        .setColor(0x000f89)

                        .setAuthor({name: 'Bob Developers', iconURL: 'https://cdn.discordapp.com/attachments/1315911289905873007/1317059557004021790/qupvwt1550828488-296410940-removebg-preview.png?ex=675d4ecc&is=675bfd4c&hm=28424807a330bd7391cee59027308cc960e127d8a63e614c3c73991c2767a3cd&'})
                        .setFooter({text: 'pls fund us germ <3'})
                        .setThumbnail('https://cdn.discordapp.com/attachments/1315911289905873007/1315911875124527124/maxwell-cat.gif?ex=675d166f&is=675bc4ef&hm=98bf417ee6e0fbaac30efd1412cce2b88af04d94128a3e2469a343ce960ea018&')
                        

                            .addFields(
                                {name: 'NW community!', value: '[Imperatorskaya Armiya](https://www.roblox.com/communities/7528791/Imp-ratorskaya-Armiya#!/about)'},
                            )

                            await interaction.reply({embeds: [updateEmbd]})
                }   
}
