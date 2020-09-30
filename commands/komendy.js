const Discord = require('discord.js');

module.exports = {
    name: 'komendy',
    description: 'wyświetla listę komend',
    execute(message, args) {
        let komendy = new Discord.MessageEmbed()
        .setColor('#c8cad3')
        .setTitle('Zbiór komend wraz z opisami')
        .addFields(
            {name: '!linki', value: 'Wyświetla zbiór przydatnych linków'},
            {name: '!p', value: 'losowe odpowiedzi'},
            {name: '!k10', value: 'rzut kostką k10'},
            {name: '!order', value: 'wręcza order'}
            );

        message.channel.send(komendy);
    }
}