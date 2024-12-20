const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    // permission that user MUST have to use this command!
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)

    .setName('pledge')
    .setDescription('Pledge!')

      .addSubcommand(subcommand => 
        subcommand 
        .setName('emperor')
        .setDescription('what is the will!')
      )
        .addSubcommand(subcommand => 
          subcommand 
          .setName('spacemarine')
          .setDescription('marine pledge!')
        ),
    
            async execute(interaction) {
              const cmds = interaction.options.getSubcommand();


                switch(cmds){
                  case 'spacemarine' :
                  await interaction.reply('My honour is my life. My duty is my fate. My fear is to fail. My salvation is my reward. My craft is death. My pledge is eternal service.');

                    case 'emperor':
                    await interaction.reply('All hail germ!');


                }

            }

}