const Discord = require('discord.js');

module.exports = {
    name: 'linki',
    description: 'linki',
    execute(message, args) {
        let linkacze = new Discord.MessageEmbed()
        .setColor('#c8cad3')
        .setTitle('Zbiór przydatnych linków')
        .addField('Forum', 'https://story-of-magic.forumpolish.com/')
        .addFields(
            { name: 'Forum', value: 'https://story-of-magic.forumpolish.com/'},
            /*{ name: '\u200B', value: '\u200B' },*/
            { name: 'Forum', value: 'https://story-of-magic.forumpolish.com/'},
            { name: 'Forum', value: 'https://story-of-magic.forumpolish.com/'},
        )

        message.channel.send(linkacze);
    }
}