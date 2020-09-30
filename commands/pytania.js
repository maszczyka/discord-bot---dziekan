module.exports = {
    name: 'pytania',
    description: 'losowe odpowiedzi na pytania userów',
    execute(message, args) {
        let replies = [
            "Jak najbardziej",
            "Zdecydowanie nie",
            "Nie ma takiej opcji"
        ];
        let random = Math.floor(Math.random() * 3)
        message.channel.send(replies[random]);
    }
}