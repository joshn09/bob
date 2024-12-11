
// CONNECTED TO OUR WELCOME-CHANNEL COMMAND !!!!

const { SlashCommandBuilder, PermissionFlagsBits, ChannelType } = require('discord.js')
const Guild = require('../models/guild')

module.exports = {

    data: new SlashCommandBuilder()
            .setName('set-channel')
            .setDescription('Set the welcome channel for the server!')

                .addChannelOption(option => 
                    option .setName('channel')
                            .setDescription('Channel to sent welcome messages.')
                            .addChannelTypes(ChannelType.GuildText)
                )
                    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

                async execute(interaction) {
                    await interaction.deferReply({ephemeral: true})
                    const { options, member } = interaction

                            if(interaction.guild.ownerId !== member.id) return interaction.editReply('Only server admins can run this command!');

                            const channel = await options.getChannel('channel')
                            const [ guild, created ] = await Guild.findOrCreate({ where: { id: await interaction.guild.id } })

                                if(!channel) await guild.update({ welcomeChannelId: null })
                                else await guild.update({ welcomeChannelId: channel.id })

                                if(!channel) interaction.editReply(`Disabled the welcome message system`)
                               else  interaction.editReply(`Set the channel welcome messages to ${channel}`)
                        }
}
