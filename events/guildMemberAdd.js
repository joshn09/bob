const { EmbedBuilder, Embed } = require('discord.js')
const Guild = require('../models/guild')

module.exports = {
    name: 'guildMemberAdd',
    
    async execute(gooners) {
        const GuildDb = await Guild.findOne({where: {id: gooners.guild.id}})

            if(GuildDb.welcomeRoleId) {
            const welcomeRole = await gooners.guild.roles.fetch(GuildDb.welcomeRoleId);
            await gooners.roles.add(welcomeRole)
            }


                if(GuildDb.welcomeChannelId) {
                const welcomeChannel = await gooners.guild.channels.fetch(GuildDb.welcomeChannelId);

                    const embedReplyWelcomeChannel = new EmbedBuilder()
                    .setTitle('Bob welcome! ')
                    .setDescription(`Welcome to Bob goon server ${gooners.user}`)
                    .setColor(0x4b0082)
                    .setImage('https://i.ytimg.com/vi/Kjlqxvb2jxc/maxresdefault.jpg')

                        welcomeChannel.send(`${gooners.user}`);
                        welcomeChannel.send({ embeds: [embedReplyWelcomeChannel]});
                }
    }
}