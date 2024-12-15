module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {  
            // rename bob - use for special occasions!
            client.user.setUsername('bob');   

            console.log(`${client.user.username} is succesfully awake!`);
    }
}