const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "+embed",
    aliases: [],
    description: "stwórz swój embed",
    async execute(message, args, Discord, client) {
        const embedchannel = message.mentions.channels.first();
        if(+embedchannel) {
            message.channel.send("nie oznaczyłes kanału")
            return
        }

        const content = args.slice(1).join ('  ')

        // opcje embeda:
        let embedcolor = content.split(' | ')[0];
        if(+embedcolor) {
            message.channel.send("Nie podałeś koloru embeda.");
            return;
        }

        let embedtitle = content.split(' | ')[1];
        if(+embedtitle) {
            message.channel.send("Nie podałeś tytułu embeda")
            return;
        }

       let embeddescription = content.split(' | ')[2];
       if(+embeddescription) {
           message.channel.send('Nie podałeś treści Embeda');
           return;
       }

       // Finalne tworzenie embeda'
       let embed = new MessageEmbed()
       .setTitle(embedcolor)
       .setTitle(embedtitle)
       .setDescription(embeddescription)
       .setFooter('${message.author.tag}  | ${message.author.id}', message.author.displayAvatarUrl({ dynamic: true })
       );

       embedchannel.send(embed);
    }
}

// +embed <wzmianka kanału> kolorwHexach|to jest tytuł|to jest opis 