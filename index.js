const Discord = require('discord.js')
const config = require('./config.json')

const client = new Discord.Client({ intents: [ "Guilds", "GuildMessages", "MessageContent"] })

client.on('ready', () => {
    console.log(`${client.user.tag} is now ready!`)
})

client.on('messageCreate', (message) => {
    if(message.content == 'hello') {
        message.reply('Hello, world!')
    }
})

client.login(config.token)
