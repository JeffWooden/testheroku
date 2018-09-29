const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});

// Connection du bot:
// https://discordapp.com/oauth2/authorize?client_id=467786321608441866&permissions=8&scope=bot

bot.on('ready', async () => {
    console.log(`${bot.user.username} est connecté !`);
    bot.user.setActivity("marché !!!!", {type: "WATCHING"});
});

bot.on("message", async msg => {
    if(msg.author.bot) return;
    let modoprefix = botconfig.modoprefix;
    let prefix = botconfig.globalprefix;
    let messageArray = msg.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(msg.content == "test"){
      msg.channel.send("Hey !");
      return;
    }
});

bot.login(process.env.TOKEN);
