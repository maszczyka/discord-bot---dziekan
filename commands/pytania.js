module.exports = {
    name: 'pytania',
    description: 'losowe odpowiedzi na pytania userów',
    execute(message, args) {
        let replies = [
            "Jak najbardziej.",
            "Zdecydowanie nie.",
            "Nie ma takiej opcji.",
            "Nie ma problemu.",
            "Idk człowiek, jestem tylko botem.",
            "Łajza jest odpowiedzią na wszystkie pytania.",
            "Zapytaj mamy.",
            "Znakomity pomysł, idź daj się zadźgać na ulicy!",
            "Zapytaj taty.",
            "Być może…",
            "Nie, ale masz kinderka na pocieszenie *daje kinderka*.",
            "Mój wywiad donosi: NIE.",
            "Da Vinki?!",
            "Jest szansa.",
            "Kto wie? Ja na pewno nie, jestem tylko botem...",
            "Wygląda legitnie…",
            "Powiedziałbym, że tak, ale Łajza wyciągnie wtyczkę",
            "Zapomnij. Nie ma mowy.",
            "Wszystko w swoim czasie.",
            "Jeden Rabin powie tak, inny Rabin powie nie…",
            "Nie teraz, kawę piję.",
            "To musi poczekać.",
            "Mam pewne wątpliwości, czy to aby nie jebnie.",
            "Zbyt wcześnie, aby powiedzieć…",
            "Chyba żartujesz? Może jeszcze wysadźmy uniwerek?",
            "Do it. I dare you, I double dare you – DO IT!",
            "Dla mnie rewelacja. To chcesz stracić rękę, czy nogę?",
            "Spadaj. Bez kawy nie pracuję.",
            "Za odpowiedź na to pytanie, musisz zapłacić 4,99 zł.",
            "A co ja jestem, darmowa poradnia? Idź zapytaj kogo innego.",
            "O B U R Z A J Ą C E !"

        ];
        let random = Math.floor(Math.random() * 31)
        message.channel.send(replies[random]);
    }
}