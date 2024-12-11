const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js')
const Guild = require('../models/guild')

module.exports = {

    data: new SlashCommandBuilder()
            .setName('set-welcome-role')
            .setDescription('Set the welcome role for the server!')

                .addRoleOption(option => 
                    option .setName('role')
                            .setDescription('Role to give new members!')
                )
                    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

                async execute(interaction) {
                    await interaction.deferReply({ephemeral: true});

                    const { options, member } = interaction

                            if(interaction.guild.ownerId !== member.id) return interaction.editReply('Only server admins can run this command!');

                            const role = await options.getRole('role');
                            const [ guild, created ] = await Guild.findOrCreate({ where: { id: await interaction.guild.id } })

                                if(!role) await guild.update({  welcomeRoleId: null });
                                else await guild.update({  welcomeRoleId: role.id });
                                
                                if(!role) return interaction.editReply(`Disabled the welcome role system`)

                                    const embed = new EmbedBuilder()
                                    .setTitle('Set the welcome role to')
                                    .setDescription(`${role}`)
                                    .setColor(0x4b0082)

                                        interaction.editReply({ embeds: [embed]});
                        }
}
