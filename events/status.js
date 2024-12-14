const { ActivityType, PresenceUpdateStatus } = require('discord.js');

module.exports = {
    name: 'ready',

    async execute(client) {     
        client.user.setActivity('racism', { type: ActivityType.Competing });
        client.user.setStatus(PresenceUpdateStatus.Idle);
    }
}