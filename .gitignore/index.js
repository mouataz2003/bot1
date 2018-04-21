const Discord = require('discord.js')
const bot = new Discord.Client()

var prefix = ("*")
bot.on('ready', function () {
    console.log("Je suis connecté !")
})

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
    return channel.send('Welcome To Gamers_Minecraft мc' + member.displayName)
}).catch(console.error)
})

bot.on('ready', function() {
    bot.user.setActivity('*help')

})

bot.on('message', message => {
    if (message.content === prefix + 'help') {
    message.channel.sendmessage('Les Command Est : \n *help \n *ping \n *avatar')
}

if (message.content === prefix + 'ping') {
    message.channel.send('pong !')
}

})

bot.on('message', message => {
    if (message.content === prefix + 'avatar') {
    message.channel.sendmessage(message.author.avatarURL)
}
})

bot.login('NDM3MTk2Mzc2NDA1OTY2ODQ4.DbyiXw.evX27PwlA6cpuIPINuShzuRQ5OM')
