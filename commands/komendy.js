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
            {name: '!kosc x y', value: 'rzut kostką | x - ilość kostek, y - ilość ścian | ex. !kosc 2 10 (rzut dwiema kostkami o dziesięciu ścianach)'},
            {name: '!order', value: 'wręcza order'},
            {name: '!dziedzina', value: 'Wyrzuca losową dziedzinę + dyscyplinę'},
            {name: '!kawa', value: 'wręcza kawę'}
            );
            
        message.channel.send(komendy);
    }
}