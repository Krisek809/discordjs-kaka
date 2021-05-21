module.exports = {
    name: 'invite',
    description: 'Zaproś bota na swój serwer!',
    execute(message, args, Discord) {
        let newembet = new Discord.messageembet()

        .setcolor('#ff80ed')
        .settuttle('**Zaproś mnie na swój serwer!**')
        .seturl('https://discord.com/api/oauth2/authorize?client_id=843535729971167242&permissions=8&scope=bot')
        .setDescription('Aby zaprosić mnie na swój serwer uzyj **linku powyżej**')
        .setfooter('z góry dzięki!')

        message.channel.send(newEmbed);
        }
    }