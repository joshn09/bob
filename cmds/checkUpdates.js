const { SlashCommandBuilder, EmbedBuilder, Embed, PermissionFlagsBits } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()
            .setName('checkupdates')
            .setDescription('updates made to bob!')

                // permission that user MUST have to use this command!
                .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),

                async execute(interaction) {

                    const updateEmbd = new EmbedBuilder()

                        .setTitle('Bob updates redux!')
                        .setDescription('* Let developers fully organized create/update commands, events, features to bob!\n-# Added: 12/10/2024 \n* Developers can now fully automatically add/update users to the medal sheet automatically!\n-# Added: 12/13/2024 \n* bobGPT - very own built in chatgpt!\n-# Added:12/14/2024')
                        .setColor(0x000f89)

                        .setAuthor({name: 'Bob Developers', iconURL: 'https://cdn.discordapp.com/attachments/1315911289905873007/1318087956111691806/3dgifmaker62340_online-video-cutter.com.gif?ex=6765a9d1&is=67645851&hm=da8c95aed80a50aedd1ba1b2ba841461ed28e01481a9ef59d3abe76d8eac4bb0&'})
                        .setFooter({text: 'pls fund us germ <3'})
                        .setThumbnail('https://cdn.discordapp.com/attachments/1315911289905873007/1319507523283189771/3dgifmaker00013.gif?ex=676636a4&is=6764e524&hm=47f44ce85e8bc9f5d7e3f146d4a80d60a425497df136d3f4e2dcc44c8f89bcba&')
                        

    

                            await interaction.reply({embeds: [updateEmbd]})
                }   
}
