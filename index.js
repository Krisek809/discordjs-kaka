const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+';

client.on('ready', () => {

  const statuslist = [
    '+pomoc - GeniBot',
    '+pomoc - GeniBot',
    '+pomoc - GeniBot',
    '+pomoc - GeniBot',
    '+pomoc - GeniBot',
    '+pomoc - GeniBot',
  ];

  setInterval(() => {
    const index = Math.floor(Math.random() * (statuslist.length - 1) + 1);
    client.user.setActivity(statuslist[index]);
  }, 2000)

  console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', msg => {
  if (msg.content === '+ping') {
    msg.reply('Pong!');
  }

  if (msg.content.indexOf(prefix) !== 0) return

if (channel.content === "+autor")
  channel.send('Autorem Bota jest Krisek');
  client.user.setActivity(`Serwery: ${client.guilds.cache.size}`)

});

client.login('ODQzNTM1NzI5OTcxMTY3MjQy.YKFR3g.KRR9RlBvobN_GsbSled-94BGm6Q');