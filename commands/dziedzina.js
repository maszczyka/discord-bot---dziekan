module.exports = {
    name: 'dziedzina',
    description: 'losowanie dziedzin',
    execute(message, args) {
        let dziedziny = [
            "Magia Fizyczna",
            "Magia Mentalna",
            "Magia Iluzji",
            "Magia Uzdrawiania",
            "Magia Wiedzy",
            "Magia Natury",
            "Magia Bojowa"
        ]; 

        let fiz = [
            "Drobne naprawy",
            "Telekineza",
            "Lewitacja",
            "Fosforomancja",
            "Manipulacja zimnem",
            "Manipulacja ogniem",
            "Transmutacja"
        ];

        let ilu = [
            "Niewidzialność",
            "Magia Lustrzana",
            "Projekcje",
            "Manipulacja zmysłami"
        ];

        let nat = [
            "Botanika",
            "Manipulowanie roślinami",
            "Manipulowanie pogodą"
        ];

        let ment = [
            "Telepatia",
            "Manipulowanie wspomnieniami",
            "Manipulacja snami",
            "Jasnowidztwo",
            "Quaeromancy"
        ];

        let uzd = [
            "Leczenie chorób i ran",
            "Analiza klątw",
            "Egzorcyzmy",
            "Przygotowywanie eliksirów"
        ];

        let wied = [
            "Horomancja",
            "Prognozowanie okoliczności",
            "Meta-skład",
            "Magia ochronna",
            "Magia sukcesu"
        ];

        let random = Math.floor(Math.random() * 7);

        if(random == 0){
            let ranfiz = Math.floor(Math.random() * 7);
            message.channel.send(dziedziny[random] + " -> "+ fiz[ranfiz]);
        } else if(random == 1){
            let ranment = Math.floor(Math.random() * 5);
            message.channel.send(dziedziny[random] + " -> "+ ment[ranment]);
        } else if(random == 2){
            let ranilu = Math.floor(Math.random() * 4);
            message.channel.send(dziedziny[random] + " -> "+ ilu[ranilu]);
        } else if(random == 3){
            let ranuzd = Math.floor(Math.random() * 4);
            message.channel.send(dziedziny[random] + " -> "+ uzd[ranuzd]);
        } else if(random == 4){
            let ranwied = Math.floor(Math.random() * 5);
            message.channel.send(dziedziny[random] + " -> "+ wied[ranwied]);
        } else if(random == 5){
            let rannat = Math.floor(Math.random() * 3);
            message.channel.send(dziedziny[random] + " -> "+ nat[rannat]);
        } else if(random == 6){
            message.channel.send(dziedziny[random]);
        }



    }
}