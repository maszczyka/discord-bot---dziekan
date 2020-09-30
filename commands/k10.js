module.exports = {
    name: 'k10',
    description: 'rzut jedną kością k10',
    execute(message, args) {
        let rzut = Math.floor((Math.random() * 10) + 1);
        let rzut2 = Math.floor((Math.random() * 6) + 1);
        let rzut3 = Math.floor((Math.random() * 6) + 1);
        message.channel.send(rzut);
    }
}

//+", "+rzut2+", "+rzut3