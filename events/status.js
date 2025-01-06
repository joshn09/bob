const { ActivityType, PresenceUpdateStatus } = require('discord.js');

module.exports = {
        name: 'ready',
        async execute(client) {

            const updateActivity = () => {

                const gooners = client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0);

 
                client.user.setActivity(`Collected ${gooners} Russians!`, { type: ActivityType.Custom });
            };

            updateActivity();

            setInterval(updateActivity, 300000);

            client.user.setStatus(PresenceUpdateStatus.Idle);

        /*
        client.user.setActivity(`racism ㊙️`, { type: ActivityType.Competing });
        client.user.setStatus(PresenceUpdateStatus.Idle);
        */
    }
}