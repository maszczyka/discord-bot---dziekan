const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

var auth = require('./auth.json');

const fs = require('fs');

client.commands = new Discord.Collection(); 

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log('Eluwina dziekan wbił na dzielnię');
    client.user.setStatus('idle');
    client.user.setActivity('story-of-magic.forumpolish.com', {
        type: 0, 
        url: "https://story-of-magic.forumpolish.com/",
        name: "Blop",
        status: "idle"
    }); 
    });

client.on("guildMemberAdd", (member) => {
        console.log(member)
        const channel = member.guild.channels.cache.get('761954347016781825')
        channel.send(`Please welcome <@${member.id}> to the server!`);
    });

client.on('message', message => {
// Jezeli wiadomosc nie zaczyna sie od prefiksu, lub to bot jest autorem nie rób nic.
if(!message.content.startsWith(prefix) || message.author.bot) return; 
// Wiadomości typu !check wiki <- są podzielone
const args = message.content.slice(prefix.length).split(/ +/);
// Zmienia wiadomości, aby były z małych liter, dzięki temu jak ktoś pierdolnie z duzych komendę, to się bot nie zesra
const command = args.shift().toLowerCase();

// Nazwa komendy
if(command === 'p') {
    client.commands.get('pytania').execute(message, args);
} 

else if(command === 'order') {
    message.channel.send('*wręcza order*');
} 

else if(command === 'linki') {
    client.commands.get('linki').execute(message, args);
} 

else if(command === 'komendy') {
    client.commands.get('komendy').execute(message, args);
} 

else if(command === 'kosc') {
    client.commands.get('kosc').execute(message, args);
}

else if(command === 'zlap') {
    client.commands.get('zlap').execute(message, args);
} 

else if(command === 'kawa') {
    message.channel.send("*podaje kawę*");
}

else if(command === 'dziedzina') {
    client.commands.get('dziedzina').execute(message, args);
} 

else if(command === 'mute') {
    client.commands.get('mute').execute(message, args);
}
});



client.login(auth.token)
