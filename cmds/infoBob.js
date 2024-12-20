const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()
            .setName('info')
            .setDescription('info about bob!'),

                async execute(interaction) {
                    // await
                    const embed = new EmbedBuilder()
                .setTitle('Information about Bob')
                .setURL('https://www.youtube.com/watch?v=HdVg-2jn2OU')
                .setAuthor({ name: 'The Russian Bot Developers', iconURL: 'https://media.discordapp.net/attachments/1315281543878541376/1315359708282097704/ee95e117b41fb64ba50bd3df393e0620.jpg?ex=67571fb0&is=6755ce30&hm=ec7e496a984a68c69e3dc44c502cb4b3e31d20942e4da00441fcb7f4ae7a3d93&=&format=webp&width=571&height=700', url: 'https://discord.gg/rossiyskaya' })
                .setDescription('Bob is a multipurpose Discord bot designed to simplify administrative tasks, with a primary focus on automating medal and role assignments. Efficient and user-friendly, Bob ensures accurate and timely management of achievements and permissions in your server. Let Bob handle the tedious work so you can focus on building your community!')
                .setColor(0xc89f18)
                .setTimestamp()
                    .addFields(
                        { 
                            name: 'Bobs fathers', value: ' <@670639863627907072>, <@690525877544419339> & <@1166931786144677939> ', inline: true 
                        }, 
                        {
                            name: 'Bobs uncles', value: ' <@1221845996384948355>, <@381483056470687744> & <@205215194454949889> ', inline: true 
                        }
                    )
              
                        .setThumbnail('https://media.discordapp.net/attachments/1315281543878541376/1317471086123814972/2024_12_08_0oc_Kleki.png?ex=675ece10&is=675d7c90&hm=a50f5af5033a18f96c7fd0088349134cdb367e5a39b3402b667e645dc2cc339f&=&format=webp&quality=lossless&width=394&height=525')
                        
                

                await interaction.reply( { embeds: [embed] });
                }
}


// The Old Embed for Bob 1.0.0 OG

/* client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === 'embed') {
        const embed = new EmbedBuilder()
                .setTitle('Information about Bob')
                .setURL('https://www.youtube.com/watch?v=HdVg-2jn2OU')
                .setAuthor({ name: 'The Russian Bot Developers', iconURL: 'https://media.discordapp.net/attachments/1315281543878541376/1315359708282097704/ee95e117b41fb64ba50bd3df393e0620.jpg?ex=67571fb0&is=6755ce30&hm=ec7e496a984a68c69e3dc44c502cb4b3e31d20942e4da00441fcb7f4ae7a3d93&=&format=webp&width=571&height=700', url: 'https://discord.gg/rossiyskaya' })
                .setDescription('Bob is a multipurpose Discord bot designed to simplify administrative tasks, with a primary focus on automating medal and role assignments. Efficient and user-friendly, Bob ensures accurate and timely management of achievements and permissions in your server. Let Bob handle the tedious work so you can focus on building your community!')
                .setColor(0xc89f18)
                .setTimestamp()
                    .addFields(
                        { 
                            name: 'Bobs fathers', value: ' <@670639863627907072>, <@690525877544419339> & <@1166931786144677939> ', inline: true 
                        }, 
                        {
                            name: 'Bobs uncles', value: ' <@1221845996384948355>, <@381483056470687744> & <@205215194454949889> ', inline: true 
                        }
                    )
              
                        .setThumbnail('https://media.discordapp.net/attachments/1315292407860039830/1315310760750219314/2024_12_08_0oc_Kleki.png?ex=6756f21a&is=6755a09a&hm=4f1b2801e9206dd7c16cf663f8584fa85a046ce94db71dbb684bf77ae165eddd&=&format=webp&quality=lossless')
                        
                

        interaction.reply( { embeds: [embed] });
    }
});*/