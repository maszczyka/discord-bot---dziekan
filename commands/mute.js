const ms = require('ms');
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'mute',
    description: 'wyciszanie userów czasowo',
    execute(message, args) {

        if(message.member.roles.cache.has('762046753104330763')){
            let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
            console.log(person);
            if(!person) return message.channel.send("Nie mogę znaleźć takiego użyszkodnika");


            let muted = message.guild.roles.cache.find(role => role.name === "Muted");
            if(!muted) return message.channel.send("Nie mogę znaleźć takiej roli");

            let time = args[1];
            if(!time) return message.channel.send("Nie podałeś czasu!");

            person.roles.add(muted.id);

            setTimeout(function() {
            person.roles.remove(muted.id);
            }, ms(time));

        } else {
            message.channel.send("Nie masz tyle władzy");
        }





    }
}