module.exports = {
    name: 'guildMemberAdd',
    async execute(gooners) {
        const welcomeRole = await gooners.guild.roles.cache.find(role => role.name === 'gooners');
        await gooners.roles.add(welcomeRole);

        const welcomeChannel = await gooners.guild.channels.cache.find(channel => channel.name === 'welcome-goons')
        await welcomeChannel.fetch();
        welcomeChannel.send(`### Bob is happy to have you here! ${gooners.user}`);
    }
}