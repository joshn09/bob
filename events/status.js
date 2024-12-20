const { ActivityType, PresenceUpdateStatus } = require('discord.js');

module.exports = {
        name: 'ready',
        async execute(client) {

            const updateActivity = () => {

                const totalMembers = client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0);

 
                client.user.setActivity(`Guiding ${totalMembers} Russians!`, { type: ActivityType.Custom });
            };

            updateActivity();

            setInterval(updateActivity, 300000);

        /*
        client.user.setActivity(`racism ㊙️`, { type: ActivityType.Competing });
        client.user.setStatus(PresenceUpdateStatus.Idle);
        */
    }
}